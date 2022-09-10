import React from 'react'

function Error404() {
  return (
    <div className='h-screen bg-slate-600 text-white '>
      <div className='items-center h-1/2 justify-center flex flex-col'>
        <h1 className='text-7xl'>404</h1>
        <h2 className='text-4xl mb-14'>Page Not Found</h2>
        <a href="/" className='hover:bg-slate-800 p-3 rounded-xl hover:underline'>Back to Home</a>
      </div>
    </div>
  )
}

export default Error404;
