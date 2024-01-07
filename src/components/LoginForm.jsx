import React, { useState } from "react";

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
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center vh-100 ">
      <div className="loginform rounded  p-3  bg-light bg-gradient" style={{width: "600px"}}>
        <h2 className="mb-3">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2 row">
            <label className="form-label col-sm-3 col-md-3 col-lg-3 label1" >Drowpdown 1</label>
            <select className=" form-control col auto " style={{cursor:"pointer"}} value={dropdown1} onChange={handleChange1}>
              <option value={0}>none</option>
              <option value={1}>1st item</option>
              <option value={2}>2nd item</option>
              <option value={3}>3rd item</option>
              <option value={4}>4th item</option>
            </select>
          </div>
          <div className="form-group mb-2 row">
            <label className="form-label col-sm-3 col-md-3 col-lg-3">Drowpdown 2</label>
            <select className="form-control col auto  " style={{cursor:"pointer"}} value={dropdown2} onChange={handleChange2}>
              <option value={0}>none</option>
              <option value={1}>Name 1</option>
              <option value={2}>Name 2</option>
              <option value={3}>Name 3</option>
              <option value={4}>Name 4</option>
            </select>
          </div>
          <div className="form-group mb-2 row">
            <label className="form-label col-sm-3 col-md-43 col-lg-3">Password</label>
            <input type="password" className="form-control col auto" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3"  disabled={!validateForm()}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
