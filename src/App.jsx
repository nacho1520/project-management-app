import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeMessage from "./components/HomeMessage";
import NewProject from "./components/NewProject";

const  App = () => {
  const [ overallState, setOverallState ] = useState({
    projects: [],
    selectedProject: undefined,
  });

  const handleCreate = () => {
    setOverallState(prevState => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  let content; 

  if(overallState.selectedProject === undefined) {
    content = <HomeMessage handleCreate={ handleCreate }/>;
  } else if(overallState.selectedProject === null) {
    content = <NewProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleCreate={ handleCreate } />
      { content }
    </main>
  )
};

export default App;
