import React from 'react'
import {
	collectPropsDelta,
} from 'brodash'

import UlTabRow from './components/UlTabRow'
import LiTab from './components/LiTab'


interface iTabTemplate {
	value: string
	label: string
}

interface iProps {
	selectedTabId: string
	onTabSelect: Function,
	className: string
	tabs: Array<iTabTemplate>
}

interface iState {
	type: string 
	tabHeight: number
	tabFilletRadius: number
	tabBorderColorSelected: string
	tabBorderColorUnselected: string
	borderWidth: number
	tabBgColorSelected: string
	tabBgColorUnselected: string
	pad: number
	fontColorSelected: string
	fontColorUnselected: string
}


class ReactTabs extends React.Component<iProps, iState> {

	public readonly props: iProps
	public readonly state: iState = {
		type: 'top',
		tabHeight: 35,
		tabFilletRadius: 7,
		tabBorderColorSelected: '#aaa',
		tabBorderColorUnselected: '#aaa',
		borderWidth: 1,
		tabBgColorSelected: '#fff',
		tabBgColorUnselected: '#ddd',
		pad: 10, // cushion space above or below top of tab
		fontColorSelected: '#444',
		fontColorUnselected: '#aaa',
	}

	constructor(props: iProps) {
		super(props)
		this.handleTabClick = this.handleTabClick.bind(this)
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

	private handleTabClick(e: React.MouseEvent<HTMLUListElement>){
		const { onTabSelect } = this.props
		onTabSelect(e.currentTarget.id)
	}

	private renderTabs() {
		const {
			tabs,
			selectedTabId,
		} = this.props

		const {
			type,
			tabHeight,
			tabFilletRadius,
			tabBorderColorSelected,
			tabBorderColorUnselected,
			borderWidth,
			tabBgColorSelected,
			tabBgColorUnselected,
			fontColorSelected,
			fontColorUnselected,
			pad,
		} = this.state

		return tabs.map((temp, i) => {
			const { value, label } = temp
			return (
				<LiTab 
					key={i}
					id={value}
					tabIndex={tabs.length - i}
					type={type}
					height={tabHeight}
					borderColorSelected={tabBorderColorSelected}
					borderColorUnselected={tabBorderColorUnselected}
					borderWidth={borderWidth}
					bgColorSelected={tabBgColorSelected}
					bgColorUnselected={tabBgColorUnselected}
					fontColorSelected={fontColorSelected}
					fontColorUnselected={fontColorUnselected}
					fRadius={tabFilletRadius}
					pad={pad}
					onClick={this.handleTabClick}
					isSelected={selectedTabId === value}
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
			tabBorderColorSelected,
			tabBorderColorUnselected,
			borderWidth,
			tabBgColorSelected,
			tabBgColorUnselected,
			pad,
		} = this.state
		const {
			className,
		} = this.props

		return (
			<div className={className}>
				<UlTabRow
					type={type}
					pad={pad}
					height={tabHeight}
					borderColorSelected={tabBorderColorSelected}
					borderColorUnselected={tabBorderColorUnselected}
					borderWidth={borderWidth}
					bgColorSelected={tabBgColorSelected}
					bgColorUnselected={tabBgColorUnselected}
					>
					{this.renderTabs()}
				</UlTabRow>
			</div>
		)
	}
}

export default ReactTabs
