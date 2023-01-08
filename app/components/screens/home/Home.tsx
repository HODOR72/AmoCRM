
import Layout from '../../layout/Layout'
import Navigation from '../../layout/Navigation/Navigation'

import About from './about/About'
import Decide from './decide/Decide'
import Footer from './footer/Footer'
import Form from './form/Form'
import Header from './header/Header'

const Home = () => {
	return (
		<Layout>
			<Navigation />
			<Header />
			<main>
				<About />
				<Decide />
				<Form />
			</main>
			<Footer />
		</Layout>
	)
}
export default Home
