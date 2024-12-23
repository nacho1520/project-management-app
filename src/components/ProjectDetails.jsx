const ProjectDetails = ({ project }) => {
    return (
        <div className="w-[35rem] mt-16 ">
            <div className="flex justify-between">
                <h2>{ project.title }</h2>
                <li>
                    <button
                        onClick={ () => {} } 
                        className="text-stone-800 hover:text-stone-950"
                    >
                        Delete
                    </button>
                </li>
            </div>
        </div>
    );
};

export default ProjectDetails;