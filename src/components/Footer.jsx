import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterWrapper = styled.div`
	display: flex;
	border-bottom: 3px solid #ededf4;
	padding-bottom: 40px;
`

const FooterBlock = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 54px;
`
const FooterBlockTwo = styled(FooterBlock)`
	gap: 10px;
	margin-right: 80px;
`

const BlackText = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	color: #676a71;
`
const BlackTextTwo = styled(BlackText)`
	color: #4d4d4f;
`
const BlackTextWidth = styled(BlackText)`
	width: 310px;
`

const BlackTitle = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	color: #231f20;
	margin-bottom: 10px;
`

const GrayText = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	color: #676a71;
	width: 241px;
`
const GrayTextTwo = styled.p`
	border-bottom: 3px solid #ededf4;
	padding-bottom: 10px;
	width: 270px;
`

const LightGray = styled(GrayText)`
	color: #a8aaae;
`
const LogoImage = styled.img`
	height: 40px;
	width: 170px;
	margin-bottom: 20px;
`
const FooterPage = styled.div`
	display: flex;
	flex-direction: column;
	margin: 80px 115px -100px 115px;
`

const Developer = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	color: #4d4d4f;
	margin: 40px 0 10px 0;
`

const LinkSupport = styled(Link)`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	text-decoration-line: underline;
	color: #009cb4;
`

const Copyright = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	color: #c6c6c6;
	margin: 20px 0 80px 0;
	text-align: center;
`

const Footer = () => {
	return (
		<FooterPage>
			<FooterWrapper>
				<FooterBlock>
					<LogoImage src={logo} alt='logo' />
					<GrayText>Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г</GrayText>
					<Developer>Разработчик</Developer>
					<BlackTextWidth>ОАО «Агентство сервисизации и реинжиниринга»</BlackTextWidth>
					<LightGray>Минск, улица Клары Цеткин, 24</LightGray>
				</FooterBlock>
				<FooterBlockTwo>
					<BlackTitle>Информация</BlackTitle>
					<BlackTextTwo>Реестры</BlackTextTwo>
					<BlackTextTwo>Новости</BlackTextTwo>
					<BlackTextTwo>Документы</BlackTextTwo>
					<BlackTextTwo>Вопросы</BlackTextTwo>
				</FooterBlockTwo>
				<FooterBlockTwo>
					<BlackTitle>Техническая поддержка</BlackTitle>
					<GrayTextTwo>
						Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.
					</GrayTextTwo>
					<BlackTextTwo>+375 25 111 22 33 </BlackTextTwo>
					<BlackTextTwo>+375 29 222 44 55</BlackTextTwo>
					<BlackTextTwo>ReestrPOsupport@mail.ru</BlackTextTwo>
				</FooterBlockTwo>
				<FooterBlockTwo>
					<BlackTitle>Контакты</BlackTitle>
					<BlackTextTwo>+375 33 112 22 45</BlackTextTwo>
					<BlackTextTwo>+375 29 222 44 88</BlackTextTwo>
					<BlackTextTwo>ReesrtPO@mail.ru</BlackTextTwo>
					<BlackTextTwo>220004 г. Минск, ул. Карла Маркса, 38</BlackTextTwo>
					<LinkSupport to={'/login'}>Связаться с поддержкой</LinkSupport>
				</FooterBlockTwo>
			</FooterWrapper>
			<Copyright>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</Copyright>
		</FooterPage>
	)
}

export default Footer
