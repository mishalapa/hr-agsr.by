import { Accordion, AccordionSummary } from '@mui/material'
import styled from 'styled-components'
import plus from '../assets/plus.png'
import '../App.css'
import { useState } from 'react'

const QuestionCard = styled.div`
	display: flex;
	gap: 10px;
	margin: 0 0 20px 0;
`
const Question = styled.p`
	width: 435px;
	height: 25px;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	color: #4d4d4f;
`
const Answers = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #676a71;
	margin-bottom: 10px;
`

const Plus = styled.img`
	width: 22px;
	height: 22px;
`

const TextAnswers = styled.div`
	margin: 0 0 0 48px;
`

const Answer = (one) => {
	const [a, setA] = useState()
	function openAnswer() {
		setA(!a)
	}
	return (
		<Accordion sx={{ boxShadow: 'none' }} onClick={openAnswer}>
			<AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
				<QuestionCard>
					<Plus src={plus} alt='plus' className={` ${a ? 'rotate' : ''}`} />
					<Question>{one.one.question}</Question>
				</QuestionCard>
			</AccordionSummary>
			<TextAnswers>
				<Answers>1. Данные для авторизации в личном кабинете</Answers>
				<Answers>2. Квалифицированный сертификат ключа проверки электронной подписи.</Answers>
				<Answers>3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.</Answers>
				<Answers>
					4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с
					использованием усиленной квалифицированной (отсоединяемой) электронной подписи.
				</Answers>
			</TextAnswers>
		</Accordion>
	)
}

export default Answer
