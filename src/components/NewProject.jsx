import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ handleCancel, handleSave }) => {
    const title = useRef();
    const description = useRef();
    const date = useRef();

    const onSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = description.current.value;

        /// Validations...

        handleSave({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
        });
    };

    return(
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button
                        onClick={ handleCancel } 
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
    );
};

export default NewProject;