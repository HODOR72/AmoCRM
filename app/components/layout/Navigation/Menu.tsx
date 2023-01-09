import cn from 'clsx'
import { Squash as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { telegram, viber, whatsapp } from '@/assets/images'

import styles from './Navigation.module.scss'

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('hide')
		} else {
			document.body.classList.remove('hide')
		}
	}, [isOpen])

	return (
		<>
			<div className={cn(styles.menu, { [styles.activeMenu]: isOpen })}>
				<ul className={styles.nav}>
					<li>
						<a href='#'>Услуги </a>
					</li>
					<li>
						<a href='#'>Виджеты</a>
					</li>
					<li>
						<a href='#'>Интеграции </a>
					</li>
					<li>
						<a href='#'>Кейсы </a>
					</li>
					<li>
						<a href='#'>Сертификаты </a>
					</li>
				</ul>
				<div>
					<a href='tel:+74954714163'>+7 495 471-41-63</a>
				</div>
				<ul className={styles.soical}>
					<li>
						<a href='#'>
							<Image src={telegram} width={20} height={20} alt='Telegram' draggable={false} />
						</a>
					</li>
					<li>
						<a href='#'>
							<Image src={viber} width={20} height={20} alt='Viber' draggable={false} />
						</a>
					</li>
					<li>
						<a href='#'>
							<Image src={whatsapp} width={20} height={20} alt='Whatsapp' draggable={false} />
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.hamburger}>
				<Hamburger toggled={isOpen} toggle={setIsOpen} />
			</div>
		</>
	)
}
export default Menu
