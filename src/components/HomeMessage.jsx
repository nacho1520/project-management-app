import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

const HomeMessage = ({ handleCreate }) => {
    return(
        <div className="mt-24 text-center w-2/3">
            <img 
                alt='Empty task list'
                src={ noProjectImg }
                className='w-16 h-16 object-contain mx-auto'
            />
            <h2 className='text-stone-500 text-xl font-bold my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={ handleCreate }>Create new project</Button>
            </p>
        </div>
    );
};

export default HomeMessage;