import React from 'react'
import ReactDOM from 'react-dom'

console.log(1)

class App extends React.Component{
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