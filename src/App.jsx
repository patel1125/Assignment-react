import React from "react";
import HelloReact from "./HelloReact";
import JSXExample from "./JSXExample";
import Greeting from "./Greeting";
import WelcomeMessage from "./WelcomeMessage";
import UserCard from "./UserCard";
import Counter from "./Counter";
  
     function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
     
     {/* Task 1: Basic component */}
      <HelloReact />

      {/* Task 2: JSX Example */}
      <JSXExample />

      {/* Task 3: Functional component */}
      <Greeting name="Megha" />
      <Greeting name="John" />

      {/* Task 4: Class component */}
      <WelcomeMessage />

      {/* Task 5: UserCard components */}
      <UserCard name="Megha Patel" age={22} location="India" />
      <UserCard name="John Doe" age={25} location="USA" />

      {/* Task 6: Counter */}
      <Counter />
    </div>
  );
}

export default App;
