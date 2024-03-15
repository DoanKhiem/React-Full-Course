import React, { useContext } from "react";
import { UserContext } from "./componentA";
import ComponentD from "./componentD";
function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>component C</h1>
      <h2>Hello again {user}</h2>
      <ComponentD />
    </div>
  );
}
export default ComponentC;
