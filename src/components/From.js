import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.prevetDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const form = event.target;

    const forNiceWeather = data.forNiceWeather === "on" ? true : false;

    const newActivities = { name: data.name, forNiceWeather: forNiceWeather };
    onAddActivity(newActivities);
    form.reset();
  }

  return (
    <form className="form">
      <header>
        <h2> 🎀 Add a new Activity 🎀 </h2>
      </header>
      <main>
        <div>
          <label className="activities" htmlFor="activity">
            Name of the activity:{" "}
          </label>
          <br></br>
          <br></br>
          <input type="text" name="name" id="activity" />
        </div>
        <br></br>
        <br></br>
        <div>
          <label className="check-box" htmlFor="weather-check">
            Nice weather activity:
          </label>
          <br></br>
          <br></br>
          <input type="checkbox" name="forNiceWeather" id="weather-check" />
        </div>
        <button type="submit">check</button>
      </main>
    </form>
  );
}
