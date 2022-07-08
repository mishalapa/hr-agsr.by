import styled from 'styled-components'
import file from '../assets/file.png'
import { InputBase } from '@mui/material'
import { data } from './Registers'
import { useState } from 'react'

const HeaderWrapper = styled.div`
	height: 662px;
	display: flex;
	align-items: center;
	gap: 215px;
`
const TitleSearch = styled.h1`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 48px;
	line-height: 66px;
`

const SearchWrapper = styled.div`
	height: 442px;
	width: 450px;
	margin-left: 115px;
`

const TextTitle = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #676a71;
`
const Text = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #676a71;
`

const NumberText = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #009cb4;
`
const TextWrapper = styled.div`
	display: flex;
	gap: 5px;
`
const InputWrapper = styled(InputBase)`
	height: 57px;
	padding: 0;
	width: 270px;
	background: #f9f9fb;
`
const Button = styled.button`
	width: 120px;
	height: 57px;
	background: #009cb4;
	border-radius: 5px;
	border: none;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 0.01em;
	color: #ffffff;
	cursor: pointer;
`

const SearchForReestr = styled.div`
	display: flex;
	position: relative;
`

const Search = () => {
	const [value, setValue] = useState('')
	return (
		<HeaderWrapper>
			<SearchWrapper>
				<TitleSearch>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</TitleSearch>
				<TextTitle>Единый реестр программ для электронных вычислительных машин и баз данных</TextTitle>
				<TextWrapper>
					<Text>Включено ПО в реестр:</Text>
					<NumberText> {data.length}</NumberText>
				</TextWrapper>
				<TextWrapper>
					<Text>Правообладателей:</Text>
					<NumberText> {data.length / 2}</NumberText>
				</TextWrapper>
				<SearchForReestr>
					<InputWrapper
						placeholder='Искать Реестр...'
						value={value}
						onChange={(e) => {
							setValue(e.target.value)
							console.log('aaa', value)
						}}
					/>
					<Button>Искать</Button>

					<ul className='autocomplete'>
						{data.length > 0 &&
							data.map((one) => {
								return (
									one.nameSoftware.toLowerCase().includes(value) &&
									value !== '' && (
										<li className='autocomplete__item' key={one.key}>
											{one.nameSoftware}
										</li>
									)
								)
							})}
					</ul>
				</SearchForReestr>
			</SearchWrapper>
			<div>
				<img src={file} alt='file' />
			</div>
		</HeaderWrapper>
	)
}

export default Search
