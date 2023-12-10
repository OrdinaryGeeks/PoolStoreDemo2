import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header.tsx/Header";

function App() {
  console.log("app");
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
