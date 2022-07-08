import Questions from './Questions'
import Documents from './Documents'
import News from './News'
import Search from './Search'
import Registers from './Registers'

const Main = () => {
	return (
		<div>
			<Search />
			<Registers />
			<News />
			<Documents />
			<Questions />
		</div>
	)
}

export default Main
