import { useState, createContext } from "react";

export const ProjectsContext = createContext({
  projects: [],
  tasks: [],
  selectedProject: undefined,
  startCreation: () => {},
  cancelCreation: () => {},
  createProject: () => {},
  deleteProject: () => {},
  selectProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

const ProjectsContextProvider = ({ children }) => {
  const [overallState, setOverallState] = useState({
    projects: [],
    selectedProject: undefined,
    tasks: [],
  });

  const handleAddTask = (text) => {
    setOverallState((prevState) => {
      const newId = Math.random();
      const newTask = {
        text: text,
        id: newId,
        projectId: prevState.selectedProject,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setOverallState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleCreate = () => {
    setOverallState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const handleCancelCreate = () => {
    setOverallState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  };

  const handleSaveProject = (project) => {
    setOverallState((prevState) => {
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
    setOverallState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setOverallState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  };

  const ctxValue = {
    projects: overallState.projects,
    tasks: overallState.tasks,
    selectedProject: overallState.selectedProject,
    startCreation: handleCreate,
    cancelCreation: handleCancelCreate,
    createProject: handleSaveProject,
    deleteProject: handleDeleteProject,
    selectProject: handleSelectProject,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
