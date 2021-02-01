import React from 'react'
import MockPng from '../assets/mock.png'
import mockContent from '../assets/mockContent.gif'
import './Stylesheets/mock.css'

class Mock extends React.Component {
	state = {}
	render() {
		return (
			<div className='mockContainer'>
				<img className='mockMob' alt='heyStranger' src={MockPng} />
				<img className='mockContent' alt='heyStranger' src={mockContent} />
			</div>
		)
	}
}

export default Mock
