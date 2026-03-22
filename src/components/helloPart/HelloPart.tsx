import './helloPart.scss'

import myPhoto from '../helloPart/img/myPhoto.jpg'

const HelloPart = () => {
	return (
		<div className="container">
			<div className="hello">
				<h1 className="hello__title">
					Frontend Developer<br/> <span className='nickname'>Seqvail</span> <br/>| React, TypeScript, Next.js
				</h1>
				<div className="hello__border">
					<img src={myPhoto} alt="myPhoto" className="hello__photo"/>
				</div>
			</div>
		</div>
	)
}

export default HelloPart