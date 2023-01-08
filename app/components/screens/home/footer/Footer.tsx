import Image from 'next/image'

import { footerLogo, telegram, viber, whatsapp } from '@/assets/images/svg'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Image src={footerLogo} width={97} height={15} alt="Logo" />
			<div>
				<div>
					<h5>О компании</h5>
					<a href="#">Партнёрская программа</a>
					<a href="#">Вакансии</a>
				</div>
				<div>
					<h5>Меню</h5>
					<a href="#">Расчёт стоимости</a>
					<a href="#">Услуги</a>
					<a href="#">Виджеты</a>
					<a href="#">Интеграции</a>
					<a href="#">Наши клиенты</a>
				</div>
				<div>
					<a href="#">Кейсы</a>
					<a href="#">Благодарственные письма</a>
					<a href="#">Сертификаты</a>
					<a href="#">Блог на Youtube</a>
					<a href="#">Вопрос / Ответ</a>
				</div>
				<div>
					<h5>Контакты</h5>
					<a href="tel:+74954714163">+7 495 471-41-63</a>
					<ul className={styles.soical}>
						<li>
							<a href="#">
								<Image src={telegram} width={20} height={20} alt="Telegram" />
							</a>
						</li>
						<li>
							<a href="#">
								<Image src={viber} width={20} height={20} alt="Viber" />
							</a>
						</li>
						<li>
							<a href="#">
								<Image src={whatsapp} width={20} height={20} alt="Whatsapp" />
							</a>
						</li>
					</ul>
					<p>Москва, Путевой проезд 3с1, к 902</p>
				</div>
			</div>
			<div className={styles.protection}>
				<span>©WelbeX 2023. Все права защищены.</span>
				<a href="#">Политика конфиденциальности</a>
			</div>
		</footer>
	)
}
export default Footer
