import React from "react"

const NewsItem = (props) => {
	let {title, description, imageUrl, newsUrl, source, author, date} = props
	
	let defaultImageUrl =
		"https://images.livemint.com/img/2023/02/09/600x338/Stock_market_news_1675911573752_1675911573909_1675911573909.jpg"
	return (
		<div>
			<div className='card mx-2 my-3'>
				<div
					className='position-absolute tip-0 translate-middle badge rounded-pill bg-danger'
					style={{left: "50%", zIndex: "1"}}
				>
					{source}
				</div>
				<img
					src={imageUrl ? imageUrl : defaultImageUrl}
					className='card-img-top'
					alt='...'
					style={{height: "180px"}}
				/>
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>{description}</p>
					<p className='card-text'>
						<small className='text-muted'>
							by {author === null ? "Unknown" : author} on{" "}
							{new Date(date).toUTCString()}
						</small>
					</p>
					<div className='d-flex justify-content-between'>
						<a href={newsUrl} target='_blank' className='btn btn-sm btn-dark'>
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NewsItem
