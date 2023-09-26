import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../utilities/Card'

export const ProductDetail = () => {
    const params = useParams()
  return (
   <Card>
     <div>
        <h1 className=' text-lg uppercase font-semibold font-poppins'>Product Details</h1>
        {params.productId}
    </div>
   </Card>
  )
}
