const answerQuestion = ({ questionId, answer }) => {
  return {
    type: 'ANSWER_QUESTION',
    questionId,
    answer,
  }
}

export default answerQuestion;