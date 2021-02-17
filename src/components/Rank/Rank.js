import React from 'react';
import './Rank.css';
import Position from './Position/Position';
import defaultRecords from '../../assets/data/ranking.json';


const rank = () => {
    const recordStorage = localStorage;
    let records;

    if(!recordStorage.getItem('localRecords')){
        const values = JSON.stringify(defaultRecords);
        recordStorage.setItem('localRecords', values);
        records = defaultRecords;
    }else{
        const localRecords = JSON.parse(recordStorage.getItem('localRecords'));
        records = localRecords;
    };

    const ranking = records.map(player => {
        return <Position key={player.id} nick={player.nick} score={player.score} recordDate={player.recordDate}/>;
    });
    
    return (
        <div className="Rank">
            <h1>R A N K I N G</h1>
            <strong><Position nick="Nickname" score="Score" recordDate="Date"/></strong>
            {ranking}
        </div>
    );
}

export default rank;