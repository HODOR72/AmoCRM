import { Heading } from '@/components/ui'

import styles from './About.module.scss'

const About = () => {
	return (
		<section className={styles.about}>
			<div className='blob blobRed' />
			<Heading title='О нас' />
			<p>
				<span>WelbeX — крупный интегратор ACRM</span> в Росcии и ещё 8 странах
			</p>
			<div>
				<div>
					<p>11</p>
					<p>
						лет в програмировании <br /> и автоматизации
					</p>
				</div>
				<div>
					<p>30</p>
					<p>
						сотрудников <br /> в компании
					</p>
				</div>
				<div>
					<p>+350</p>
					<p>
						внедрений <br /> АмоCRM
					</p>
				</div>
			</div>
		</section>
	)
}
export default About
