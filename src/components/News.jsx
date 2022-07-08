import OneCard from './OneCard'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news4 from '../assets/news4.png'
import news5 from '../assets/news5.png'
import news6 from '../assets/news6.png'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changenNews } from '../redux/loginSlice'

const NewsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 115px;
`

const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`
const Title = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 49px;
	color: #231f20;
	margin: 80px 0 40px;
`
const NewButton = styled.button`
	width: 270px;
	height: 56px;
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
	margin-top: 30px;
	position: relative;
	left: 50%;
	transform: translate(-50%, 0);
	cursor: pointer;
`

const array = [
	{
		typography: 'Технические работы 30.05.2022',
		id: 1,
		date: '30.05.2022',
		discription: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...',
		photo: news1,
	},
	{
		typography: 'Изменение справочника',
		id: 2,
		date: '28.05.2022',
		discription: 'Обращаем внимание, что с 28.05.2022	внесены изменения в справочник "Дей...',
		photo: news2,
	},
	{
		typography: 'Технические работы 26.05.2022',
		id: 3,
		date: '26.05.2022',
		discription: 'В связи с проведением технических работ	26.05.2022 с 21:00 могут наблюдаться пер...',
		photo: news1,
	},
	{
		typography: 'Лицензирование в Беларуси',
		id: 4,
		date: '25.05.2022',
		discription: 'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...',
		photo: news4,
	},
	{
		typography: 'Тестирование системы новостей Ед...',
		id: 5,
		date: '20.05.2022',
		discription: 'Тестирование системы новостей ЕРЛ.',
		photo: news5,
	},
	{
		typography: 'Обновление версии реестра ПО',
		id: 6,
		date: '18.05.2022',
		discription: 'В новой версии доступны новые функции,	которые упрощают использование сервис...',
		photo: news6,
	},
	{
		typography: 'Лицензирование в Беларуси',
		id: 4,
		date: '25.05.2022',
		discription: 'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...',
		photo: news4,
	},
	{
		typography: 'Тестирование системы новостей Ед...',
		id: 5,
		date: '20.05.2022',
		discription: 'Тестирование системы новостей ЕРЛ.',
		photo: news5,
	},
	{
		typography: 'Обновление версии реестра ПО',
		id: 6,
		date: '18.05.2022',
		discription: 'В новой версии доступны новые функции,	которые упрощают использование сервис...',
		photo: news6,
	},
]

export default function News() {
	const dispatch = useDispatch()
	const allNews = useSelector((state) => state.login.allNews)
	function showAllNews() {
		console.log('aaa', allNews)
		dispatch(changenNews())
	}
	return (
		<NewsWrapper>
			<Title>Новости реестра</Title>
			<CardsWrapper>
				{!allNews
					? array.slice(0, 6).map((news) => {
							return <OneCard news={news} key={news.id} />
					  })
					: array.map((news) => {
							return <OneCard news={news} key={news.id} />
					  })}
			</CardsWrapper>
			{allNews ? (
				<NewButton onClick={showAllNews}>Скрыть</NewButton>
			) : (
				<NewButton onClick={showAllNews}>Показать все</NewButton>
			)}
		</NewsWrapper>
	)
}
