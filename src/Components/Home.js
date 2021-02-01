import React from 'react'
import Footer from './footer'
import Header from './Header'

class Home extends React.Component {
	state = {}
	render() {
		return (
			<>
				<div className='container'>
					<Header />
				</div>
				<Footer />
			</>
		)
	}
}

export default Home
