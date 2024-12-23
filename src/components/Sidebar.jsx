import Button from "./Button";

const Sidebar = ({ handleCreate, projects }) => {
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <Button onClick={ handleCreate }>+ Add Project</Button>
            <ul className="mt-8">
                { projects.map(project => (
                    <li key={ project.id }>{ project.title }</li>
                )) }
            </ul>
        </aside>
    );
};

export default Sidebar;