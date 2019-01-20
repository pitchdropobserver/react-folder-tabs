import React from 'react'
import ReactDom from 'react-dom'
import ReactTabs from '../../src' 
import './styles.css'

const TAB_TEMPLATES = [
	{ value: '1', label: 'Eeny' },
	{ value: '2', label: 'Meeny' },
	{ value: '3', label: 'Miny' },
	{ value: '4', label: 'Moe' },
]
const RADIO_BTN_TEMPLATES = [
	{ value: 'top', label: 'tabs on top' },
	{ value: 'bottom', label: 'tabs at bottom' },
	// { value: 'left', label: 'Left' },
	// { value: 'right', label: 'Right' },
]

const COLORS = {
	selected: 'rgb(188,220,212)',
	unselected: 'rgb(175,214,205)',
	// border: 'rgb(180,180,180)',
	borderSelected: 'rgb(255,255,255)',
	borderUnselected: 'rgb(208,240,232)',
}

const RadioBtn = ({
	label,
	value,
	onClick,
	isSelected,
}) => (
	<div className="radio-btn-container">
		<input type="radio" id={value} value={value} checked={isSelected} onChange={onClick}/>
		<label htmlFor={value}>{label}</label>
	</div>
)


class App extends React.Component {
	constructor(props) {
		super(props)
		this.handleRadioBtnClick = this.handleRadioBtnClick.bind(this)
		this.handleTabClick = this.handleTabClick.bind(this)
		this.state = { 
			selectedRadioBtnId: RADIO_BTN_TEMPLATES[0].value,
			selectedTabId: TAB_TEMPLATES[0].value,
		}
	}

	handleRadioBtnClick = ({ target }) => this.setState({ selectedRadioBtnId: target.id })

	handleTabClick = (val) => this.setState({ selectedTabId: val })

	renderViewSourceLink(){
		return (
			<a className="source-link" href="https://github.com/pitchdropobserver/react-tabs/blob/master/examples/test/index.js">
				view source
			</a>
		)
	}

	renderRadioBtns(){
		const { selectedRadioBtnId } = this.state
		return RADIO_BTN_TEMPLATES.map(({ value, label }) => (
			<RadioBtn
				key={value}
				label={label}
				value={value}
				onClick={this.handleRadioBtnClick}
				isSelected={value === selectedRadioBtnId}
			/>
		))	
	}
	
	renderFolderContentAboveTabs(){
		const { selectedRadioBtnId } = this.state
		return selectedRadioBtnId === 'bottom' ? (
			<div style={{
					height: '100%',
					background: COLORS.selected,
					border: `1px solid ${COLORS.borderSelected}`,
					borderBottom: 'none',
				}}
				/>
		) : null		
	}
	
	renderFolderContentBelowTabs(){
		const { selectedRadioBtnId } = this.state
		return selectedRadioBtnId === 'top' ? (
			<div style={{
					height: '100%',
					background: COLORS.selected,
					border: `1px solid ${COLORS.borderSelected}`,
					borderTop: 'none',
				}}
				/>
		) : null
	}

	render(){
		const {
			selectedRadioBtnId,
			selectedTabId,
		} = this.state
		return (
			<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					height: '100%',
				}}>
				<div style={{
						width: '500px',
						marginBottom: '10px',
					}}>
					{this.renderRadioBtns()}				
					{this.renderViewSourceLink()}
				</div>
				<div style={{
						width: '500px',
						height: '300px',
						font: '14px monospace',
					}}>
					{this.renderFolderContentAboveTabs()}
					<ReactTabs
						type={selectedRadioBtnId}
						className="react-tabs-container"
						onTabSelect={this.handleTabClick}
						selectedTabId={selectedTabId}
						tabBorderColorSelected={COLORS.borderSelected}
						tabBorderColorUnselected={COLORS.borderUnselected}
						tabBgColorSelected={COLORS.selected}
						tabBgColorUnselected={COLORS.unselected}
						fontColorSelected={COLORS.borderSelected}
						fontColorUnselected={COLORS.borderUnselected}
						tabs={TAB_TEMPLATES}
						/>
					{this.renderFolderContentBelowTabs()}
				</div>
			</div>
		)		
	}
}

ReactDom.render(
	<App />,
	document.getElementById('root')
)
