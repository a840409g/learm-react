import React from 'react';
import './NameCard.css';

interface INameCard {
    name: string,
    age: number,
    gender: string
}

function NameCard ({ name, age, gender }:INameCard) {
    return (
        <div className = "card-name">
            ts版本
            我是: { name }, 今年: { age }, 是{ gender }姓
        </div>
    );
}

NameCard.defaultProps = {
    gender: '男'
};

export default NameCard;