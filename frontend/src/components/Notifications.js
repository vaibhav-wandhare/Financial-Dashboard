import React from "react";
import { useSelector } from "react-redux";

const Notifications = () => {
  const notifications = useSelector((state) => state.finance.notifications);

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
