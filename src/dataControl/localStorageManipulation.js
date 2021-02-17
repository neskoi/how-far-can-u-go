import data from '../assets/data/ranking.json';
import score from '../components/Score/Score';

const recordStorage = localStorage;

const existenceCheck = () => {
    if(!recordStorage.getItem('localRecords')){
        createLocalBase();
    }
};

const createLocalBase = () => {
    const values = JSON.stringify(data);
    recordStorage.setItem('localRecords', values);
};

const getLocalBaseInfo = () => {
    existenceCheck();
    return JSON.parse(recordStorage.getItem('localRecords'));
};

const setLocalBaseInfo = (nick = "Who?", score) => {
    existenceCheck();
    let aux;
    const date = new Date();
    const nowDateString = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
    let actualScore = {score: score, nick: nick, recordDate: nowDateString};

    const records = JSON.parse(localStorage.getItem('localRecords'));

    for(let i = 0; i < records.length; i++){
        if(actualScore.score >= records[i].score){
            aux = records[i];
            records[i] = {...actualScore, id: records[i].id};
            actualScore = aux;
        }
    }

    const values = JSON.stringify(records);
    localStorage.setItem('localRecords', values);
};

const checkNewRecord = (score) => {
    existenceCheck();
    const records = JSON.parse(localStorage.getItem('localRecords'));
    return records.some(position => position.score <= score);
}

export default {getLocalBaseInfo, setLocalBaseInfo, checkNewRecord};