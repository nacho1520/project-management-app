import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeMessage from "./components/HomeMessage";

const  App = () => {
  const [ projects, setProjects ] = useState([]);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <HomeMessage />
    </main>
  )
};

export default App;
