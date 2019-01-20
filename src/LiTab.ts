import styled from 'styled-components'

interface iPropsLi {
	type: string
	fRadius: number
	tabIndex: number
	isSelected: boolean
	bgColorSelected: string
	bgColorUnselected: string
	borderWidth: number
	borderColorSelected: string
	borderColorUnselected: string
	fontColorSelected: string
	fontColorUnselected: string
	height: number
	pad: number
}

const LiTab = styled.li`
	outline: none;
	${getTab}
	background: ${(p: iPropsLi):string => p.isSelected ? p.bgColorSelected : p.bgColorUnselected};
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	display: inline-block;
	position: relative;
	z-index: ${(p: iPropsLi):number => p.isSelected ? 999 : p.tabIndex};
	color: ${(p: iPropsLi):string => p.isSelected ? p.fontColorSelected : p.fontColorUnselected};
	padding: 0 30px;
	user-select: none;
	cursor: pointer;
	&:hover {
		${getTabOnHover}
	};
	&:before {
		${getTabBefore}
	};
	&:after {
		${getTabAfter}
	};
`

function getTab(props: iPropsLi): string {
	const {
		type,
		isSelected,
		fRadius,
		bgColorSelected,
		borderWidth,
		borderColorSelected, 
		borderColorUnselected,
		pad,
	} = props

	switch (type) {
		case 'top':
			return `
				margin: ${pad}px -${fRadius / 3}px 0px -${fRadius / 3}px;
				border: ${borderWidth}px solid ${isSelected ? borderColorSelected : borderColorUnselected};
				border-bottom-color: ${isSelected ? bgColorSelected : 'none'};
				border-top-left-radius: ${fRadius}px;
				border-top-right-radius: ${fRadius}px;
			`
		case 'bottom':
			return `
				margin: 0px -${fRadius / 3}px 0px -${fRadius / 3}px;
				border: ${borderWidth}px solid ${isSelected ? borderColorSelected : borderColorUnselected};
				border-top-color: ${isSelected ? bgColorSelected : 'none'};
				border-bottom-left-radius: ${fRadius}px;
				border-bottom-right-radius: ${fRadius}px;
			`
		default: 
			return ''
	}
}

function getTabOnHover(props: iPropsLi): string {
	return `
		color: ${props.fontColorSelected};
		background: ${props.bgColorSelected};
	`
}

function getTabBefore(props: iPropsLi): string {
	const {
		type,
		fRadius,
		isSelected,
		bgColorSelected,
		bgColorUnselected,
		borderWidth,
		borderColorSelected,
		borderColorUnselected,
		height,
	} = props
	const commonProps = `
		border-style: solid;
		border-color: ${isSelected ? borderColorSelected : borderColorUnselected};
		content: "";
		position: absolute;
		width: ${fRadius}px;
		height: ${fRadius}px;
	`
	switch (type) {
		case 'top':
			return `
				${commonProps}
				top: ${height - fRadius - borderWidth}px;
				left: -${fRadius + 1}px;
				border-bottom-right-radius: ${fRadius}px;
				border-bottom-width: ${borderWidth}px;
				border-right-width: ${borderWidth}px;
				border-top-width: 0px;
				border-left-width: 0px;
				box-shadow: ${fRadius / 3}px ${fRadius / 3}px 0 ${isSelected ? bgColorSelected : bgColorUnselected};
			`
		case 'bottom':
			return `
				${commonProps}
				top: -${borderWidth}px;
				left: -${fRadius + 1}px;
				border-top-right-radius: ${fRadius}px;
				border-top-width: ${borderWidth}px;
				border-right-width: ${borderWidth}px;
				border-bottom-width: 0px;
				border-left-width: 0px;
				box-shadow: ${fRadius / 3}px -${fRadius / 3}px 0 ${isSelected ? bgColorSelected : bgColorUnselected};
			`
		default:
			return ''
	}
}

function getTabAfter(props: iPropsLi) {
	const {
		type,
		fRadius,
		isSelected,
		bgColorSelected,
		bgColorUnselected,
		borderWidth,
		borderColorSelected,
		borderColorUnselected,
		height,
	} = props
	const commonProps = `
		border-style: solid;
		border-color: ${isSelected ? borderColorSelected : borderColorUnselected};
		content: "";
		position: absolute;
		width: ${fRadius}px;
		height: ${fRadius}px;
	`
	switch (type) {
		case 'top':
			return `
				${commonProps}
				top: ${height - fRadius - borderWidth}px;
				right: -${fRadius + 1}px;
				border-bottom-left-radius: ${fRadius}px;
				border-bottom-width: ${borderWidth}px;
				border-right-width: 0px;
				border-top-width: 0px;
				border-left-width: ${borderWidth}px;
				box-shadow: -${fRadius / 3}px ${fRadius / 3}px 0 ${isSelected ? bgColorSelected : bgColorUnselected};
			`
		case 'bottom':
			return `
				${commonProps}
				top: -${borderWidth}px;
				right: -${fRadius + 1}px;
				border-top-left-radius: ${fRadius}px;
				border-top-width: ${borderWidth}px;
				border-right-width: 0px;
				border-bottom-width: 0px;
				border-left-width: ${borderWidth}px;
				box-shadow: -${fRadius / 3}px -${fRadius / 3}px 0 ${isSelected ? bgColorSelected : bgColorUnselected};
			`
	}
}

export default LiTab