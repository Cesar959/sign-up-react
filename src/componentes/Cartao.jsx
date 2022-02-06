import React from 'react'
import './Cartao.css'
import Avatar from './Avatar'
import Botao from './Botao'


function Cartao() {

	return (
	<div className='cartao'>
		<Avatar />
		<span className='convite'>Tina V.Invited you to join</span>
		<h1>Channel name</h1>
		<div className='caixa-informacao'>
			<h3>46k Active users 78K Total users</h3>
		</div>
		<form>
			<label>Username</label>
			<input type="text" placeholder="How do you like people to call you?" />
			<div className="termos-politica">
				<label className='checkbox'>I have read and agree to the <a hre="#">Terms of service</a> and <a hre="#">Privacy policy</a> 
					<input type="checkbox"/>
					<span className='check'></span>				
				</label>
			</div>
			<Botao />
		</form>
		<a href="#">Already have an account</a>
	</div>
	)
}


export default Cartao