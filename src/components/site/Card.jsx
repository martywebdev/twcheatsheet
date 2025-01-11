import React from 'react'

const Card = ({icon}) => {
  return (
    <div className='p-4 pb-10 border-b md:border-b-0 rounded-t-2xl md:border-r md:border-slate-200 '> 
      <div className='flex justify-center my-5'>{icon}</div>
      <h3 className='text-xl font-semibold text-center my-2'>Heading</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus commodi suscipit placeat iusto odio, modi ea sapiente, nihil dolorem unde aspernatur atque nemo eligendi mollitia autem asperiores, provident quisquam eum reiciendis doloribus magnam sed ipsa quae. Excepturi molestias iste culpa nulla corrupti doloribus impedit ratione libero aliquid ut! Recusandae.</p>
    </div>
  )
}

export default Card