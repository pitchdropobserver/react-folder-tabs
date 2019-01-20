import styled from 'styled-components'

const UlTabRow = styled.ul`
	box-sizing: border-box;
	text-align: left;
	padding: 0px ${p => p.pad}px;
	list-style: none;
	margin: 0;
	line-height: ${props => props.height - 2 * props.borderWidth}px;
	height: ${props => props.height + props.pad}px;
	overflow: hidden;
	position: relative;
	&:before {
		${getTabGroupBefore}
	}
	&:after {
		${getTabGroupAfter}
	}
`
function getTabGroupBefore(props) {
	const { type, borderWidth, borderColorSelected, pad } = props
	switch (type) {
		case 'top':
			return ''
		case 'bottom':
			return `
				position: absolute;
				content: "";
				width: 100%;
				top: 0;
				left: 0;
				z-index: 998;
				border-top: ${borderWidth}px solid ${borderColorSelected};
			`
	}
}

function getTabGroupAfter(props) {
	const { type, borderWidth, borderColorSelected, height, pad } = props
	switch (type) {
		case 'top':
			return `
				position: absolute;
				content: "";
				width: 100%;
				top: ${pad + height - borderWidth}px;
				left: 0;
				z-index: 998;
				border-bottom: ${borderWidth}px solid ${borderColorSelected};
			`
		case 'bottom':
			return `

			`
	}
}





export default UlTabRow