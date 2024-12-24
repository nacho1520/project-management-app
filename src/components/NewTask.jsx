import { useState, useRef } from "react";
import Modal from "./Modal";

const NewTask = ({ onAddTask }) => {
    const [ enteredTask, setEnteredTask ] = useState('');
    const modal = useRef();

    const handleChange = (event) => {
        setEnteredTask(event.target.value);
    };

    const handleClick = () => {
        if(enteredTask.trim() === '') {
            modal.current.open();
            return;
        }
        onAddTask(enteredTask);
        setEnteredTask('');
    };

    return(
        <>
            <Modal ref={ modal } buttonLabel='Okay'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Task Empty</h2>
                <p className="text-stone-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value for the task field.
                </p>
            </Modal>    
            <div className="flex items-center gap-4">
                <input 
                    type="text" 
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                    onChange={ handleChange }
                    value={ enteredTask }
                />
                <button
                    className="text-stone-700 hover:text-stone-950"
                    onClick={ handleClick }
                >
                    Add Task</button>
            </div>
        </>
        
    );
};

export default NewTask;