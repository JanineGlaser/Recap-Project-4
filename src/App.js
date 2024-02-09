import "./App.css";
import Form from "./components/From";
import { useState } from "react";
import { uid } from "uid";

export default function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivities) {
    setActivities([{ newActivities, id: uid() }, ...activities]);
  }

  return (
    <div className="App">
      <header className="header"></header>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
