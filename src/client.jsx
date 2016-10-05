import React from 'react';
import ReactDOM from 'react-dom';

const INITIAL_NAMES = [
	'Theresa',
	'David',
	'Gordon',
	'Tony',
	'John',
	'Margaret',
	'James'
];

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: INITIAL_NAMES
        };
    }

	render() {
		return (
			<div>
				<ol>
					{this.state.names.map(name => {
						return <li>{name}</li>
					})}
				</ol>

			</div>
		);
	}
}

window.onload = () => {
	ReactDOM.render(<Home />, document.getElementById('main'));
};