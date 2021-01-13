import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => (
	<div>
		<Head>
			<title>Bitcoin Price App</title>
			<link
				href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
				rel='stylesheet'
				integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
				crossOrigin='anonymous'
			/>{' '}
		</Head>
		<Navbar />
		{props.children}
	</div>
)

export default Layout
