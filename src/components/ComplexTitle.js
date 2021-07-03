import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({title}) => {
	return (
		<Wrapper>
			<h1>{title}</h1>
			<div className="underline"></div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	h1 {
		text-transform: capitalize;
		text-align: center;
	}
	.underline {
		width: 5rem;
		height: .25rem;
		background: #645cff;
		margin: 0 auto;
	}
`

export default ComplexTitle
