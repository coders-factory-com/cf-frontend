import { notes as initialNotes } from '@/utils/index';
import Image from 'next/image';
import  { useState } from 'react';
import '@/app/globals.css';

function Notes() {
	const [notes, setNotes] = useState(initialNotes);

	const handleAddNote = () => {
		const newNote = {
			id: Math.random(),
			content: 'New note',
		};

		setNotes([...notes, newNote]);
	};

	const handleDeleteNote = (noteId: number) => {
		setNotes(notes.filter(note => note.id !== noteId));
	};

	return (
		<div className='mt-2 absolute max-h-[500px] overflow-y-auto overflow-x-hidden scrollable'>
			{notes.length > 0 ? (
				notes.map(note => (
					<div
						key={note.id}
						style={{
							WebkitMaskSize: 'contain',
							WebkitMaskRepeat: 'no-repeat',
							WebkitMaskImage: "url('/alpha-mask.png')",
							WebkitMaskPosition: 'center',
						}}
						className='relative  h-auto my-2 bg-orange-200 '>
						<div className='min-h-[170px] min-w-[170px] justify-center items-center flex'>
							<div className='whitespace-pre-wrap w-[70%] mx-auto text-center font-normal leading-none tracking-wide'>{note.content}</div>
						</div>
						<div
							onClick={() => {
								handleDeleteNote(note.id);
							}}>
							<Image src='./Trash-can.svg' width={20} height={20} alt='' className='absolute cursor-pointer bottom-6 right-6' />
						</div>
					</div>
				))
			) : (
				<div className='mx-4 my-2'>You dont have any notes right now</div>
			)}
			<div onClick={handleAddNote} className=' bg-white border max-w-[150px] border-blue-600  py-4 text-center cursor-pointer text-blue-600 text-[14px] font-normal hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out leading-none tracking-wide '>
				Add Note +
			</div>
		</div>
	);
}

export default Notes;
