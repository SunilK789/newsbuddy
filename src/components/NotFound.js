import React, {Component} from "react"

const NotFound = () => {
	return (
		<div class='container text-center my-5'>
			<div class='row'>
				<div class='col-md-12'>
					<h1>Oops!</h1>
					<h2>404 Not Found</h2>
					<div class='error-details'>
						Sorry, an error has occured, Requested page not found!
					</div>
				</div>
			</div>
		</div>
	)
}
export default NotFound
