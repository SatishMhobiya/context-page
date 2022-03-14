import Maincontent from "./components/Maincontent";
import Sidebar from "./components/Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Maincontent />
    </div>
  );
}
