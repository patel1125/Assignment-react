import "./UserCard.css";

function UserCard({ name, age, location }) {
  return (
    <div className="user-card">
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard;
