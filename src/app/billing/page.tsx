import Pricing from '@/shared/component/Pricing'
import React from 'react'
import EmbeddedCheckoutButton from './EmbeddedCheckoutButton'

 export default function Billing() {
  return (
    <div className="flex justify-center items-center">
        <EmbeddedCheckoutButton priceId={"price_1P1o4vSEt9SqRWQWwGkDA3se"} />
    </div>
  )
}
