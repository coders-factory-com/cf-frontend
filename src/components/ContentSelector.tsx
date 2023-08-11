import OtherContainer from './HomeContent/containers/OtherContainer';
import QuizesContainer from './HomeContent/containers/QuizesContainer';
import TaskContainer from './HomeContent/containers/TasksContainer';
import TheoryContainer from './HomeContent/containers/TheoryContainer';

const ContentSelector = ({ selectedCard }: { selectedCard: string }) => {
	return (
		<div className={`${selectedCard === 'Tasks' ? 'w-full' : 'max-w-[1280px]'}`}>
			{selectedCard === 'Theory' && <TheoryContainer />}
			{selectedCard === 'Quizes' && <QuizesContainer />}
			{selectedCard === 'Other' && <OtherContainer />}
			{selectedCard === 'Tasks' && <TaskContainer />}
		</div>
	);
};

export default ContentSelector;
