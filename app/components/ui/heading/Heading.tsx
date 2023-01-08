import { FC } from 'react'

import styles from './Heading.module.scss'

interface IHeading {
	title: string
}

const Heading: FC<IHeading> = ({ title }) => {
	return <h4 className={styles.title}>{title}</h4>
}
export default Heading
