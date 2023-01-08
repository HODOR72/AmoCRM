import { FC } from 'react'

import { Button } from '@/components/ui'

import styles from './FormTel.module.scss'

interface IFormTel {
	text: string
}

const FormTel: FC<IFormTel> = ({ text }) => {
	return (
		<>
			<span className={styles.text}>Ваш номер телефона</span>
			<input
				type="number"
				placeholder="Введите ваш номер телефона"
				className={styles.input}
			/>
			<div className={styles.wrapper}>
				<Button text={text} />
				<p>
					Нажимая «Заказать аудит», я даю согласие <br /> на
					<a href="#">обработку персональных данных</a>
				</p>
			</div>
		</>
	)
}
export default FormTel
