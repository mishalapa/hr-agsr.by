import styled from 'styled-components'
import logo from '../assets/logo.svg'
import calendar from '../assets/calendar.png'
import bell from '../assets/bell.png'
import user from '../assets/user.png'
import login from '../assets/login.png'

import { FormControl, InputBase, InputLabel, MenuItem, Select } from '@mui/material'

import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../redux/loginSlice'
const HeaderWrapper = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const ImageWrapper = styled.img`
	height: 40px;
	width: 170px;
	margin: 0 30px 0 115px;
`

const InputWrapper = styled(InputBase)`
	height: 48px;
	width: 270px;
	padding: 0;
	margin-right: 310px;
	background: #f9f9fb;
`
const Line = styled.div`
	height: 48px;
	width: 2px;
	background: #f4f3f5;
`

const HeaderMain = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`

const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`
const NameTitle = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #4d4d4f;
`

const Header = () => {
	const [age, setAge] = React.useState('')
	const name = useSelector((state: any) => state.login.name)
	const surname = useSelector((state: any) => state.login.surname)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleChange = (event: { target: { value: string } }) => {
		setAge(event.target.value)
	}
	function loginProfile() {
		navigate('/login')
	}
	function backToMain() {
		navigate('/')
	}
	const isLogin = useSelector((state: any) => state.login.isLogin)
	function Logout() {
		navigate('/')
		dispatch(logoutAction())
	}
	function ToPersonal() {
		navigate('/personal')
	}
	return (
		<HeaderWrapper>
			<ImageWrapper src={logo} alt='logo' onClick={backToMain} />
			<InputWrapper placeholder='Поиск' />
			<HeaderMain>
				<img src={calendar} alt='logo' />
				<img src={bell} alt='logo' />
				<Line />
				{isLogin ? (
					<Profile>
						<img src={user} alt='logo' />
						<NameTitle>
							{name} {surname}
						</NameTitle>
						<FormControl sx={{ m: 1 }} variant='standard'>
							<InputLabel id='demo-customized-select-label'></InputLabel>
							<Select
								labelId='demo-customized-select-label'
								id='demo-customized-select'
								value={age}
								onChange={handleChange}
								input={<InputBase />}
							>
								<MenuItem onClick={ToPersonal} value={1}>
									Мои данные
								</MenuItem>
								<MenuItem value={2}>Уведомления</MenuItem>
								<MenuItem value={3}>Реестры</MenuItem>
								<MenuItem value={4}>Метаданные</MenuItem>
								<MenuItem value={5}>Безопасность</MenuItem>
								<MenuItem value={6}>Мои загрузки</MenuItem>
								<MenuItem onClick={Logout} value={7}>
									Выход
								</MenuItem>
							</Select>
						</FormControl>
					</Profile>
				) : (
					<Profile>
						<img src={login} alt='login' />
						<NameTitle onClick={loginProfile}>Вход в аккаунт</NameTitle>
						<FormControl sx={{ m: 1 }} variant='standard'>
							<InputLabel id='demo-customized-select-label'></InputLabel>
							<Select
								labelId='demo-customized-select-label'
								id='demo-customized-select'
								value={age}
								onChange={handleChange}
								input={<InputBase />}
							>
								<MenuItem value={1}>Мои данные</MenuItem>
								<MenuItem value={2}>Уведомления</MenuItem>
								<MenuItem value={3}>Реестры</MenuItem>
								<MenuItem value={4}>Метаданные</MenuItem>
								<MenuItem value={5}>Безопасность</MenuItem>
								<MenuItem value={6}>Мои загрузки</MenuItem>
								<MenuItem value={7}>Выход</MenuItem>
							</Select>
						</FormControl>
					</Profile>
				)}
			</HeaderMain>
		</HeaderWrapper>
	)
}

export default Header
