import styled from 'styled-components'

const UlTabRow = styled.ul`
	background: ${p => p.bgColorUnselected};
	box-sizing: border-box;
	text-align: left;
	padding: 0px ${p => p.pad}px;
	list-style: none;
	margin: 0;
	line-height: ${props => props.height - 2 * props.borderWidth}px;
	height: ${props => props.height + props.pad}px;
	overflow: hidden;
	font-size: 12px;
	position: relative;
	&:before {
		${getTabGroupBefore}
	}
	&:after {
		${getTabGroupAfter}
	}
`
function getTabGroupBefore(props) {
	const { type, borderWidth, borderColor, pad } = props
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
				border-top: ${borderWidth}px solid ${borderColor};
			`
	}
}

function getTabGroupAfter(props) {
	const { type, borderWidth, borderColor, height, pad } = props
	switch (type) {
		case 'top':
			return `
				position: absolute;
				content: "";
				width: 100%;
				top: ${pad + height - borderWidth}px;
				left: 0;
				z-index: 998;
				border-bottom: ${borderWidth}px solid ${borderColor};
			`
		case 'bottom':
			return `

			`
	}
}





export default UlTabRow