import React from "react";

const History = ({ history, setHistory,setShowHistory }) => {
  const clearHistory = () => {
    setHistory([]);
  };

  const deleteHistoryItem = (id) => {
    const remainHistory = history.filter((_, index) => {
      return index !== id;
    });
    setHistory(remainHistory);
  };
  return (
    <div className="history-container">
      <div className="history-header">
        <h3>History</h3>
        <button onClick={clearHistory} className="clear-history-btn">
          clear history
        </button>
        <span className="hide-history" onClick={()=>setShowHistory(false)}>X</span>
      </div>
      <ul className="history-list">
        {history?.map((item, index) => {
          return (
            <div key={index}>
              {item}{" "}
              <button onClick={() => deleteHistoryItem(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
