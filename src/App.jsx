import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeMessage from "./components/HomeMessage";
import NewProject from "./components/NewProject";

const  App = () => {
  const [ create, setCreate ] = useState(false);

  const handleCreate = () => {
    setCreate(true);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onClickButton={ handleCreate } />
      {
        !create ? <HomeMessage onClickButton={ handleCreate }/> : <NewProject /> 
      }
    </main>
  )
};

export default App;
