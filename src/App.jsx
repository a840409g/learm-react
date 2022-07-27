import React from 'react';
import PropTypes from 'prop-types'; // 引入props type checker
import './App.css';
import Counter from './components/Counter';
const JArr = [
    {
        name: '大Ｊ',
        age: 36,
    },
    {
        name: '中Ｊ',
        age: 24,
    },
    {
        name: '小Ｊ',
        age: 12,
    }
];
function NameCards () {
    return (
        <div>
            {
                JArr.map(items => (
                    <div
                        className = "card-name"
                        key = { items.name }
                    >
                        我是: { items.name }, 今年: { items.age }, 是{ items.gender }姓
                    </div>
                ))
            }
        </div>
    );
}

NameCards.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
            gender: PropTypes.string
        })
    )
};

function App () {
    return (
        <Counter />
    );
}

export default App;
