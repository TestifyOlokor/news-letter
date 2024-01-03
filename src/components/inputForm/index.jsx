import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./style.css";

const InputForm = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    Email: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    setValue({
      ...value,
      [name]: target.value,
    });
  };

  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.Email) {
      toast.error("Email address is required");
      return false;
    }

    if (!emailRegex.test(value.Email)) {
      toast.error("Invalid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      navigate("/complete-modal", { state: { email: value.Email } });
      toast.success("Form submitted");
    } else {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Email Address</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="input"
              type="text"
              name="Email"
              value={value.Email}
              onChange={handleInputChange}
              placeholder="email@company.com"
            />
          </label>
          <input
            className="button"
            type="submit"
            value="Subscribe to monthly newsletter"
          />
        </form>
      </div>
    </div>
  );
};

export default InputForm;
