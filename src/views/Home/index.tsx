import React from 'react';
import NameCard from '../../components/NameCard';

const JArr = [
    {
        name: '超級Ｊ',
        age: 360,
        style: {
            color: 'blue'
        }
    },
    {
        name: '呼拉Ｊ',
        age: 240,
        style: {
            color: 'yellow'
        }
    },
    {
        name: '哭Ｊ',
        age: 120,
    }
];
const forNameCard = JArr.map(props => (
    <NameCard
        key = { props.name }
        name = { props.name }
        age = { props.age }
        style = { props.style }
    />
));

const home = () => (
    <div>
        { forNameCard }
    </div>
);

export default home;