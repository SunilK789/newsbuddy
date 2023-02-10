import React, {Component} from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component"

export default class News extends Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			totalResult: 0,
			apiKey: "2791e13e936f441ab96d3b40560cd868",
			//apiKey: "3b158fa948604ad3a11f2d5099eddbca",
		}

		document.title = this.capitalize(this.props.category) + " - NewsBuddy"
	}

	async componentDidMount() {
		await this.LoadNews()
	}
	fetchMoreData = async () => {
		this.setState({page: this.state.page + 1})
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page}`

		let data = await fetch(url)
		let parsedData = await data.json()
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResult: parsedData.totalResults,
		})
	}
	async LoadNews() {
		this.setState({loading: true})
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page}`

		let data = await fetch(url)
		let parsedData = await data.json()
		this.setState({
			articles: parsedData.articles,
			totalResult: parsedData.totalResults,
			loading: false,
		})
	}

	capitalize = (input) => {
		return input.charAt(0).toUpperCase() + input.slice(1)
	}

	render() {
		let {pageSize} = this.props
		return (
			<>
				<h1 className='text-center'>
					NewsBuddy - Top {this.capitalize(this.props.category)} Headlines
				</h1>
				{this.state.loading && <Spinner></Spinner>}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResult}
					loader={
						this.state.articles.length >= this.state.totalResult ? (
							""
						) : (
							<Spinner></Spinner>
						)
					}
				>
					<div className='container'>
						<div className='row'>
							{this.state.articles.map((element) => {
								return (
									<div className='col-md-3' key={element.url}>
										<NewsItem
											title={element.title}
											description={element.description}
											imageUrl={element.urlToImage}
											newsUrl={element.url}
											source={element.source.name}
											author={element.author}
											date={element.publishedAt}
										></NewsItem>
									</div>
								)
							})}
						</div>
					</div>
				</InfiniteScroll>
			</>
		)
	}
}