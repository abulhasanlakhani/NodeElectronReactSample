import React, { useState } from 'react'
import { ipcRenderer as ipc } from 'electron'

interface Product {
    Name: string,
    ProductNumber: string
}
let productsFromDB: Product[] = []

const ProductList = () => {
    const [show, showProducts] = useState(false)

    const getProducts = () => {
        ipc.invoke('getproducts').then((products) => {
            productsFromDB = products
            showProducts(true)
        })
    }

    if (!productsFromDB.length) {
        getProducts()
    }

    return show && (
        <>
            <h1>Products:</h1>
            {
                productsFromDB.map((p, index) =>
                    <div key={index}>{p.Name} - {p.ProductNumber}</div>
                )
            }
        </>
    )
}

export default ProductList