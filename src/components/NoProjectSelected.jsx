import noProjectImage from '../assets/no-projects.png'
import Button from './Button'

export function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage}
                alt="Empty task list"
                className='w-32 h-32 mx-auto object-contain mb-6' /> {/* Increased image size */}
            <h2 className="text-3xl font-bold text-stone-500 my-4">No Project Selected</h2> {/* Increased font size */}
            <p className='text-lg text-stone-400 mb-4'>Select a project or get started with a new one</p> {/* Increased font size */}
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create new Project</Button>
            </p>
        </div>
    )
}
