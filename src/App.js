import { useEffect, useState } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
// import Person from "./Components/Person/Person";

function App() {
  const [persons, setPerson] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rakibshakib/fake-data-json/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);
  return (
    <div>
      <h2>This is The User Data</h2>
      <h2>Total Salary: </h2>
      <div className="persons">
        {persons.map((person) => (
          <Person data={person} key={person.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
