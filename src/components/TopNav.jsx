import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";
export default function TopNav() {
  const profileContextValue = useContext(ProfileContext);
  return (
    <div
      style={{
        background: "grey",
        padding: "5px 0px",
        display: "flex",
        justifyContent: "right"
      }}
    >
      <h2>{profileContextValue.username}</h2>
    </div>
  );
}
