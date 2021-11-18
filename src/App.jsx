import React from 'react';
import PropTypes from 'prop-types'; // 引入props type checker
import './App.css';
/*
    渲染函式的第一個參數是props
    因為是物件所以可以解構, 且透過物件預設可以預設props value
*/
function NameCard ({ name, age, gender = '男' }) {
    return (
        <div className = "card-name">
            我是: { name }, 今年: { age }, 是{ gender }姓
        </div>
    );
}
// props的型別檢查
NameCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string
};

function App () {
    return (
        <div>
            {/* 組件引入props */}
            <NameCard
                name = "JJJ"
                age = { 12 }
            />
        </div>
    );
}

export default App;
