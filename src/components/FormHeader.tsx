
function FormHeader() {
	return (
		<>
			<h2 className='flex my-6 justify-center items-center'>
				<div className='p-0.5 bg-gray-300 rounded justify-center items-center gap-2.5 flex mr-4'>
					<div className='text-black text-[14px] font-semibold leading-none tracking-wide'>&lt;/&gt;</div>
				</div>
				<div className='text-black text-[14px] font-bold leading-none whitespace-nowrap tracking-wide'>Coders-Factory</div>
			</h2>
			<h3 className='text-center font-bold text-2xl'>For Developers</h3>
			<p className='!my-4 w-full text-center'>Practice coding, prepare for interviews, and get hired.</p>
		</>
	);
}

export default FormHeader;
