import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">

                <header>
                    <Link to="/">
                        <span class="logo">Home</span>
                    </Link>
                </header>

                <div className="content">
                    {this.props.children}
                </div>

                <footer>
                    <p>
                        MIT License
                    </p>
                </footer>

            </div>
        );
    }
}