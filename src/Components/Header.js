import React from 'react'
import Mock from './Mock'
import './Stylesheets/header.css'
import { BsDownload } from 'react-icons/bs'
import { MdVerifiedUser } from 'react-icons/md'
import './Stylesheets/download.css'
import Logo from '../assets/logo.png'

class Header extends React.Component {
	render() {
		return (
			<>
				<h1 className='text-center' style={{ marginTop: 20, marginBottom: 20 }}>
					Hey, Stranger!{' '}
					<span role='img' aria-label='aria-label'>
						{' '}
						👏{' '}
					</span>
				</h1>
				<div className='container text-center'>
					<div className='row'>
						<div className='col-12 col-md-6 download-container'>
							<div>
								<img alt='heyStranger' src={Logo} className='logo' />
								<a
									className='btn btn-primary'
									download
									href=' https://drive.google.com/uc?export=view&id=1NNiAFneEGDxDCDEnZZdX1ls0xxhMIeed'
								>
									Download <BsDownload />
								</a>
								<p className='security'>
									<MdVerifiedUser style={{ marginRight: 5 }} /> Security
									Verified
								</p>
								<h4 style={{ marginTop: 15 }}>Download it Now</h4>
								<p>Descover the Strangers Story and secret NOW</p>
							</div>
						</div>
						<div className='col-12 col-md-6'>
							<Mock />
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Header
