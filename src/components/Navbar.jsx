import { useUserSession } from "../context";

const ProfileNav = () => {
  const { user, logout } = useUserSession();

  const onClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <span className="navbar-text">Welcome {user.displayName}</span>
      </li>
      {!user.__guest && (
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={onClick}>
            Log Out
          </a>
        </li>
      )}
    </ul>
  );
};

export const Navbar = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div className="container">
      <a href="/" className="navbar-brand">
        React Context
      </a>
      <ProfileNav />
    </div>
  </div>
);
