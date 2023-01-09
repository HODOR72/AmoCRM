import Image from 'next/image'

import { Heading } from '@/components/ui'

import { educate, functional, salles } from '@/assets/images'

import styles from './Decide.module.scss'

const Decide = () => {
	return (
		<section className={styles.decide}>
			<div className='blob blobOrange' />
			<Heading title='Мы решаем проблемы' />
			<div className={styles.intro}>
				<p>
					<span>99% компаний откладывают внедрение AmoCRM </span>
					или не доводят систему до результата
				</p>
				<p>Всё это приводит к самой главной проблеме — потере денег.</p>
			</div>
			<div className={styles.info}>
				<div>
					<h4>Компания работает без AmoCRM</h4>
					<p>
						Нет времени на самостоятельное изучение и внедрение CRM системы.
					</p>
					<p>
						Отсутствие понимания для чего надо внедрять CRM систему. Какую
						пользу это принесёт бизнесу.
					</p>
					<p>Страх, что вложенные средства не окупятся.</p>
				</div>
				<div>
					<h4>AmoCRM не даёт результата</h4>
					<p>
						Работа отдела продаж не является системной. Отдел является чёрным
						ящиком, работу которого нельзя спрогнозировать.
					</p>
					<p>
						Невозможно определить, какие сделки являются самыми прибыльными
						для компании, а какие не приносят результата.
					</p>
				</div>
				<div>
					<p>
						Информация о клиентах хранится лично у менеджеров, что тормозит
						проект, если сотрудник не на месте. Также это даёт возможность
						увести клиентов из компании.
					</p>
					<p>Сложно оценить эффективность работы отдельного сотрудника.</p>
				</div>
			</div>
			<div>
				<p>
					После <span>бесплатного аудита</span> мы
				</p>
				<div>
					<div>
						<Image src={functional} width={70} height={70} alt='Functional' draggable={false} />
						<p>Продумаем функционал</p>
						<p>
							Составим ТЗ с продуманным функционалом, что сократит ваш бюджет
							в будущем.
						</p>
					</div>
					<div>
						<Image src={educate} width={70} height={70} alt='Educate' draggable={false} />
						<p>Обучим до результата</p>
						<p>
							Составим подробную инструкцию по работе с решениями. Обучим одного
							из ваших сотрудников.
						</p>
					</div>
					<div>
						<Image src={salles} width={70} height={70} alt='Salles' draggable={false} />
						<p>Настроим продажи на максимум</p>
						<p>
							Сделаем работу отдела системной и легко прогнозируемой,
							а сотрудников эффективными.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Decide
