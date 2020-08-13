import React from "react";
import s from './Drawer.module.css';
import {NavLink} from 'react-router-dom';
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    {to: '/', label: 'List of all tests', exact: true},
    {to: '/auth', label: 'Authorization', exact: false},
    {to: '/quiz-creator', label: 'Create test', exact: false}
]

class Drawer extends React.Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={s.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [s.Drawer]
        if (!this.props.isOpen) {
            cls.push(s.close)
        }
        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        )
    }

}

export default Drawer;