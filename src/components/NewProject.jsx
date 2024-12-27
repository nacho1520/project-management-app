import { useRef, useContext } from "react";

import { ProjectsContext } from "../store/projects-context";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = () => {
    const { cancelCreation, createProject } = useContext(ProjectsContext);
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const modal = useRef();

    const onSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = description.current.value;

        /// Validations
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '' ) {
            modal.current.open();
            return;
        }

        createProject({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
        });
    };

    return(
        <>
            <Modal  ref={ modal } buttonLabel='Okay' >
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value for every input field.
                </p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            onClick={ cancelCreation } 
                            className="text-stone-800 hover:text-stone-950"
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={ onSave }
                            className="bg-slate-800 text-slate-50 px-6 py-2 rounded-md hover:bg-slate-950"
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input label="Title" type="text" ref={ title }/>
                    <Input label="Description" textArea ref={ description } />
                    <Input label="Due Date" type="date" ref={ date }/>
                </div>
            </div>
        </>
    );
};

export default NewProject;