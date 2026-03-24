import './helloPart.scss'

import Typewriter from 'typewriter-effect'

import myPhoto from '../helloPart/img/myPhoto.jpg'

const HelloPart = () => {
	return (
		<div className="container">
			<div id='about' className="hello">
				<h1 className="hello__title">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('Frontend Developer <br/>')
								.pauseFor(500)
								.typeString('<span class="hello__nickname">Seqvail<span/><br/>')
								.typeString('| React, TypeScript, Next.js')
								.start()
						}}
						options={{
							autoStart: true,
							loop: false,
							delay: 50,
							cursor: '|'
						}}
					/>
				</h1>
				<div className="hello__border">
					<img src={myPhoto} alt="myPhoto" className="hello__photo"/>
				</div>
			</div>
		</div>
	)
}

export default HelloPart