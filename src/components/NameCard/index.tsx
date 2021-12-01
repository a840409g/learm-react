import React from 'react';
import './NameCard.css';

interface INameCard {
    name: string,
    age: number,
    style: {
        color: string
    },
    gender: string,
    isShow: boolean
}
// 用函式去決定輸出內容
function showSomeText (bool:boolean) {
    return bool ? '超爽' : '爽';
}
// 用函式去決定輸出tag
function showSomeTag (bool:boolean) {
    return bool ? <div>我是div</div> : <p>我是p</p>;
}
// const classes = (isShow:boolean) => ({
//     'card-name': isShow,
//     cards: !isShow
// })
const classes = () => [ 'card-name', 'cards' ].join(' ');
function NameCard ({ name, age, style, gender, isShow }:INameCard) {
    return (
        <div
            className = { classes() }
            style = { style }
        >
            ts版本
            我是: { name }, 今年: { age }, 是{ gender }姓
            {/* 將參數傳給函式去做判斷 */}
            <div>{ showSomeText(isShow) }</div>
            {/* 也可以在這裡寫判斷, 但整理成函式比較好看 */}
            <div>{ isShow ? '超爽' : '爽' }</div>
            { showSomeTag(isShow) }
        </div>
    );
}

NameCard.defaultProps = {
    gender: '男',
    style: {
        color: '#000;'
    },
    isShow: false
};

export default NameCard;