import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchfield } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
	};
};

const App = ({ searchField, onSearchChange }) => {
	const [robots, setRobots] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				setRobots(users);
			});
	}, []);

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});
	return !robots.length ? (
		<h1>Loading...</h1>
	) : (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</Scroll>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
