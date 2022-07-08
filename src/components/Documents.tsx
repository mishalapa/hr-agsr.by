import styled from 'styled-components'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import download from '../assets/download.png'
import groupDownload from '../assets/groupDownload.png'

function createData(id: string, category: string, name: string, date: string, numb: number, content: string) {
	return { id, category, name, date, numb, content }
}

const rows = [
	createData(
		'1',
		'Общие документы',
		'Постановление Правительства Российской  Федерации от 20.07.2021 "О внесении  изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
		'20.07.2021',
		1226,
		'(469 Кб)'
	),
	createData(
		'2',
		'Общие документы',
		'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных',
		'22.09.2020',
		468,
		'(10.81 Мб)'
	),
	createData(
		'3',
		'Общие документы',
		'Административный регламент ПРИКАЗ от 21 февраля 2019 года N62',
		'21.02.2019',
		62,
		'(2.25 Мб)'
	),
	createData(
		'4',
		'Общие документы',
		'Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
		'20.12.2017',
		1594,
		'(2.07 Мб)'
	),
	createData(
		'5',
		'Общие документы',
		'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных',
		'31.12.2015',
		622,
		'(4.69 Мб)'
	),
]

const Title = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 49px;
	color: #231f20;
	margin: 80px 0 10px 0;
`
const DocumentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 115px;
`

const Text = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 25px;
	color: #4d4d4f;
`
const TextWrapper = styled.div`
	display: flex;
	margin-bottom: 40px;
`
const NumberText = styled.p`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 25px;
	color: #009cb4;
`

const HeaderCell = styled.th`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #009cb4;
	border-bottom: 1px solid #ededf4;
	border-top: 1px solid #ededf4;
	height: 64px;
	text-align: left;
	padding-left: 80px;
`
const HeaderRow = styled.td`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #4d4d4f;
	max-height: 121px;
	padding: 16px;
	border-bottom: 1px solid rgba(224, 224, 224, 1);
	padding-left: 80px;
`

const HeaderRowDownload = styled.td`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #009cb4;
	max-height: 121px;
`

const HeaderCellLast = styled(HeaderCell)`
	padding-left: 0px;
	padding-top: 21px;
`

const HeaderCellOne = styled(HeaderCell)`
	padding-left: 0px;
`
const HeaderCellTwo = styled(HeaderCell)`
	width: 390px;
`
const DownloadImage = styled.img`
	height: 23px;
	width: 23px;
`
const DownloadWrapper = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	margin-left: 50px;
`
const Download = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #4d4d4f;
	max-height: 121px;
	padding: 72px 20px 72px 20px;
	border-bottom: 1px solid rgba(224, 224, 224, 1);
`
const DownloadFile = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
`
const DownloadText = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #009cb4;
`
const DownloadLink = styled.a`
	text-decoration: none;
`

const Documents = () => {
	return (
		<DocumentsWrapper>
			<Title>Документы</Title>
			<TextWrapper>
				<Text>Всего документов:</Text>
				<NumberText>5</NumberText>
			</TextWrapper>
			<TableContainer sx={{ boxShadow: 'none' }} component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<HeaderCellOne>Категория</HeaderCellOne>
							<HeaderCellTwo align='right'>Наименование</HeaderCellTwo>
							<HeaderCell align='right'>Дата</HeaderCell>
							<HeaderCell align='right'>Номер</HeaderCell>
							<DownloadWrapper>
								<DownloadImage src={download} alt='download' />
								<HeaderCellLast align='right'>Содержание</HeaderCellLast>
							</DownloadWrapper>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row' sx={{ width: 250, pl: 0 }}>
									{row.category}
								</TableCell>
								<HeaderRow align='right'>{row.name}</HeaderRow>
								<HeaderRow align='right'>{row.date}</HeaderRow>
								<HeaderRow align='right'>{row.numb}</HeaderRow>
								<DownloadLink href='#' download='' title='всплывающая подсказка'>
									<Download>
										<img src={groupDownload} alt='groupDownload' />
										<DownloadFile>
											<DownloadText>Скачать</DownloadText>
											<HeaderRowDownload align='right'>{row.content}</HeaderRowDownload>
										</DownloadFile>
									</Download>
								</DownloadLink>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</DocumentsWrapper>
	)
}

export default Documents
