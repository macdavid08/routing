import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../utilities/Card'

const PRODUCTS = [
  {id:'p1', title:'Product 1'},
  {id:'p2', title:'Product 2'},
  {id:'p3', title:'Product 3'},
]

export const ProductPage = () => {
  return (
    <Card>
        <div className=' font-poppins text-lg font-semibold uppercase '>Product Page</div>
        <ul>
          {PRODUCTS.map((prod)=> {
            return (<li key={prod.id}><Link to={`/product/${prod.id}`}>{prod.title}</Link></li>)
          })}
        </ul>
    </Card>
  )
}
