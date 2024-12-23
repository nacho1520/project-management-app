import Button from "./Button";

const Sidebar = () => {
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <div className="flex flex-col items-start gap-8">
                <h2 className="text-xl font-semibold">YOUR PROJECTS</h2>
                <Button>+ Add Project</Button>
            </div>
        </aside>
    );
};

export default Sidebar;