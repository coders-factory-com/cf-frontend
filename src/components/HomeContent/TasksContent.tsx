import React, { useRef, ChangeEvent, useState } from 'react';
import Editor, { OnValidate } from '@monaco-editor/react';
import { files } from '@/utils';
import Button from '@/common/Button';

const TaskContent: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const { name, language, task } = files;

	const handleEditorValidation: OnValidate = markers => {
		markers.forEach(marker => console.log('onValidate:', marker.message));
	};

	const handleEditorChange = (value?: string) => {
		if (value) {
			setValue(value);
		}
	};
	const handleSaveClick = () => {
		alert(value);
		// fetch('', {
		//  method: 'POST',
		//  body: JSON.stringify({ code: value }),
		//  headers: { 'Content-Type': 'application/json' },
		// });
	};

	return (
		<div className='bg-neutral-50 h-full'>
			<div className='py-2 ml-6'>{task}</div>
			<Editor theme='vc-dark' height='600px' className='bg-neutral-50' path={name} onChange={handleEditorChange} defaultLanguage={language} defaultValue={task} onValidate={handleEditorValidation} />
			<Button
				className='ml-12'
				text='Submit'
				onClick={() => {
					handleSaveClick();
				}}
			/>
		</div>
	);
};

export default TaskContent;
