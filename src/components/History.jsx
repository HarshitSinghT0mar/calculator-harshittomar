import React from 'react'

const History = ({history}) => {
  return (
    <div className='history-container'>
      <h1>History</h1>
     <ul className='history-list'>
      {history?.map((item, index)=>{
        return <li key={index}>{item}</li>
      })}
      </ul>
    </div>
  )
}

export default History
