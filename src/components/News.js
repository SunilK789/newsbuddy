import React, {useState, useEffect} from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component"
import NotFound from "./NotFound"

const News = (props) => {
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [totalResult, setTotalResult] = useState(0)
	const [resultFound, setResultFound] = useState(true)

	const capitalize = (input) => {
		return input.charAt(0).toUpperCase() + input.slice(1)
	}

	document.title = capitalize(props.category) + " - NewsBuddy"

	useEffect(() => {
		LoadNews()
	}, [])

	const fetchMoreData = async () => {
		console.log("articles.length : " + articles.length)
		console.log("totalResult : " + totalResult)

		if (articles.length <= totalResult) {
			setPage(page + 1)
			let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
				props.category
			}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${page + 1}`
			let data = await fetch(url)
			let parsedData = await data.json()
			setPage(page + 1)
			setArticles(articles.concat(parsedData.articles))
			setTotalResult(parsedData.totalResults)
		}
	}
	const LoadNews = async () => {
		props.setProgress(0)
		setLoading(true)
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${page}`
		let data = await fetch(url)
		props.setProgress(30)
		let parsedData = await data.json()

		if (parsedData.status === "error") {
			setResultFound(false)
		} else {
			setResultFound(true)
		}
		props.setProgress(70)
		setArticles(parsedData.articles)
		setTotalResult(parsedData.totalResults)
		setLoading(false)
		props.setProgress(100)
	}

	return (
		<>
			{resultFound ? (
				<div>
					<h1 className='text-center'>
						NewsBuddy - Top {capitalize(props.category)} Headlines
					</h1>
					{loading && <Spinner></Spinner>}

					<InfiniteScroll
						dataLength={articles.length}
						next={fetchMoreData}
						hasMore={articles.length !== totalResult}
						loader={articles.length >= totalResult ? "" : <Spinner></Spinner>}
					>
						<div className='container'>
							<div className='row'>
								{articles.map((element) => {
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
				</div>
			) : (
				<NotFound></NotFound>
			)}
		</>
	)
}

export default News
