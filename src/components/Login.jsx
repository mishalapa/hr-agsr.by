import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { Checkbox, FormControlLabel, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import arrowLeft from '../assets/arrow-left.png'
import valid from '../assets/valid.png'
import { useDispatch } from 'react-redux'
import { loginAction } from '../redux/loginSlice'
import { useSelector } from 'react-redux'
import '../App.css'

const FormWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: column;
	position: relative;
`

const FormControlWrapper = styled.div`
	display: flex;
	flex-direction: initial;
`

const FlexWrapper = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
const TitleWrapper = styled.p`
	padding: 80px 0 40px 0;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 49px;
	color: #231f20;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
`
const LabelWrapper = styled.label`
	line-height: 2;
	text-align: left;
	display: block;
	font-size: 14px;
	font-weight: 200;
`
const BackToMain = styled.div`
	display: flex;
	gap: 15px;
	position: absolute;
	width: 109px;
	height: 25px;
	left: 115px;
	top: 40px;
`

const BackTitle = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 25px;
	color: #676a71;
`

const ImageValid = styled.img`
	height: 24px;
	width: 24px;
	margin: 15px -8px 0 8px;
`

const ButtonSubmit = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 209px;
	gap: 10px;
	width: 430px;
	height: 56px;
	background: #009cb4;
	border-radius: 5px;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 0.01em;
	color: #ffffff;
	margin: 20px 0 20px 0;
`

const PasswordTitle = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.01em;
	text-decoration-line: underline;
	color: #009cb4;
	margin-bottom: 40px;
	text-align: center;
`

const ButtonAuth = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 20px 10px;
	gap: 20px;
	width: 430px;
	height: 59px;
	border: 1px solid #ededf4;
	border-radius: 5px;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	text-decoration-line: underline;
	color: #4d4d4f;
	background-color: #ffffff;
	margin-bottom: 20px;
`

const TextRegister = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #4d4d4f;
	margin-top: 20px;
`
const NewRegister = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	text-decoration-line: underline;
	color: #009cb4;
	margin-bottom: 80px;
`

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [value, setValue] = useState('')
	const [pass, setPass] = useState('')
	const user = useSelector((state) => state.login.name)
	const password = useSelector((state) => state.login.password)
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({ mode: 'onChange' })

	const onSubmit = () => {
		if (user === value && pass === password) {
			dispatch(loginAction())
			reset()
			navigate('/')
		}
	}

	const LabelDiv = styled.p`
		height: 10px;
	`

	const [values, setValues] = React.useState({
		showPassword: false,
	})

	const handleClickShowPassword = () => {
		setValues({
			showPassword: !values.showPassword,
		})
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}
	function backToMain() {
		navigate('/')
	}

	return (
		<FormWrapper>
			<BackToMain>
				<img src={arrowLeft} alt='legt' />
				<BackTitle onClick={backToMain}>Главная</BackTitle>
			</BackToMain>
			<TitleWrapper>Авторизация</TitleWrapper>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<LabelWrapper htmlFor='name'>Имя</LabelWrapper>
				<FormControlWrapper>
					<OutlinedInput
						color={value === user && 'success'}
						placeholder='Введите имя'
						sx={{ m: 0, width: '430px' }}
						{...register('name', {
							onChange: (event) => {
								setValue(event.target.value)
							},
						})}
						id='outlined-basic'
						variant='outlined'
					/>
					{value === user && <ImageValid src={valid} alt='valid' />}
				</FormControlWrapper>
				<LabelWrapper htmlFor='password'>Пароль</LabelWrapper>
				<FormControlWrapper>
					<OutlinedInput
						sx={{ width: '430px' }}
						color={pass !== password ? 'error' : 'success'}
						placeholder='Введите пароль'
						{...register('password', {
							onChange: (event) => {
								setPass(event.target.value)
							},
							required: pass !== password ? 'Поле обязательно к заполнению' : 'aaaa',
						})}
						id='outlined-adornment-password'
						type={values.showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
								>
									{values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					{pass === password && <ImageValid src={valid} alt='valid' />}
				</FormControlWrapper>
				<LabelDiv>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</LabelDiv>
				<FormControlLabel
					sx={{ mt: '20px' }}
					control={
						<Checkbox
							defaultChecked
							sx={{
								color: '#009CB4;',
								'&.Mui-checked': {
									color: '#009CB4;',
								},
							}}
						/>
					}
					label='Запомнить меня на этом компьютере'
				/>
				<ButtonSubmit variant='outlined' type='submit' disabled={!isValid}>
					Вход
				</ButtonSubmit>
				<PasswordTitle>Забыли свой пароль?</PasswordTitle>
				<ButtonAuth>Авторизация с использованием ЕС ИФЮЛ</ButtonAuth>
				<ButtonAuth>Авторизация с использованием МСИ</ButtonAuth>
			</Form>
			<FlexWrapper>
				<TextRegister>У вас нет аккаунта?</TextRegister>
				<Link to='/registration'>
					<NewRegister>Нажмите сюда чтобы создать</NewRegister>
				</Link>
			</FlexWrapper>
		</FormWrapper>
	)
}

export default Login
