import React from 'react'
import {
	collectPropsDelta,
} from 'brodash'

import UlTabRow from './components/UlTabRow'
import LiTab from './components/LiTab'


// https://css-tricks.com/better-tabs-with-round-out-borders/

interface iTabTemplate {
	key: string
	label: string
}

interface iProps {
	selectedTabIndex: number
	onTabClick: Function,
	tabs: Array<iTabTemplate>
}

interface iState {
	type: string 
	tabHeight: number,
	tabFilletRadius: number,
	borderColor: string
	borderWidth: number
	bgColorSelected: string
	bgColorUnselected: string
	pad: number
	fontColorSelected: string
	fontColorUnselected: string
}


class ReactTabs extends React.Component<iProps, iState> {

	public props: iProps
	public state: iState = {
		type: 'top',
		tabHeight: 35,
		tabFilletRadius: 8,
		borderColor: '#aaa',
		borderWidth: 1,
		bgColorSelected: '#fff',
		bgColorUnselected: '#ddd',
		pad: 10, // cushion space above or below top of tab
		fontColorSelected: '#444',
		fontColorUnselected: '#aaa',
	}

	constructor(props: iProps) {
		super(props)
	}

	componentDidMount() {
		const { state } = this
		const changedProps = collectPropsDelta(this.props, state)
		if (changedProps) {
			this.setState(changedProps)
		}
	}

	componentWillReceiveProps(nextProps) {
		const { state } = this
		const changedProps = collectPropsDelta(nextProps, state)
		if (changedProps) {
			this.setState(changedProps)
		}
	}

	renderTabs() {
		const {
			tabs,
			onTabClick,
			selectedTabIndex,
		} = this.props

		const {
			type,
			tabHeight,
			tabFilletRadius,
			borderColor,
			borderWidth,
			bgColorSelected,
			bgColorUnselected,
			fontColorSelected,
			fontColorUnselected,
			pad,
		} = this.state

		return tabs.map((temp, i) => {
			const { key, label } = temp
			return (
				<LiTab key={i}
					id={i}
					tabIndex={tabs.length - i}
					type={type}
					height={tabHeight}
					borderColor={borderColor}
					borderWidth={borderWidth}
					bgColorSelected={bgColorSelected}
					bgColorUnselected={bgColorUnselected}
					fontColorSelected={fontColorSelected}
					fontColorUnselected={fontColorUnselected}
					fRadius={tabFilletRadius}
					pad={pad}
					onClick={onTabClick}
					isSelected={selectedTabIndex === i}
				>
					{label}
				</LiTab>
			)
		})
	}

	public render() {
		const {
			type,
			tabHeight,
			tabFilletRadius,
			borderColor,
			borderWidth,
			bgColorSelected,
			bgColorUnselected,
			pad,
		} = this.state

		return (
			<div className="tab-group-container">
				<UlTabRow
					type={type}
					pad={pad}
					height={tabHeight}
					borderColor={borderColor}
					borderWidth={borderWidth}
					bgColorSelected={bgColorSelected}
					bgColorUnselected={bgColorUnselected}
					>
					{this.renderTabs()}
				</UlTabRow>
			</div>
		)
	}
}

export default ReactTabs
