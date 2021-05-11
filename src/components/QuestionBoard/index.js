import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import answerQuestion from '../../actions/answerQuestion';

export default function QuestionBoard({ questionId, currQuestion }) {
  const dispatch = useDispatch();

  const [selectedCheckbox, setSelectedCheckbox] = useState(-1);

  useEffect(() => {
    setSelectedCheckbox(currQuestion.answer);
  }, [questionId, currQuestion]);

  return (
    <>
      <div className="question-id">
        {questionId + 1}
      </div>
      <div className="question">
        {currQuestion.question}
      </div>
      <div className="answer-grid">
        {
          currQuestion.options.map((option, idx) => (
            <div key={idx} className={idx === selectedCheckbox ? "active option" : "option"}
              onClick={
                e => {
                  let changedTo;
                  if (!e.target.checked && idx === selectedCheckbox) changedTo = -1;
                  else changedTo = idx;
                  setSelectedCheckbox(changedTo);
                  dispatch(answerQuestion({
                    questionId,
                    answer: changedTo,
                  }));
                }}
            >
              {option}
            </div>
          ))
        }
      </div>
    </>
  )
}