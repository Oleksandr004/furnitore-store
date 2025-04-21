import '@/styles/reset.css'
import { ReduxProvider } from '@/store/provider'

export const metadata = {
	title: 'Furniture Store | High Quality Furniture Online',
	description:
		'Browse a wide variety of furniture for your home. From modern designs to classic pieces, we have everything you need.',
	keywords:
		'furniture, online store, home decor, modern furniture, classic furniture, buy furniture',
	author: 'Furniture Store',
	viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' translate='no'>
			<head>
				<meta name='google' content='notranslate' />
				<meta name='robots' content='index, follow' />
				<meta property='og:title' content='Furniture Store' />
				<meta
					property='og:description'
					content='High-quality furniture for every home.'
				/>
				<meta property='og:type' content='website' />
			</head>
			<body className='antialiased'>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
