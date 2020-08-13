import React from "react";
import s from './Auth.module.css';
import Button from "../../components/UI/Button/Button";

export default class Auth extends React.Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }
    submitHandler = event => {
        event.preventDefault()
    }
    render() {
        return (
            <div className={s.Auth}>
                <div>
                    <h1>Auth</h1>

                    <form onSubmit={this.submitHandler} className={s.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Log In
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Create New Account
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}