import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-4'>
			<img alt='robots' src={`https://robohash.org/${id}?set=set4`} height="200" width="200" />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;