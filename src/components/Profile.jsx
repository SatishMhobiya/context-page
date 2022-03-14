import { useContext, useState } from "react";
import ProfileContext from "../context/ProfileContext";

export default function Profile() {
  const [updatedUsername, setUpdatedUsername] = useState("");
  const profileContextValue = useContext(ProfileContext);

  return (
    <div
      style={{
        background: "lightgrey",
        height: "92vh",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }}
    >
      <input
        type="text"
        placeholder="username"
        value={updatedUsername}
        onChange={(e) => {
          setUpdatedUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          profileContextValue.setUsername(updatedUsername);
        }}
      >
        update username
      </button>
    </div>
  );
}
