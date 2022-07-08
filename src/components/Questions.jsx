import styled from 'styled-components'
import Answer from './Answer'

const AnswerTitle = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 49px;
	color: #231f20;
	margin-top: 80px;
`

const AnswerWrapper = styled.div`
	display: flex;
	margin: 0 115px;
	gap: 233px;
`

const QuestionWrapper = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 80px;
	flex-direction: column;
	width: 572px;
`

const array = [
	{
		id: 1,
		value: true,
		question: 'Для подачи заявления необходимо подготовить',
	},
	{
		id: 2,
		value: true,
		question: 'Связь с оператором реестра',
	},
	{
		id: 3,
		value: true,
		question: 'Как подать заявление на включение программного обеспечения в реестр',
	},
	{
		id: 4,
		value: true,
		question: 'Где можно подать заявление',
	},
	{
		id: 5,
		value: true,
		question: 'Как узнать мне причину отказа',
	},
	{
		id: 6,
		value: false,
		question: 'Что делать, если Вам отказали',
	},
	{
		id: 7,
		value: false,
		question: 'Изменение реестревой записи',
	},
]

const Questions = () => {
	return (
		<AnswerWrapper>
			<AnswerTitle>Вопрос-ответ</AnswerTitle>
			<QuestionWrapper>
				{array.length > 0 &&
					array.map((one) => {
						return <Answer one={one} key={one.id} />
					})}
			</QuestionWrapper>
		</AnswerWrapper>
	)
}

export default Questions
