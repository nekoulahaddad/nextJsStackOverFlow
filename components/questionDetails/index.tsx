import { IQuestionData } from '@/types/main'
import React, { useMemo } from 'react'
import { Container, DisplayedElement } from './styles'

const QuestionDetails = ({data}:{data:IQuestionData}) => {
    
  const question = useMemo(() => data?.items[0], [])

  return (
    <Container>
    <DisplayedElement>{question.owner.display_name}</DisplayedElement>
    <DisplayedElement>{question.title}</DisplayedElement>
    <DisplayedElement>{question.answer_count}</DisplayedElement>
    <div>{question?.tags?.map((tag) => <DisplayedElement key={tag}>{tag}</DisplayedElement>)}</div>
    </Container>
  )
}

export default QuestionDetails