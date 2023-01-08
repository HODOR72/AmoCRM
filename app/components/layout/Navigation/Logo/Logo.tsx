import Image from 'next/image'

import logo from '@/assets/images/svg/logo_welbex.svg'

import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Image src={logo} alt="Logo" width={140} height={24} priority draggable={false} />
			<p>крупный интегратор AmoCRM в Росcии и ещё 8 странах</p>
		</div>
	)
}
export default Logo
