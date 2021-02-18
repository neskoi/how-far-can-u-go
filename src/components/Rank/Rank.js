import React from 'react';
import './Rank.css';
import Position from './Position/Position';
import dbJason from '../../dataControl/localStorageManipulation';

const Rank = () => {
    const records = dbJason.getLocalBaseInfo();

    const ranking = records.map(player => {
        return <Position key={player.id} nick={player.nick} score={player.score} recordDate={player.recordDate}/>;
    });
    
    return (
        <div className="rank">
            <h1>R A N K I N G</h1>
            <strong><Position nick="Nickname" score="Score" recordDate="Date"/></strong>
            {ranking}
        </div>
    );
}

export default Rank;