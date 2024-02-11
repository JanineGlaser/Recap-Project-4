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
  const isGoodWeather = true;
  const isBadWeather = false;

  function filteredGoodWeatherActivities(isGoodWeather) {
    return activities.filter((activity) => {
      if (activity.forNiceWeather === isGoodWeather) {
        return true;
      } else {
        return false;
      }
    });
  }

  const filteredBadWeatherActivities = activities.filter(
    (activity) => activity.forNiceWeather === isBadWeather
  );

  function handleAddActivity(newActivities) {
    setActivities([{ ...newActivities, id: uid() }, ...activities]);
  }

  return (
    <div className="App">
      <header className="header"></header>
      <Form onAddActivity={handleAddActivity} />
      {/* <List activities={activities} /> */}

      <h4> Bad weather activities </h4>
      <List
        activities={filteredBadWeatherActivities}
        isGoodWeather={isBadWeather}
      />
      <h4> Nice weather activities </h4>
      <List
        activities={filteredGoodWeatherActivities(isGoodWeather)}
        is
        isGoodWeather={isGoodWeather}
      />
    </div>
  );
}
