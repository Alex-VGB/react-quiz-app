import React from 'react';
import s from './QuizList.module.css';
import {NavLink} from 'react-router-dom';
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

export default class QuizList extends React.Component {
    state = {
        quizzes: [],
        loading: true
    }

    renderQuizzes() {
        return this.state.quizzes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-3ed78.firebaseio.com/quizes.json')
            const quizzes = []

            Object.keys(response.data).forEach((key, index) => {
                quizzes.push({
                    id: key,
                    name: `Test ${index + 1}`
                })
            })
            this.setState({
                quizzes,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        return (
            <div className={s.QuizList}>
                <div>
                    <h1>List of all tests</h1>

                    {
                        this.state.loading
                        ? <Loader />
                        : <ul>{this.renderQuizzes()}</ul>
                    }
                </div>
            </div>
        );
    }
}