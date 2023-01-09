import dynamic from 'next/dynamic'

import { Button } from '@/components/ui'

import styles from './Header.module.scss'

const Spline = dynamic(() => import('@splinetool/react-spline'))

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.intro}>
				<h1>
					Зарабатывайте больше <span>с AmoCRM.</span>
				</h1>
				<p>Развиваем и контролируем продажи за вас</p>
			</div>
			<div className={styles.canvas}>
				<Spline scene="https://prod.spline.design/j0ck5N-tLs3SgD2q/scene.splinecode" />
			</div>
			<div className={styles.info}>
				<h2>
					Вместе с <span>бесплатной консультацией</span> мы дарим:
				</h2>
				<ul>
					<li>
						<h3>Виджеты</h3>
						<p>
							30 готовых <br /> решений
						</p>
					</li>
					<li>
						<h3>Dashboard</h3>
						<p>с показателями вашего бизнеса</p>
					</li>
					<li>
						<h3>Skype Аудит</h3>
						<p>
							отдела продажи <br /> CRM системы
						</p>
					</li>
					<li>
						<h3>35 дней</h3>
						<p>использования AmoCRM</p>
					</li>
				</ul>
				<div>
					<Button text="Получить консультацию" />
				</div>
			</div>
		</div>
	)
}
export default Header
