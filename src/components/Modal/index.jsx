import React from "react";
import { useLocation } from "react-router-dom";
import Active from "../../assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CompletedModal = ({ Email }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const email = state && state.email;

  const handleCLick = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="test">
        <div>
          <img src={Active} alt="" />
        </div>
        <div className="rs-c">
          <h1>Thanks for subscribing</h1>
          <p>
            A confirmatiom email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.{" "}
          </p>
        </div>
        <input
          className="buttons"
          type="Submit"
          value="Dismiss Message"
          onClick={handleCLick}
        />
      </div>
    </main>
  );
};

export default CompletedModal;
