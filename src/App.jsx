import Header from './components/Header'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store'
import Main from './components/Main'
import Footer from './components/Footer'
import Personal from './components/Personal'
import './App.css'

const AppWrapper = styled.div`
	width: 1400px;
	margin: 0 auto;
`

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<AppWrapper>
						<Header />
						<Routes>
							<Route path='/' element={<Main />}></Route>
							<Route path='/login' element={<Login />}></Route>
							<Route path='/personal' element={<Personal />}></Route>
						</Routes>
						<Footer />
					</AppWrapper>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
