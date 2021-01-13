import { useState } from "react";
import { Auth } from "./components/Auth";
import { Navbar } from "./components/Navbar";
import { UserSessionContext } from "./context";

const GUEST_USER = { __guest: true, displayName: "Guest" };

export default function App() {
  const [user, setUser] = useState(GUEST_USER);

  const login = (name) => {
    setUser({ __guest: false, displayName: name });
  };

  const logout = () => {
    setUser(GUEST_USER);
  };

  return (
    <UserSessionContext.Provider value={{ user, login, logout }}>
      <>
        <Navbar />
        <div className="container">
          <Auth />
        </div>
      </>
    </UserSessionContext.Provider>
  );
}
