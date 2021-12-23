import React from 'react';
import components from '../../components';
const { NameCard } = components;

const JArr = [
    {
        name: '超級Ｊ',
        age: 360,
        style: {
            color: 'blue'
        },
        isShow: true
    },
    {
        name: '呼拉Ｊ',
        age: 240,
        style: {
            color: 'green'
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
        isShow = { props.isShow }
    />
));

const home = () => (
    <div>
        { forNameCard }
    </div>
);

export default home;