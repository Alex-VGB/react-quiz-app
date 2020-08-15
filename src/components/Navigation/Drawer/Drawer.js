import React from "react";
import s from './Drawer.module.css';
import {NavLink} from 'react-router-dom';
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends React.Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links) {
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

        const links = [
            {to: '/', label: 'List of all tests', exact: true}
        ]

        if(this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Create test', exact: false})
            links.push({to: '/logout', label: 'Log Out', exact: false})
        } else {
            links.push({to: '/auth', label: 'Authorization', exact: false})
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        )
    }

}

export default Drawer;