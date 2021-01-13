import Layout from '../components/Layout/Layout'
import Price from '../components/Price/Price'

const Index = (props) => (
	<Layout>
		<div className='container'>
			<h1>Welcome to BitzPrice</h1>
			<p>Check current Bitcoin Price</p>
			<Price bpi={props.bpi} />
		</div>
	</Layout>
)

Index.getInitialProps = async function () {
	const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
	const data = await result.json()
	return {
		bpi: data.bpi,
	}
}

export default Index
