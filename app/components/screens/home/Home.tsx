import Layout from '../../layout/Layout'
import Navigation from '../../layout/Navigation/Navigation'
import Meta from '../Meta'

import About from './about/About'
import Decide from './decide/Decide'
import Footer from './footer/Footer'
import Form from './form/Form'
import Header from './header/Header'

const Home = () => {
	return (
		<Layout>
			<Meta>
				<Navigation />
				<Header />
				<main>
					<About />
					<Decide />
					<Form />
				</main>
				<Footer />
			</Meta>
		</Layout>
	)
}
export default Home
