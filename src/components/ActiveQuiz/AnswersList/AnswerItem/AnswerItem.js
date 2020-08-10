import React from "react";
import s from './AnswerItem.module.css';

const AnswerItem = props => {
    const cls = [s.AnswerItem]

    if (props.state) {
        cls.push( s[props.state] )
    }

    return (
        <li className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answers.id)}
        >
            {props.answers.text}
        </li>
    )
}

export default AnswerItem;