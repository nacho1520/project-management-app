import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeMessage from "./components/HomeMessage";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";

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
      const newId = Math.random();
      const newProject = {
        ...project,
        id: newId,
      };

      return {
        selectedProject: newId,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleSelectProject = (id) => {
    setOverallState(prevState => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setOverallState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProject),
      };
    });
  };

  let content; 

  if(overallState.selectedProject === undefined) {
    content = <HomeMessage handleCreate={ handleCreate }/>;
  } else if(overallState.selectedProject === null) {
    content = <NewProject handleCancel={ handleCancelCreate } handleSave={ handleSaveProject }/>;
  } else {
    const selectedProject = overallState.projects.find(project => project.id === overallState.selectedProject);
    content = <ProjectDetails project={ selectedProject } handleDelete={ handleDeleteProject } />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        handleCreate={ handleCreate } 
        projects={ overallState.projects } 
        handleSelect={ handleSelectProject }
        selectedProjectId={ overallState.selectedProject } 
      />
      { content }
    </main>
  )
};

export default App;
