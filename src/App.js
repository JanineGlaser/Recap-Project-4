import "./App.css";
import Form from "./components/From";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/rainforest"
        );
        const data = await response.json();
        setWeather(data.isGoodWeather);
        setTemperature(data.temperature);
        setCondition(data.condition);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, []);

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

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <header className="header"></header>
      <>
        {weather ? (
          <>
            <h1>
              {condition} {temperature}°C
            </h1>
            <h3>oh look we have nice weather you could...</h3>
            <List activities={filteredGoodWeatherActivities} />
          </>
        ) : (
          <>
            <h1>
              {condition} {temperature}°C
            </h1>
            <h3>shitty weather, but you could...</h3>
            <List activities={filteredBadWeatherActivities} />
          </>
        )}
      </>

      <Form onAddActivity={handleAddActivity} />
      {/* <List activities={activities} /> */}

      <h4> Bad weather activities </h4>
      <List
        activities={filteredBadWeatherActivities}
        isGoodWeather={isBadWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <h4> Nice weather activities </h4>
      <List
        activities={filteredGoodWeatherActivities(isGoodWeather)}
        is
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}
