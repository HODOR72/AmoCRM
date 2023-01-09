import Spline from '@splinetool/react-spline'

import { Heading } from '@/components/ui'

import styles from './Form.module.scss'
import FormWrapper from './FormWrapper'
import FormTel from './formTel/FormTel'

const Form = () => {
	return (
		<section className={styles.form}>
			<Heading title='Бесплатный аудит' />
			<div>
				<div className={styles.intro}>
					<p>
						Закажите <br />
						<span>
							бесплатный скайп-аудит <br /> отдела продаж
						</span>
					</p>
					<p>И получите предложение по решению вашей задачи</p>
				</div>
				<form>
					<FormTel text='Заказать аудит' />
				</form>
			</div>
			<div>
				<div className='blob blobRed' />
				<Heading title='Расчёт стоимости' />
				<div>
					<div>
						<div className={styles.intro}>
							<p>
								Ответьте на 4 вопроса <br /> и получите
								<span>
									расчёт стоимости <br />
									внедрения AmoCRM
								</span>
							</p>
							<p>И сэкономьте 80% своего времени.</p>
						</div>
						<div className={styles.canvas}>
							<Spline scene='https://prod.spline.design/j0ck5N-tLs3SgD2q/scene.splinecode' />
						</div>
					</div>
					<div>
						<div className={styles.info}>
							<p>При заказе с сайта вы получите 4 бонуса от компании:</p>
							<ul>
								<li>Аудит с лучшим экспертом компании</li>
								<li>30 виджетов</li>
								<li>Dashboard с показателями</li>
								<li>35 дней AmoCRM</li>
							</ul>
						</div>
						<FormWrapper />
					</div>
				</div>
			</div>
		</section>
	)
}
export default Form
