import React, { useState } from 'react';
import './Core.css';
import Path from '../../components/Path/Path';
import Score from '../../components/Score/Score';
import Modal from '../../components/UI/Modal/Modal';

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
    });

    const rightPathHandler = () => {
        setGameInfo({...gameInfo, paths: gameInfo.paths + 1});
    }

    const wrongPathHandler = () => {
        setGameInfo({...gameInfo, isPlaying: false});
    }

    const restartGame = () => {
        setGameInfo({paths: 1, isPlaying: true});
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
                <h1>You lose bro, so sad! ;-;</h1>
                <br/>
                <h3>Your total score: {gameInfo.paths - 1}</h3>
                <button onClick={restartGame}>Again!</button>
            </Modal>
        </div>
    )
}

export default Core;