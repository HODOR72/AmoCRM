import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface IMeta {
	children: React.ReactNode
}

const Meta: FC<IMeta> = ({ children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headline">Зарабатывайте больше с AmoCRM.</title>
				<meta
					itemProp="description"
					name="description"
					content="Развиваем и контролируем продажи за вас"
				/>
				<link rel="canonical" href={currentUrl} />
				<meta property="og:locale" content="ru" />
				<meta property="og:title" content="Зарабатывайте больше с AmoCRM." />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:site_name" content="AmoCRM" />
				<meta
					property="og:description"
					content="Развиваем и контролируем продажи за вас"
				/>
			</Head>
			{children}
		</>
	)
}
export default Meta
