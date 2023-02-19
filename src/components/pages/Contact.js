import React from "react";
import { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    inquirerName: "",
    inquirerEmail: "",
    inquirerMessage: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { inquirerName, inquirerEmail, inquirerMessage } = formState;

  const validateForm = (event) => {
    event.preventDefault();

    if (event.target.name === "inquirerName") {
      if (!event.target.value.length) {
        setErrorMessage("ERROR: Name is a required field");
      } else {
        setErrorMessage("");
      }
    }
    if (event.target.name === "inquirerMessage") {
      if (!event.target.value.length) {
        setErrorMessage("ERROR: Message is a required field");
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };
  const validateEmail = (event) => {
    event.preventDefault();

    if (event.target.name === "inquirerEmail") {
      if (!event.target.value.length) {
        setErrorMessage("ERROR: Email can't be empty");
      } else if (
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(
          event.target.value
        )
      ) {
        setErrorMessage("");
      } else {
        setErrorMessage("ERROR: Invalid email. Please try again");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Contact me</h1>
      <div
        className="row"
        style={{
          padding: "10px",
        }}
      >
        <div className="col-md-8">
          <form>
            <div class="form-group row" className="form-row">
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <label htmlFor="inquirerName" class="col-sm-2 col-form-label">
                Your name
              </label>
              <input
                type="text"
                class="form-control"
                name="inquirerName"
                id="inquirerName"
                onBlur={validateForm}
                defaultValue={formState.inquirerName}
              />
            </div>
            <div class="form-group row" className="form-row">
              <label htmlFor="inquirerEmail" class="col-sm-2 col-form-label">
                Your email
              </label>
              <input
                type="email"
                class="form-control"
                name="inquirerEmail"
                id="inquirerEmail"
                onBlur={validateEmail}
                defaultValue={formState.inquirerEmail}
              />
            </div>
            <div class="form-group row" className="form-row">
              <label htmlFor="inquirerMessage" class="col-sm-2 col-form-label">
                Your message
              </label>
              <textarea
                class="form-control"
                name="inquirerMessage"
                id="inquirerMessage"
                rows="3"
                defaultValue={formState.inquirerMessage}
                onBlur={validateForm}
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style={{ margin: "10px", padding: "10px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
