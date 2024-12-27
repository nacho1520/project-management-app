import ProjectsContextProvider from "./store/projects-context";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <ProjectsContextProvider>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <MainContent />
      </main>
    </ProjectsContextProvider>
  );
};

export default App;
