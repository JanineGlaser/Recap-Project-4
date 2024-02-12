import "./List.css";

export default function List({ activities, onDeleteActivity }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          ...{activity.name}
          <button type="button" onClick={() => onDeleteActivity(activity.id)}>
            ✗
          </button>
        </li>
      ))}
    </ul>
  );
}
