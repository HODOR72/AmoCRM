import Logo from './Logo/Logo'
import Menu from './Menu'
import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<Menu />
		</div>
	)
}
export default Navigation
