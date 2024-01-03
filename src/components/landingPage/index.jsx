import React from "react";
import CheckMark from "../../assets/images/icon-list.svg";
import InputForm from "../inputForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../../assets/images/illustration-sign-up-desktop.svg";
import "./style.css";

const LandingPage = () => {
  return (
    <main>
      <ToastContainer />
      <section>
        <div className="main-container">
          <h1>Stay Updated!</h1>
          <p>join 60,000+ product managers receiving monthly updates on: </p>
          <div className="sm-container">
            <img src={CheckMark} alt="" />
            <p>Product delivery and building what matters</p>
          </div>
          <div className="sm-container">
            <img src={CheckMark} alt="" />
            <p>Product delivery and building what matters</p>
          </div>
          <div className="cm-container">
            <img src={CheckMark} alt="" />
            <p>And much more!</p>
          </div>
          <div>
            <InputForm />
          </div>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
