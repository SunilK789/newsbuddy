import "./App.css"
import React, {Component} from "react"
import NavBar from "./components/NavBar"
import News from "./components/News"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoadingBar from "react-top-loading-bar"

export default class App extends Component {
	//REACT_APP_NEWS_API_SK = "3b158fa948604ad3a11f2d5099eddbca"
	//REACT_APP_NEWS_API_RJ = "2791e13e936f441ab96d3b40560cd868"
	//7c0eb8862a63466088ff9fa0ff2d0467 //Atul
	//apiKey = process.env.REACT_APP_NEWS_API_RJ
	apiKey = "7c0eb8862a63466088ff9fa0ff2d0467"

	state = {
		progress: 0,
	}

	setProgress = (progress) => {
		this.setState({
			progress: progress,
		})
	}

	pageSize = 8

	render() {
		//console.log(this.apiKey)
		return (
			<Router>
				<div>
					<LoadingBar color='#f11946' progress={this.state.progress} />
					<NavBar />
					<Routes>
						<Route
							exact
							path='/'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='nav-general'
									pageSize={this.pageSize}
									country='in'
									category='general'
								/>
							}
						></Route>
						<Route
							exact
							path='/home'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='home-general'
									pageSize={this.pageSize}
									country='in'
									category='general'
								/>
							}
						></Route>
						<Route
							exact
							path='/business'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='business'
									pageSize={this.pageSize}
									country='in'
									category='business'
								/>
							}
						></Route>
						<Route
							exact
							path='/entertainment'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='entertainment'
									pageSize={this.pageSize}
									country='in'
									category='entertainment'
								/>
							}
						></Route>
						<Route
							exact
							path='/general'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='general'
									pageSize={this.pageSize}
									country='in'
									category='general'
								/>
							}
						></Route>
						<Route
							exact
							path='/health'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='health'
									pageSize={this.pageSize}
									country='in'
									category='health'
								/>
							}
						></Route>
						<Route
							exact
							path='/science'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='science'
									pageSize={this.pageSize}
									country='in'
									category='science'
								/>
							}
						></Route>
						<Route
							exact
							path='/sports'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='sports'
									pageSize={this.pageSize}
									country='in'
									category='sports'
								/>
							}
						></Route>
						<Route
							exact
							path='/technology'
							element={
								<News
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									key='technology'
									pageSize={this.pageSize}
									country='in'
									category='technology'
								/>
							}
						></Route>
					</Routes>
				</div>
			</Router>
		)
	}
}
