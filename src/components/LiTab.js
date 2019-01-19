import styled from 'styled-components'

const LiTab = styled.li`
	outline: none;
	${getTab}
	background: ${p => p.isSelected ? p.bgColorSelected : p.bgColorUnselected};
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	display: inline-block;
	position:relative;
	z-index:  ${p => p.isSelected ? 999 : p.tabIndex};
	color:  ${p => p.isSelected ? p.fontColorSelected : p.fontColorUnselected};
	padding: 0 30px;
	cursor: pointer;
	&:before {
		${getTabBefore}
	};
	&:after {
		${getTabAfter}
	};
`

export function getTab(props) {
	const {
		type,
		isSelected,
		fRadius,
		bgColorSelected,
		borderWidth,
		borderColor,
		pad,
	} = props

	switch (type) {
		case 'top':
			return `
				margin: ${pad}px -${fRadius / 3}px 0px -${fRadius / 3}px;
				border: ${borderWidth}px solid ${borderColor};
				border-bottom-color: ${isSelected ? bgColorSelected : 'none'};
				border-top-left-radius: ${fRadius}px;
				border-top-right-radius: ${fRadius}px;
			`
		case 'bottom':
			return `
				margin: 0px -${fRadius / 3}px 0px -${fRadius / 3}px;
				border: ${borderWidth}px solid ${borderColor};
				border-top-color: ${isSelected ? bgColorSelected : 'none'};
				border-bottom-left-radius: ${fRadius}px;
				border-bottom-right-radius: ${fRadius}px;
			`
	}
}


function getTabBefore(props) {
	const {
		type,
		fRadius,
		isSelected,
		bgColorSelected,
		bgColorUnselected,
		borderWidth,
		borderColor,
		height,
	} = props
	const commonProps = `
		border-style: solid;
		border-color: ${borderColor};
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
				left: -${fRadius}px;
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
				left: -${fRadius}px;
				border-top-right-radius: ${fRadius}px;
				border-top-width: ${borderWidth}px;
				border-right-width: ${borderWidth}px;
				border-bottom-width: 0px;
				border-left-width: 0px;
				box-shadow: ${fRadius / 3}px -${fRadius / 3}px 0 ${isSelected ? bgColorSelected : bgColorUnselected};
			`
	}
}

function getTabAfter(props) {
	const {
		type,
		fRadius,
		isSelected,
		bgColorSelected,
		bgColorUnselected,
		borderWidth,
		borderColor,
		height,
	} = props
	const commonProps = `
		border-style: solid;
		border-color: ${borderColor};
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
				right: -${fRadius}px;
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
				right: -${fRadius}px;
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