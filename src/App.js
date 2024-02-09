import "./App.css";
import Form from "./components/From";
//    import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(newActivities) {
    setActivities([{ ...newActivities, id: uid() }, ...activities]);
  }

  return (
    <div className="App">
      <header className="header"></header>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}
