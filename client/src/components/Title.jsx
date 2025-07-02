import React from 'react'

const Title = ({text1,text2,para}) => {
  return (
    <div className='text-center'>
    <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
      {text1} {text2}
    </h1>
    <p className="text-lg text-gray-600 mb-8">
       {para}
      </p>
    </div>
  )
}

export default Title
