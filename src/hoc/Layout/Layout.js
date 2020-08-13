import React from 'react';
import s from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

class Layout extends React.Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className={s.Layout}>

                <MenuToggle
                onToggle={this.toggleMenuHandler}
                isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;