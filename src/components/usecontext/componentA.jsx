import ComponentB from "./componentB";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Khiêm");

  return (
    <div className="box component">
      <h1>component A</h1>
      <p>Hello {user}</p>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
