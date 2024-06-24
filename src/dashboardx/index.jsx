import React from 'react'
import AddResume from './components/AddResume'

const DashBoardx = () => {
  return (
    <div className='p-10 md:px-20'>
      <h2 className='font bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next job with Niko resume builder</p>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
<AddResume/>
</div>
    </div>
  )
}

export default DashBoardx