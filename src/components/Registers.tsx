import 'antd/dist/antd.css'

import { Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/lib/table'
import React from 'react'

interface DataType {
	key: React.Key
	registrationRoom: string
	nameSoftware: string
	code: string
	class: string
	date: string
	adress: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Регистрационный	номер',
		dataIndex: 'registrationRoom',
		onFilter: (value: string, record) => record.registrationRoom.indexOf(value) === 0,
		sorter: (a, b) => a.registrationRoom.length - b.registrationRoom.length,
		sortDirections: ['descend'],
	},
	{
		title: 'Наименование программного обеспечения',
		dataIndex: 'nameSoftware',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.registrationRoom.length - b.registrationRoom.length,
	},
	{
		title: 'Код класса',
		dataIndex: 'code',
		onFilter: (value: string, record) => record.code.indexOf(value) === 0,
	},
	{
		title: 'Класс программного обеспечения',
		dataIndex: 'class',
		onFilter: (value: string, record) => record.class.indexOf(value) === 0,
	},
	{
		title: 'Дата регистрации',
		dataIndex: 'date',
		onFilter: (value: string, record) => record.date.indexOf(value) === 0,
	},
	{
		title: 'Адрес сайта',
		dataIndex: 'adress',
		onFilter: (value: string, record) => record.adress.indexOf(value) === 0,
	},
]

export const data = [
	{
		key: '1',
		registrationRoom: '#1',
		nameSoftware: 'Система управления базами данных	«Ред База Данных»',
		code: '02.09',
		class: 'Системы управления базами данных',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '2',
		registrationRoom: '#2',
		nameSoftware: '1С:Школа. Информатика, 11 класс',
		code: '04.11',
		class: 'Системы управления процессами	организации',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '3',
		registrationRoom: '#3',
		nameSoftware: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
		code: '04.11',
		class: 'Информационные системы для решения специфических отраслевых задач',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '4',
		registrationRoom: '#4',
		nameSoftware: 'Система управления базами данных	«Ред База Данных»',
		code: '02.09',
		class: 'Системы управления базами данных',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '5',
		registrationRoom: '#5',
		nameSoftware: '1С:Школа. Информатика, 11 класс',
		code: '04.11',
		class: 'Системы управления процессами	организации',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '6',
		registrationRoom: '#6',
		nameSoftware: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
		code: '04.11',
		class: 'Информационные системы для решения специфических отраслевых задач',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '7',
		registrationRoom: '#7',
		nameSoftware: 'Система управления базами данных	«Ред База Данных»',
		code: '02.09',
		class: 'Системы управления базами данных',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '8',
		registrationRoom: '#8',
		nameSoftware: '1С:Школа. Информатика, 11 класс',
		code: '04.11',
		class: 'Системы управления процессами	организации',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '9',
		registrationRoom: '#9',
		nameSoftware: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
		code: '04.11',
		class: 'Информационные системы для решения специфических отраслевых задач',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '10',
		registrationRoom: '#10',
		nameSoftware: 'Система управления базами данных	«Ред База Данных»',
		code: '02.09',
		class: 'Системы управления базами данных',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '11',
		registrationRoom: '#11',
		nameSoftware: '1С:Школа. Информатика, 11 класс',
		code: '04.11',
		class: 'Системы управления процессами	организации',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '12',
		registrationRoom: '#12',
		nameSoftware: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
		code: '04.11',
		class: 'Информационные системы для решения специфических отраслевых задач',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '13',
		registrationRoom: '#13',
		nameSoftware: 'Система управления базами данных	«Ред База Данных»',
		code: '02.09',
		class: 'Системы управления базами данных',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '14',
		registrationRoom: '#14',
		nameSoftware: '1С:Школа. Информатика, 11 класс',
		code: '04.11',
		class: 'Системы управления процессами	организации',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '15',
		registrationRoom: '#15',
		nameSoftware: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
		code: '04.11',
		class: 'Информационные системы для решения специфических отраслевых задач',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '16',
		registrationRoom: '#16',
		nameSoftware: 'Система управления базами данных	«Ред База Данных»',
		code: '02.09',
		class: 'Системы управления базами данных',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '17',
		registrationRoom: '#17',
		nameSoftware: '1С:Школа. Информатика, 11 класс',
		code: '04.11',
		class: 'Системы управления процессами	организации',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '18',
		registrationRoom: '#18',
		nameSoftware: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
		code: '04.11',
		class: 'Информационные системы для решения специфических отраслевых задач',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '19',
		registrationRoom: '#19',
		nameSoftware: 'Система управления базами данных	«Ред База Данных»',
		code: '02.09',
		class: 'Системы управления базами данных',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
	{
		key: '20',
		registrationRoom: '#20',
		nameSoftware: '1С:Школа. Информатика, 11 класс',
		code: '04.11',
		class: 'Системы управления процессами	организации',
		date: '29.01.2016',
		adress: 'Ссылка',
	},
]

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
	console.log('params', pagination, filters, sorter, extra)
}

const Registers: React.FC = () => <Table columns={columns} dataSource={data} onChange={onChange} />

export default Registers
