// Import React library
import React from 'react'

import ProductList from './components/ProductList'

const App = () => {
    return (
        <div>
            <p>Hello,</p>
            <p>This is a sample application to demonstrate the use of <strong><em>TediousJS within Electron/React App</em></strong></p>

            <hr />

            <ProductList />
        </div>
    )
}

// Export the main component
export default App