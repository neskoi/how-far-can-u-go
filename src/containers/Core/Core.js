import React, { useRef, useState } from 'react';
import './Core.css';
import Path from '../../components/Path/Path';
import Score from '../../components/Score/Score';
import Modal from '../../components/UI/Modal/Modal';
import dbJson from '../../dataControl/localStorageManipulation';

// TODO mover essa func, talvez.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Core = () => {
    const [gameInfo, setGameInfo] = useState({
        paths: 1,
        isPlaying: true,
        recordist: false,
    });
    
    const textInput = useRef(null);

    const rightPathHandler = () => {
        setGameInfo({...gameInfo, paths: gameInfo.paths + 1});
    }

    const wrongPathHandler = () => {
        setGameInfo({...gameInfo, isPlaying: false, recordist: checkNewRecord()});
    }

    const restartGame = () => {
        setGameInfo({paths: 1, isPlaying: true});
    }

    const checkNewRecord = () => {
        return dbJson.checkNewRecord(gameInfo.paths - 1);
    }

    const nickInputHandler = () => {
        const nick = textInput.current.value.slice(0,10) || "Who?";
        dbJson.setLocalBaseInfo(nick, gameInfo.paths - 1);
        setGameInfo({...gameInfo, recordist:false});
        restartGame();
    }

    let pathsToRender = [];
    
    while(pathsToRender.length < Math.ceil(gameInfo.paths / 3)){
        pathsToRender.push(
            <Path key={pathsToRender.length} clicked={rightPathHandler} type='X'/>
        );
    }

    while(pathsToRender.length < gameInfo.paths){
        pathsToRender.push(
            <Path key={pathsToRender.length} clicked={wrongPathHandler}/>
        );
    }

    shuffleArray(pathsToRender);

    return (
        <div className='Core'>
            <Score distance={gameInfo.paths - 1}/>
            {pathsToRender}
            <Modal visible={!gameInfo.isPlaying} toClose={restartGame}>
                <h1>You lose bro.<br/>;-; So sad! ;-;</h1>
                <br/>
                <h3>Your total score:</h3>
                <h1>{gameInfo.paths - 1}</h1>
                <button onClick={restartGame}>Try Again!</button>
            </Modal>
            <Modal visible={gameInfo.recordist}>
                <h1>Wow! Good run bro.</h1>
                <h2>You're a recordist now!!!</h2>
                <h3>Tell me your name please:</h3>
                <input type="textfield" ref={textInput} placeholder="Really, tell me it ASAP!"/>
                <button onClick={nickInputHandler}>Done</button>
            </Modal>
        </div>
    )
}

export default Core;