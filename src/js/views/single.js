import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect (() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/edulopes", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		  }
		})
	}, []);
	

	return (
		<div className="jumbotron">
			<div className="container mt-5">
				<h2>Contact List</h2>
				<hr/>
				<div className="row">
				<div className="col-md-12">
					
					<div className="text-center" id="addButton">
						<a href="#" className="btn btn-primary"><i className="fas fa-plus"></i> Add Contact</a>
					</div>

					<div className="card mb-3">
					<div className="card-body">
						<div className="media">
						<img
							src="/rigo-baby.jpg"
							className="rounded-circle mr-3"
							alt="Contact 1"
							style={{ width: '50px', height: '50px' }}
						/>
						<div className="media-body">
							<h5 className="mt-0">(name of the user)</h5>
							<p><i className="fas fa-map-marker-alt"></i> (address of the user)</p>
							<p><i className="fas fa-phone"></i> (number of the user)</p>
							<p><i className="fas fa-envelope"></i> (email for the user)</p>
						</div>
						<div className="ml-auto">
							<a href="#" className="btn btn-sm mr-2"><i className="fas fa-pencil-alt"></i></a>
							<a href="#" className="btn btn-sm"><i className="fas fa-trash"></i></a>
						</div>
						</div>
					</div>
					</div>
					<Link to="/demo">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
				</div>
			</div>

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
