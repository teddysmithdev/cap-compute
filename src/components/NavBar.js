import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <i className="fas fa-calculator"></i>
                        <a href="/"> </a> CapCompute
                    </a>
                </nav>
            </div>
        );
    }
}

export default NavBar;
