import { App } from "."

export default App

export const mount = (element, region ) => {
  ReactDOM.render(element, region)
}

export const unmount = ( region ) => {
  ReactDOM.unmountComponentAtNode(region)
}