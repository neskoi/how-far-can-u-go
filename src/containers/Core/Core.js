import React, { useState } from 'react';
import './Core.css';
import Path from '../../components/Path/Path';
import Score from '../../components/Score/Score';

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
        setGameInfo({...gameInfo, paths: 1});
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
        </div>
    )
}

export default Core;

/* for(let i = 0; pathsToRender.length < gameInfo.paths; i++){
        if(pathsToRender.length < Math.ceil(gameInfo.paths / 3)){
            pathsToRender.push(
                <Path key={i} clicked={rightPathHandler} type='X'/>
            );
        }else{
            pathsToRender.push(
                <Path key={i} clicked={wrongPathHandler}/>
            );
        }
    } */