import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeMessage from "./components/HomeMessage";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";

const  App = () => {
  const [ overallState, setOverallState ] = useState({
    projects: [],
    selectedProject: undefined,
    tasks: [],
  });


  const handleAddTask = (text) => {
    setOverallState(prevState => {
      const newId = Math.random();
      const newTask = {
        text: text,
        id: newId,
        projectId: prevState.selectedProject,
      }

      return {
        ...prevState,
        tasks: [ newTask, ...prevState.tasks ],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setOverallState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id),
      };
    });
  };

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
        ...prevState,
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
    const selectedTasks = overallState.tasks.filter(task => task.projectId === overallState.selectedProject);
    content = <ProjectDetails 
      project={ selectedProject } 
      handleDelete={ handleDeleteProject }
      tasks={ selectedTasks }
      onAddTask={ handleAddTask } 
      onDeleteTask={ handleDeleteTask }
    />
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
