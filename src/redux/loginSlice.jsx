import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		isLogin: false,
		name: 'Миша',
		password: 'Миша',
		surname: '',
		patronymic: '',
		country: '1',
		city: '5',
		telephone: '',
		isSave: false,
		allNews: false,
	},
	reducers: {
		logoutAction(state) {
			state.isLogin = false
		},
		loginAction(state) {
			state.isLogin = true
		},
		changenName(state, action) {
			state.name = action.payload
		},
		changenPassword(state, action) {
			state.password = action.payload
		},
		changenSurname(state, action) {
			state.surname = action.payload
		},
		changenPatronymic(state, action) {
			state.patronymic = action.payload
		},
		changenCountry(state, action) {
			state.country = action.payload
		},
		changenCity(state, action) {
			state.city = action.payload
		},
		changenTelephone(state, action) {
			state.telephone = action.payload
		},
		changenSave(state) {
			state.isSave = !state.isSave
		},
		changenNews(state) {
			state.allNews = !state.allNews
		},
	},
})

export default loginSlice.reducer
export const {
	logoutAction,
	loginAction,
	changenName,
	changenPassword,
	changenSurname,
	changenPatronymic,
	changenCountry,
	changenCity,
	changenTelephone,
	changenNews,
} = loginSlice.actions
