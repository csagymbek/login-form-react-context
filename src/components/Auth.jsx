import { useState } from "react";
import { useUserSession } from "../context";

const LoginForm = () => {
  const { login } = useUserSession();
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login(name);
    setName("");
  };

  return (
    <form action="" className="mx-auto w-23" onSubmit={onSubmit}>
      <h2>Log In</h2>
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="">Name: </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter here"
            />
          </div>
          <div className="text-right">
            <button className="btn btn-primary">Log In</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export const Auth = () => {
  const { user, logout } = useUserSession();

  if (user.__guest) {
    return <LoginForm />;
  }

  const onClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div>
      <p>You are logged in {user.displayName}</p>
      <button className="btn btn-outline-danger" onClick={onClick}>
        Log Out
      </button>
    </div>
  );
};
