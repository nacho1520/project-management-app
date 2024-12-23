const Input = ({ textArea, label }) => {

    const style = 'w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return(
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
                { label }
            </label>
            { textArea ? 
                <textArea className={ style } /> : 
                <input className={ style } /> }
        </p>
    );
};

export default Input;