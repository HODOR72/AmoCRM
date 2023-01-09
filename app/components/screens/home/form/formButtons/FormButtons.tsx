import cn from 'clsx'
import { FC, useState } from 'react'

import styles from './FormButtons.module.scss'

interface IFormButtons {
	values: string[]
	name: string
	title: string
	isBig?: boolean
}

const FormButtons: FC<IFormButtons> = ({
	values,
	name,
	title,
	isBig = false,
}) => {
	const [checked, setChecked] = useState(true)

	return (
		<>
			<p className={styles.text}>{title}</p>
			<div className={styles.wrapper}>
				{values.map((value, i) => (
					<div className={cn(styles.radioBtn, { [styles.radioBtnBig]: isBig })} key={i}>
						<input
							id={`${name}-${i}`}
							type='radio'
							name={name}
							defaultChecked={checked && i == 0}
							onChange={() => setChecked(!checked)}
						/>
						<label htmlFor={`${name}-${i}`}>{value}</label>
					</div>
				))}
			</div>
		</>
	)
}
export default FormButtons
