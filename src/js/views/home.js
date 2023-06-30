import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Home = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	useEffect (() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/edulopes", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		  }
		})
	}, []);

	const addContact = () => {
		fetch("https://assets.breatheco.de/apis/fake/contact/", {
		method: "POST",
		body:
		{
			"full_name": fullName ,
			"email": email,
			"agenda_slug": "edulopes",
			"address": address ,
			"phone": phone
		},
		headers: {
			"Content-Type": "application/json"
		  }
		});
		};

		const submitContact = async () => {
			try {
			  const response = await fetch(
				"https://assets.breatheco.de/apis/fake/contact/agenda/edulopes",
				{
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json"
				  }
				}
			  );
			} catch (error) {
			  console.error(error);
			}
		  };
	
	

	return (
			<div className="container mt-5" id="newContactCon">
			  <h2 className="mb-4">Add a New Contact</h2>
			  <hr />
		
			  <div className="row">
				<div className="col-12">
				  <form className="">
					<div className="form-group">
					  <label htmlFor="fullName">Full Name</label>
					  <input type="text" className="form-control" id="fullName" placeholder="Enter full name" onChange={(e) => setFullName(e.target.value)}/>
					</div>
					<div className="form-group">
					  <label htmlFor="email">Email</label>
					  <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
					</div>
					<div className="form-group">
					  <label htmlFor="phone">Phone</label>
					  <input type="tel" className="form-control" id="phone" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} />
					</div>
					<div className="form-group">
					  <label htmlFor="address">Address</label>
					  <input type="text" className="form-control" id="address" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)}/>
					</div>
		
					<button type="submit" className="col-12 mt-3 btn btn-primary btn-block" onClick={addContact}>Save</button>
				  </form>
		
				  <p className="mt-3">
					or get back to the contacts&nbsp;
					<Link to="/demo">here</Link>
				  </p>
				</div>
			  </div>
			</div>
		  );
};
