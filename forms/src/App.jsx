// import Form from "./components/Form";

// import Form3 from "./components/Form3";

// import Form2 from "./components/Form2";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState({ name: "Gandalf", age: 1000 });
  return (
    <>
      <div>
        <UserCard user={user} setUser={setUser}></UserCard>
      </div>
    </>
  );
}

export default App;
