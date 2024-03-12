import React, { useContext } from "react";
import PlayerContext from "../context/PlayerContext";

const PlayerList = () => {
  const { userData } = useContext(PlayerContext);
  // let sortedUserData = [];
  // if(userData.length){
  // }
  // const sortedUserData = userData.length?(userData.sort((a, b) => a.point - b.point)):("") ;

  const userList = userData.length ? (
    userData.map((user) => (
      <li key={user.name}>
        {user.name} - {user.points} points
      </li>
    ))
  ) : (
    <li>No users available</li>
  );

  // const sortedUserList = sortedUserData.length ? (
  //   sortedUserData.map((user) => (
  //     <li key={user.name}>
  //       {user.name} - {user.points} points
  //     </li>
  //   ))
  // ) : (
  //   <li>No users available</li>
  // );

  return (
    <div className="flex justify-center">
      <ul>{userList}</ul>
      {/* <ul>{sortedUserList}</ul> */}
    </div>
  );
};

export default PlayerList;