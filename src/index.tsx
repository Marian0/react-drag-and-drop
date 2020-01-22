import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import Upload from './components/upload/upload.component'

console.info(`⚛️ ${React.version}`)

const App = () => (
  <>
    <GlobalStyle />
    <Upload />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
