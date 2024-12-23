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

  const handleCancelCreate = () => {
    setOverallState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  };

  const handleSaveProject = (project) => {
    setOverallState(prevState => {
      const newProject = {
        ...project,
        id: Math.random(),
      };

      return {
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let content; 

  if(overallState.selectedProject === undefined) {
    content = <HomeMessage handleCreate={ handleCreate }/>;
  } else if(overallState.selectedProject === null) {
    content = <NewProject handleCancel={ handleCancelCreate } handleSave={ handleSaveProject }/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleCreate={ handleCreate } projects={ overallState.projects } />
      { content }
    </main>
  )
};

export default App;
