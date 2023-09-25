import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = (props) => {
  const { store, actions } = useContext(Context);

  const [fullName, setFullName] = useState();
  const [fullEmail, setFullEmail] = useState();
  const [fullPhone, setFullPhone] = useState();
  const [fullAddress, setFullAddress] = useState();

  const handleSubmit = () => {
    const contact = {
      full_name: fullName,
      email: fullEmail,
      agenda_slug: "edulopesp",
      address: fullAddress,
      phone: fullPhone,
    };

    fetch("https://playground.4geeks.com/apis/fake/contact", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok);
        console.log(resp.status);
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        alert("Successfully added new contact!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const params = useParams();
  return (
    <div className="container">
      <div className="row">
        <h1 className="d-flex justify-content-center">Add a New Contact</h1>
        <form id="frm1" action="/action_page.php">
          <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
              Full Name
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="FullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
              Email
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fullEmail"
                placeholder="Email"
                value={fullEmail}
                onChange={(e) => setFullEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
              Phone
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fullPhone"
                placeholder="Phone Number"
                value={fullPhone}
                onChange={(e) => setFullPhone(e.target.value)}
              />{" "}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
              Address
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fullAddress"
                placeholder="Address"
                value={fullAddress}
                onChange={(e) => setFullAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <Link to="/">
              <button
                className="btn btn-success my-3 btn-lg col-12"
                type="button"
                onClick={handleSubmit}
                value="save"
              >
                {" "}
                Submit New Contact{" "}
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Link to="/">
        <a href="#" className="card-link">
          or get back to contacts
        </a>
      </Link>
    </div>
  );
};

Demo.propTypes = {
  match: PropTypes.object,
};
