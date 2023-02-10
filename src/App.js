import "./App.css"
import React, {useState} from "react"
import NavBar from "./components/NavBar"
import News from "./components/News"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoadingBar from "react-top-loading-bar"

const App = () => {
	//REACT_APP_NEWS_API_SK = "3b158fa948604ad3a11f2d5099eddbca"
	//AT - 7c0eb8862a63466088ff9fa0ff2d0467
	//REACT_APP_NEWS_API_RJ = "2791e13e936f441ab96d3b40560cd868"
	//apiKey = process.env.REACT_APP_NEWS_API_RJ
	const apiKey = "7c0eb8862a63466088ff9fa0ff2d0467"

	const [progress, setProgress] = useState(0)

	const setProgressBar = (progress) => {
		setProgress(progress)
	}

	const pageSize = 8

	return (
		<Router>
			<div>
				<LoadingBar color='#f11946' progress={progress} />
				<NavBar />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<News
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='nav-general'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='home-general'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='business'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='entertainment'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='general'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='health'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='science'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='sports'
								pageSize={pageSize}
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
								setProgress={setProgressBar}
								apiKey={apiKey}
								key='technology'
								pageSize={pageSize}
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
export default App
