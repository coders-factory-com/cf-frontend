'use client';
import { notes as initialNotes } from '@/utils/index';
import Image from 'next/image';
import { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState(initialNotes);

  const handleAddNote = () => {
    const newNote = {
      id: Math.random(),
      content: 'New note',
    };

    setNotes((prevState) => [...prevState, newNote]);
  };

  const handleDeleteNote = (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <div className='scrollable absolute mt-2 max-h-[500px] overflow-y-auto overflow-x-hidden'>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskImage: "url('/alpha-mask.png')",
              WebkitMaskPosition: 'center',
            }}
            className='relative  my-2 h-auto bg-orange-200 '
          >
            <div className='flex min-h-[170px] min-w-[170px] items-center justify-center'>
              <div className='mx-auto w-[70%] whitespace-pre-wrap text-center font-normal leading-none tracking-wide'>
                {note.content}
              </div>
            </div>
            <div
              onClick={() => {
                handleDeleteNote(note.id);
              }}
            >
              <Image
                src='/Trash-can.svg'
                width={20}
                height={20}
                alt=''
                className='absolute bottom-6 right-6 cursor-pointer'
              />
            </div>
          </div>
        ))
      ) : (
        <div className='mx-4 my-2'>You dont have any notes right now</div>
      )}
      <div
        onClick={handleAddNote}
        className=' max-w-[150px] cursor-pointer border border-blue-600  bg-white py-4 text-center text-[14px] font-normal leading-none tracking-wide text-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white '
      >
        Add Note +
      </div>
    </div>
  );
};

export default Notes;
