import styled from 'styled-components'
import blackdata from '../assets/blackdata.png'
import blackbell from '../assets/blackbell.png'
import blackregisters from '../assets/blackregisters.png'
import blackmetadata from '../assets/blackmetadata.png'
import blacksafety from '../assets/blacksafety.png'
import blackgroupDownload from '../assets/blackgroupDownload.png'
import exit from '../assets/exit.png'
import user1 from '../assets/user.png'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import { useForm } from 'react-hook-form'
import { IconButton, InputAdornment, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
	changenCity,
	changenCountry,
	changenName,
	changenPassword,
	changenPatronymic,
	changenSurname,
	changenTelephone,
	logoutAction,
} from '../redux/loginSlice'
import { useNavigate } from 'react-router-dom'

const PersonalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 115px;
`
const PersonalTitle = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 49px;
	color: #231f20;
	margin: 80px 0 40px 0;
`
const ListItemTextBlack = styled(ListItemText)`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 25px;
	color: #676a71;
	&:hover,
	&:focus {
		color: #009cb4;
	}
	cursor: pointer;
`
const ListItemTextRed = styled(ListItemTextBlack)`
	color: #e0371f;
`
const ListItemWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 20px;
	width: 270px;
	height: 72px;
	border-width: 1px 1px 1px 1px;
	border-style: solid;
	border-color: #ededf4;
	gap: 10px;
`
const HelloWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: #231f20;
	padding-bottom: 36px;
	border-bottom: 3px solid #ededf4;
	width: 770px;
`
const PersonalTwo = styled.div`
	display: flex;
	gap: 130px;
`
const BasicData = styled.p`
	padding-top: 36px;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	color: #4d4d4f;
`
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	gap: 30px;
`
const LabelWrapper = styled.label`
	line-height: 2;
	text-align: left;
	display: block;
	font-size: 14px;
	font-weight: 200;
`

const ButtonSave = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 270px;
	height: 56px;
	background: #009cb4;
	border-radius: 5px;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: #ffffff;
	border: none;
	margin-top: 53px;
`
const FormControlWrapper = styled.div`
	display: flex;
	flex-direction: initial;
`
const FormControlWrapperSelect = styled.div`
	display: flex;
	flex-direction: column;
`
const PassworWrapper = styled.div`
	display: flex;
	flexwrap: wrap;
`
const Passwords = styled.div`
	display: flex;
	flexwrap: wrap;
	gap: 30px;
`

const style = {
	width: '100%',
	maxWidth: 360,
	bgcolor: 'background.paper',
}

const Personal = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const name = useSelector((state) => state.login.name)
	const surname = useSelector((state) => state.login.surname)
	const patronymic = useSelector((state) => state.login.patronymic)
	const country = useSelector((state) => state.login.country)
	const city = useSelector((state) => state.login.city)
	const telephone = useSelector((state) => state.login.telephone)
	const [names, setNames] = useState(name)
	const [surnames, setSurnames] = useState(surname)
	const [patronymics, setPatronymics] = useState(patronymic)
	const [telephones, setTelephones] = useState(telephone)
	const [citys, setCitys] = useState(city)
	const [countrys, setCountrys] = useState(country)
	const [firstPassword, setFirstPassword] = useState('')
	const [secondPassword, setSecondPassword] = useState('')

	const {
		register,
		formState: { isValid },
		handleSubmit,
	} = useForm({ mode: 'onChange' })
	const onSubmit = () => {
		dispatch(changenName(names))
		dispatch(changenSurname(surnames))
		dispatch(changenPatronymic(patronymics))
		dispatch(changenTelephone(telephones))
		dispatch(changenCity(citys))
		dispatch(changenCountry(countrys))
		if (firstPassword === secondPassword && firstPassword !== '') {
			dispatch(changenPassword(firstPassword))
		}
	}
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

	function toExit() {
		dispatch(logoutAction())
		navigate('/')
	}
	return (
		<PersonalWrapper>
			<PersonalTitle>???????????? ??????????????</PersonalTitle>
			<PersonalTwo>
				<div>
					<List sx={style} component='nav' aria-label='mailbox folders'>
						<ListItemWrapper button>
							<img src={blackdata} alt='blackdata' />
							<ListItemTextBlack primary='?????? ????????????' />
						</ListItemWrapper>
						<ListItemWrapper button>
							<img src={blackbell} alt='blackbell' />
							<ListItemTextBlack primary='??????????????????????' />
						</ListItemWrapper>
						<ListItemWrapper button>
							<img src={blackregisters} alt='blackregisters' />
							<ListItemTextBlack primary='??????????????' />
						</ListItemWrapper>
						<ListItemWrapper button>
							<img src={blackmetadata} alt='blackmetadata' />
							<ListItemTextBlack primary='????????????????????' />
						</ListItemWrapper>
						<ListItemWrapper button>
							<img src={blacksafety} alt='blacksafety' />
							<ListItemTextBlack primary='????????????????????????' />
						</ListItemWrapper>
						<ListItemWrapper button>
							<img src={blackgroupDownload} alt='blackgroupDownload' />
							<ListItemTextBlack primary='?????? ????????????????' />
						</ListItemWrapper>
						<ListItemWrapper onClick={toExit} button>
							<img src={exit} alt='exit' />
							<ListItemTextRed primary='??????????' />
						</ListItemWrapper>
					</List>
				</div>
				<div>
					<HelloWrapper>
						<img src={user1} alt='user' />
						<p>????????????????????, {name}!</p>
					</HelloWrapper>
					<BasicData>???????????????? ????????????</BasicData>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<LabelWrapper htmlFor='name'>??????</LabelWrapper>
							<FormControlWrapper>
								<OutlinedInput
									value={names}
									placeholder='?????????????? ??????'
									sx={{ m: 0, width: '370px' }}
									{...register('name', {
										onChange: (e) => {
											setNames(e.target.value)
										},
									})}
									id='outlined-basic'
									variant='outlined'
								>
									name
								</OutlinedInput>
							</FormControlWrapper>
						</div>
						<div>
							<LabelWrapper htmlFor='surname'>??????????????</LabelWrapper>
							<FormControlWrapper>
								<OutlinedInput
									value={surnames}
									placeholder='?????????????? ??????????????'
									sx={{ m: 0, width: '370px' }}
									{...register('surname', {
										onChange: (e) => {
											setSurnames(e.target.value)
										},
									})}
									id='outlined-basic'
									variant='outlined'
								/>
							</FormControlWrapper>
						</div>
						<div>
							<LabelWrapper htmlFor='patronymic'>????????????????</LabelWrapper>
							<FormControlWrapper>
								<OutlinedInput
									value={patronymics}
									placeholder='?????????????? ????????????????'
									sx={{ m: 0, width: '370px' }}
									{...register('patronymic', {
										onChange: (e) => {
											setPatronymics(e.target.value)
										},
									})}
									id='outlined-basic'
									variant='outlined'
								/>
							</FormControlWrapper>
						</div>
						<div>
							<FormControlWrapperSelect sx={{ m: 1 }} variant='standard'>
								<LabelWrapper id='demo-customized-select' htmlFor='country'>
									????????????
								</LabelWrapper>
								<Select
									value={countrys}
									sx={{ width: '370px' }}
									labelId='demo-customized-select-label'
									id='demo-customized-select'
									label='????????????'
									onChange={(e) => {
										setCountrys(e.target.value)
									}}
								>
									<MenuItem value={1}>????????????????</MenuItem>
									<MenuItem value={2}>??????????????</MenuItem>
									<MenuItem value={3}>????????????</MenuItem>
									<MenuItem value={4}>??????????</MenuItem>
									<MenuItem value={5}>????????????</MenuItem>
									<MenuItem value={6}>????????????</MenuItem>
								</Select>
							</FormControlWrapperSelect>
						</div>
						<div>
							<FormControlWrapperSelect sx={{ m: 1 }} variant='standard'>
								<LabelWrapper id='demo-customized-select' htmlFor='city'>
									??????????
								</LabelWrapper>
								<Select
									value={citys}
									sx={{ width: '370px' }}
									labelId='demo-customized-select-label'
									id='demo-customized-select'
									label='??????????'
									onChange={(e) => {
										setCitys(e.target.value)
									}}
								>
									<MenuItem value={1}>??????????</MenuItem>
									<MenuItem value={2}>????????</MenuItem>
									<MenuItem value={3}>??????????????</MenuItem>
									<MenuItem value={4}>??????????????</MenuItem>
									<MenuItem value={5}>????????????</MenuItem>
									<MenuItem value={6}>????????</MenuItem>
								</Select>
							</FormControlWrapperSelect>
						</div>
						<div>
							<LabelWrapper htmlFor='telephone'>?????????????????? ??????????????</LabelWrapper>
							<FormControlWrapper>
								<OutlinedInput
									value={telephones}
									placeholder='?????????????? ?????????? ???????????????????? ????????????????'
									sx={{ m: 0, width: '370px' }}
									{...register('telephone', {
										onChange: (e) => {
											setTelephones(e.target.value)
										},
									})}
									id='outlined-basic'
									variant='outlined'
									pattern='(8 0(25|29|33|34) ([0-9]{3}( [0-9]{2}){2}))'
								/>
							</FormControlWrapper>
						</div>
						<PassworWrapper style={{ display: 'flex', flexWrap: 'wrap' }}>
							<BasicData>????????????</BasicData>
							<Passwords style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
								<div>
									<LabelWrapper htmlFor='password1'>?????????? ????????????</LabelWrapper>
									<FormControlWrapper>
										<OutlinedInput
											value={firstPassword}
											sx={{ width: '370px' }}
											placeholder='?????????????? ????????????'
											{...register('password1', {
												onChange: (e) => {
													setFirstPassword(e.target.value)
												},
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
									</FormControlWrapper>
								</div>
								<div>
									<LabelWrapper htmlFor='password2'>?????????????????????????? ????????????</LabelWrapper>
									<FormControlWrapper>
										<OutlinedInput
											sx={{ width: '370px' }}
											placeholder='?????????????? ????????????'
											{...register('password2', {
												onChange: (e) => {
													setSecondPassword(e.target.value)
												},
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
									</FormControlWrapper>
								</div>
								<ButtonSave variant='outlined' type='submit' disabled={!isValid}>
									??????????????????
								</ButtonSave>
							</Passwords>
						</PassworWrapper>
					</Form>
				</div>
			</PersonalTwo>
		</PersonalWrapper>
	)
}

export default Personal
