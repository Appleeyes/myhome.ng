import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/FormComponent.css";
import eyeIcon from "../assets/images/eye.svg";

function FormComponent({
  fields,
  submitButtonText,
  forgotPasswordLink,
  forgotPasswordText,
  additionalTagText,
  additionalTagLinkText,
  additionalTagLink,
}) {
  const initialState = Object.fromEntries(
    fields.map((field) => [field.name, ""])
  );
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form className="form-container">
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          {field.type === "password" ? (
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.label}
                className="form-input"
              />
              <img
                src={eyeIcon}
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="password-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              className="form-input"
            />
          )}
        </div>
      ))}
      <div className="forgotPassword">
        <Link to={forgotPasswordLink}>{forgotPasswordText}</Link>
      </div>
      <button type="submit" className="submit-button">
        {submitButtonText}
      </button>
      <div className="additional-tag">
        {additionalTagText}{" "}
        <Link to={additionalTagLink}>{additionalTagLinkText}</Link>
      </div>
    </form>
  );
}
export default FormComponent;
