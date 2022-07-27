import  { useState } from 'react';

export const counter = defaultNum => {
    const [ count, setCount ] = useState(defaultNum);
    const counterHandler = (num) => {
        setCount(count + num);
    };
    return {
        count,
        counterHandler
    };
};