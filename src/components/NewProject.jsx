import Input from "./Input";
import { useRef } from 'react';
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();


    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(
            enteredTitle.trim()===''||
            enteredDescription.trim()===''||
            enteredDueDate.trim()===''

    )
    {
        modal.current.open();
        return;
    }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <> <Modal ref={modal} buttonCaption="Okay" className="text-2xl"> 
            <h2 className="text-3xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-3xl font-bold text-stone-500 my-4">Oops...looks like you forget to enter a value</p>
            </Modal>
        
        <div className="w-[35rem] mt-16">
            <div className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950 text-lg" onClick={onCancel}>Cancel</button>
                <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 text-lg" onClick={handleSave}>Save</button>
            </div>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    );
}