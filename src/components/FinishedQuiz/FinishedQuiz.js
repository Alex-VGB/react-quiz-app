import React from "react";
import s from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success' ) {
            total ++
        }
        return total
    }, 0)
    return (
        <div className={s.FinishedQuiz}>
            <ul>
            {
                props.quiz.map((quizItem, index) => {

                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        s[props.results[quizItem.id]]
                    ]

                    return <li
                        key={index}
                    >
                        <strong>{index + 1}</strong>.&nbsp;
                        {quizItem.question}
                        <i className={cls.join(' ')}/>
                    </li>
                })
            }
            </ul>
            <p>Right answers {successCount} of {props.quiz.length}</p>
            <div>
                <Button onClick={props.OnRetry} type="primary">Repeat Question</Button>
                <Link to={'/'}>
                <Button type="success">Go to the list of tests</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz;