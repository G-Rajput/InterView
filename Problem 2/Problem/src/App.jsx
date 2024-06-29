import { useState } from "react";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  async function handleClick() {
    const randomId = Math.floor(Math.random() * 10) + 1;
    console.log(randomId);
    try {
      setLoading(true);
      const res = await fetch(`https://swapi.dev/api/people/${randomId}`);
      const result = await res.json();
      if (result) {
        setData([...data, result]);
        console.log(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function hanledelete(index) {
    let cpyData = [...data];
    cpyData.splice(index, 1);
    console.log(cpyData);
    setData(cpyData);
  }

  // if (loading) {
  //   return <h3>Data is Loading please wait !</h3>;
  // }

  return (
    <div className="container">
      {loading && <h3>New Data is Loading please wait !</h3>}
      <div>
        <button className="add-btn" onClick={handleClick}>
          Add Record
        </button>
      </div>
      <div>Name</div>
      <div>
        {data &&
          data.map((dataItem, index) => {
            return (
              <div key={index}>
                {dataItem.name}
                <button onClick={() => hanledelete(index)}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
