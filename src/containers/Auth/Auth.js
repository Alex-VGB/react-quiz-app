import React from "react";
import s from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

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
                        <Input
                            label='Email'
                        />

                        <Input
                            label='Password'
                            errorMessage='test'
                        />

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