import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MyNavbar from './components/MyNavbar';
import Table from './components/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dashboard from './components/Dashboard';
// import Col from 'react-bootstrap/Col';

function App() {
  let [data, setData] = useState([]);
  let [perPage, setPerPage] = useState(50);
  let [showAllData, setShowAllData] = useState(false)
  const url = 'https://api.coincap.io/v2/assets';

  useEffect(() => {
    (async function (url) {
      await axios.get(url)
        .then((res) => {
          // console.log(res.data.data)
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
    })(url);

  },[])

  const handleClick = () => {
    if (!showAllData) {
      setShowAllData(true);
    } else {
      setShowAllData(false);
    }
  }

  return (
    <>
      <MyNavbar />
      {data.length ? <Dashboard data={data}/> : null}
       
        {data.length ? (
          showAllData ? (
            <Table data={data}/>
          ) : (
            <Table data={data.slice(0,perPage)}/>
          )
        ) : (
          <>Loading</>
        )}
        {showAllData ? (<button className='btn' onClick={() => {handleClick()}}>Show less</button>) : (
          <div id='btn'>
          <button className='btn' onClick={() => {handleClick()}}>View More</button>
          </div>
        )}
        
    </>
  
  );
}

// function App() {
//   let [data, setData] = useState([]);
//   const url = 'https://api.coincap.io/v2/assets';

//   useEffect(() => {
//     (async function (url) {
//       await axios.get(url)
//         .then((res) => {
//           // console.log(res.data.data)
//           setData(res.data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//     })(url);

//   },[])
  
//   // console.log(data);

//   return (
//     <div className="App">
//       <MyNavbar />
//       {data.length ? (<div id='table'>
//         <Table data={data}/>
//       </div>) : (<>Loading</>)
//       }
//     </div>
//   );
// }

export default App;
