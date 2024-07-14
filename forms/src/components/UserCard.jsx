import UserProfile from "./UserProfile";

function UserCard({ user, setUser }) {
  return (
    <div>
      <UserProfile user={user} setUser={setUser}></UserProfile>
    </div>
  );
}
export default UserCard;
