import styled from 'styled-components'


interface iPropsUl {
	type: string
	borderWidth: number
	borderColorSelected: string
	height: number
	pad: number
}


const UlTabRow = styled.ul`
	box-sizing: border-box;
	text-align: left;
	padding: 0px ${(p: iPropsUl): number => p.pad}px;
	list-style: none;
	margin: 0;
	line-height: ${(p: iPropsUl): number => p.height - 2 * p.borderWidth}px;
	height: ${(p: iPropsUl): number => p.height + p.pad}px;
	overflow: hidden;
	position: relative;
	&:before {
		${getTabGroupBefore}
	}
	&:after {
		${getTabGroupAfter}
	}
`

function getTabGroupBefore(props: iPropsUl): string {
	const { type, borderWidth, borderColorSelected } = props
	switch (type) {
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
		default:
			return ''
	}
}

function getTabGroupAfter(props: iPropsUl): string {
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
		default:
			return ''
	}
}

export default UlTabRow