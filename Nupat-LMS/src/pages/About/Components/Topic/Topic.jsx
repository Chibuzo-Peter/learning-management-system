import React from 'react'
import icon from '../../../../assets/topic.svg'

const Topic = () => {
  return (
    <div className=' flex ml-[7%] items-center mb-4'>
      <div className=' p-[10px] border-2 rounded-md border-primary mr-1'><img src={icon} alt="icon" style={{width:'35px'}} /></div>
      <div className=' p-[12px] text-2xl border-2 rounded-md border-primary w-5/6 pl-10'>This is the topic for This Lesson</div>
    </div>
  )
}

export default Topic
