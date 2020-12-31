import React from 'react'

const List = (props) => {
	const { people } = props
	return (
		<>
			{people.map(person => (
				<p key={person.id}>{person.name}</p>

			))}

		</>
	)
}
export default List