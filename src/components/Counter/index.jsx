import React, { useState } from 'react';
import { counter } from '../../utils';
import './Counter.css';

const Counter = () => {
    const {count, counterHandler } = counter(4);
    const [ memberInfo, setMemberInfo ] = useState({
        name: 'Joe',
        age: 0
    });
    const updateMemberInfoHandler = (newMemberInfo) => {
        const updatedMemberInfo = {
            ...memberInfo,
            ...newMemberInfo
        };
        // const {name, age} = memberInfo;
        // const updatedMemberInfo = {
        //     name,
        //     age: age + 1
        // };

        setMemberInfo(updatedMemberInfo);
    };


    return (
        <div>
            <button
                onClick = { () => counterHandler(1) }
            >
                ++
            </button>
            <p>count now { count }</p>
            <br />
            <button
                onClick = { () => updateMemberInfoHandler({ age: memberInfo.age + 1 }) }
            >
                更新會員年齡
            </button>
            <div>
                name: {memberInfo.name}
            </div>
            <div>
                age: {memberInfo.age}
            </div>
        </div>
    );
};


export default Counter;