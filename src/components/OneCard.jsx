import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import calendar from '../assets/calendar.png'
import styled from 'styled-components'

const CalenderWrapper = styled.div`
	display: flex;
	align-items: center;
`

export default function OneCard(news) {
	return (
		<Card sx={{ maxWidth: 370, mb: '10px' }}>
			<CardMedia component='img' image={news.news.photo} alt='work' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{news.news.typography}
				</Typography>
				<CalenderWrapper>
					<img src={calendar} alt='calendar' />
					<Typography gutterBottom variant='h5' sx={{ mb: '0px' }} component='div'>
						{news.news.date}
					</Typography>
				</CalenderWrapper>
				<Typography variant='body2' color='text.secondary'>
					{news.news.discription}
				</Typography>
			</CardContent>
		</Card>
	)
}
