import React from 'react'
import ReactDom from 'react-dom'
import MyComponent from '../../src' 

class App extends React.Component {
	render(){
		return (
			<div>
				<h1>HAHAH</h1>
				<MyComponent/>
			</div>
		)		
	}
}

ReactDom.render(
	<App />,
	document.getElementById('root')
)
