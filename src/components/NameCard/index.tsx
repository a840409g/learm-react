import React from 'react';
import './NameCard.css';

interface INameCard {
    name: string,
    age: number,
    style: {
        color: string
    },
    gender: string
}

function NameCard ({ name, age, style, gender }:INameCard) {
    return (
        <div
            className = "card-name"
            // style的部分也能透過變數操控
            style = { style }
        >
            ts版本
            {/* {}內的變數是透過資料操控 */}
            我是: { name }, 今年: { age }, 是{ gender }姓
        </div>
    );
}

NameCard.defaultProps = {
    gender: '男',
    style: {
        color: '#000;'
    }
};

export default NameCard;