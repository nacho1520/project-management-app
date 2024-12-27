import { useContext } from "react";

import { ProjectsContext } from "../store/projects-context";
import HomeMessage from "./HomeMessage";
import NewProject from "./NewProject";
import ProjectDetails from "./ProjectDetails";

const MainContent = () => {
  const { projects, selectedProject, tasks } = useContext(ProjectsContext);
  let content;

  if (selectedProject === undefined) {
    content = <HomeMessage />;
  } else if (selectedProject === null) {
    content = (
      <NewProject />
    );
  } else {
    const project = projects.find(
      (project) => project.id === selectedProject
    );
    const selectedTasks = tasks.filter(
      (task) => task.projectId === selectedProject
    );
    content = (
      <ProjectDetails
        project={project}
        tasks={selectedTasks}
      />
    );
  }

  return content;
};

export default MainContent;
