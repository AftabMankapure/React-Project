import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>

  console.log(user.username)

  return <div>Welcome {user.username}</div>;
}

export default Profile;
