import React from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component {
	render(){
		return <div>Hello World!</div>
	}
}
ReactDOM.render(
	//React element
	<App />,
	// where to render element to
	document.getElementById('app')
)