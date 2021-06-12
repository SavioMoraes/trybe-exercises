import React from 'react'

class Hello extends React.Component {
  
  render() {
    
function helloJSX () {
  return 'Hello, JSX';
}
    
    return (
      <div>
        { helloJSX() }
      </div>
    )
  }
}

export default Hello;