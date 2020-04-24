import React from 'react'


export default function PurchaseDone() {
    const purchaseImage = "./images/purchase.jpg"
    return (
    <div className="purchase" style={{ width: "100%",backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${purchaseImage})`}}>
      <h1>Thank you for making a reservation at Sanmo Hotel of Las Vegas.</h1>
    </div>
    )
}


