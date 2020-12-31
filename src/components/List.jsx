import React from 'react'

const List = (props) => {
	const { people } = props
	return (
		<>
			{people.map(person => {
				const {id, name, image, age} = person
				return (
				<article key={id} className="person">
					<img src={image} alt={name} />
					<div>
					{/* <p key={id}>{name}</p> */}
						<h4>{name}</h4>
						<p>{age}</p>
					</div>
				</article>
				)
			})}

		</>
	)
}
export default List