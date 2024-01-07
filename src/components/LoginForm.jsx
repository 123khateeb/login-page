import React, { useState } from "react";

import "./LoginForm.css";

const LoginForm = () => {;
  const [dropdown1, setDrowpdown1] = useState("");
  const [dropdown2, setDrowpdown2] = useState("");
  const [password, setPassword] = useState("");

  const handleChange1 = (e) => {
    setDrowpdown1(e.target.value);
  };
  const handleChange2 = (e) => {
    setDrowpdown2(e.target.value);
  };

  const validateForm = () => {
    return dropdown1.length > 0 && dropdown2.length > 0 && password.length > 8;
  };
  function handleSubmit(event) {
    event.preventDefault();
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="loginform rounded">
        <h2 className="mb-3">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label className="form-label">Drowpdown 1</label>
            <select className=" form-control" value={dropdown1} onChange={handleChange1}>
              <option>none</option>
              <option value={1}>1st item</option>
              <option value={2}>2nd item</option>
              <option value={3}>3rd item</option>
              <option value={4}>4th item</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label className="form-label ">Drowpdown 2</label>
            <select className="form-control " value={dropdown2} onChange={handleChange2}>
              <option>none</option>
              <option value={1}>Name 1</option>
              <option value={2}>Name 2</option>
              <option value={3}>Name 3</option>
              <option value={4}>Name 4</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2" disabled={!validateForm()}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
