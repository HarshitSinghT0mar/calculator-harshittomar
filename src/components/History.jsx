import React from 'react'

const History = ({history,setHistory}) => {
  const clearHistory=()=>{
    setHistory([])
  }
  return (
    <div className='history-container'>
    <div className='history-header'>
      <h3>History</h3>
      <button onClick={clearHistory} className='clear-history-btn'>clear history</button>
      </div>
     <ul className='history-list'>
      {history?.map((item, index)=>{
        return <li key={index}>{item}</li>
      })}
      </ul>
    </div>
  )
}

export default History
