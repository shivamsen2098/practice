import React from 'react'

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App


function MyComponent() {
  return <h1>Hello, I am Functional Component</h1>;
}
