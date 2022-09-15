import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useState } from 'react';

import Pagination from "react-bootstrap/Pagination";

function Table({ data }) {
  let [inAscending, setInAscending] = useState(true);
  const handleClick = () => {
    if (inAscending) {
      data.sort((a,b) => {
        return a.rank - b.rank;
      })
      setInAscending(false);
    } else {
      data.sort((a,b) =>  {
        return b.rank - a.rank;
      })
      setInAscending(true);
    }
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          Rank {inAscending ? <VscChevronUp onClick={() => {handleClick()}} /> : <VscChevronDown onClick={() => {handleClick()}} />}
        </div>
        <div class="col-3" id="name">
          Name
        </div>
        <div class="col">
          Price
        </div>
        <div class="col">
          Market Cap
        </div>
        <div class="col">
          VWAP (24Hr)
        </div>
        <div class="col">
          Supply
        </div>
        <div class="col">
          Volume (24Hr)
        </div>
        <div class="col">
          Change (24Hr)
        </div>
      </div>
      {data.map((coinData) => {
        return (
          <div class="row" key={coinData.id}>
            <div class="col">
              {coinData.rank}
            </div>
            <div class="col-3">
              {coinData.name}
              {/* {console.log(coinData.symbol.toLowerCase())} */}
              <img style={{width: "20px", height: "20px", marginRight: "auto"}} src={`https://assets.coincap.io/assets/icons/${coinData.symbol.toLowerCase()}@2x.png`} alt='icon'/>
            </div>
            <div class="col">
              {`$${Number(coinData.priceUsd).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
            </div>
            <div class="col">
              {`$${(Number(coinData.marketCapUsd)/10**9).toFixed(2)}b`}
            </div>
            <div class="col">
              {`$${Number(coinData.vwap24Hr).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
            </div>
            <div class="col">
              {`${Number(coinData.supply/10**6).toLocaleString(undefined, { maximumFractionDigits: 2 })}m`}
            </div>
            <div class="col">
              {`$${Number(coinData.volumeUsd24Hr/10**9).toLocaleString(undefined, { maximumFractionDigits: 2 })}b`}
            </div>
            <div class="col">
              {`${Number(coinData.changePercent24Hr).toFixed(2)}%`}
            </div>
          </div>
        )
      })}
      
    </div>
    // <Container>
    //   <Row>
    //     <Col sm>Rank</Col>
    //     <Col sm>Name</Col>
    //     <Col sm>Price</Col>
    //     <Col sm>Market Cap</Col>
    //     <Col sm>VWAP (24Hr)</Col>
    //     <Col sm>Supply</Col>
    //     <Col sm>Volume (24Hr)</Col>
    //     <Col sm>Change (24Hr)</Col>
        
    //   </Row>
    //   {data.map((coinData) => {
    //     return (
    //       <Accordion defaultActiveKey="0">
    //         <Accordion.Item eventKey="0">
    //           <Accordion.Header>{coinData.name}</Accordion.Header>
    //           <Accordion.Body>
    //             <Row key={coinData.id}>
    //               <Col>{coinData.rank}</Col>
    //               <Col>{coinData.name}</Col>
    //               <Col>{`$${Number(coinData.priceUsd).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</Col>
    //               <Col>{`$${(Number(coinData.marketCapUsd)/10**9).toFixed(2)}b`}</Col>
    //               <Col>{`$${Number(coinData.vwap24Hr).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</Col>
    //               <Col>{`${Number(coinData.supply/10**6).toLocaleString(undefined, { maximumFractionDigits: 2 })}m`}</Col>
    //               <Col>{`$${Number(coinData.volumeUsd24Hr/10**9).toLocaleString(undefined, { maximumFractionDigits: 2 })}b`}</Col>
    //               <Col>{`${Number(coinData.changePercent24Hr).toFixed(2)}%`}</Col>
    //               <Col>
    //                 <Button variant="link">Link</Button>
    //               </Col>
    //             </Row>
    //           </Accordion.Body>
    //         </Accordion.Item>
    //       </Accordion>
    //       // <Row key ={coinData.id}>
    //       //     <Col>{coinData.rank}</Col>
    //       //     <Col>{coinData.rank}</Col>
    //       //     <Col>{coinData.rank}</Col>
    //       //     <Col>{coinData.rank}</Col>
    //       //     <Col>{coinData.rank}</Col>
    //       //     <Col>{coinData.rank}</Col>
    //       //     <Col>{coinData.rank}</Col>
    //       //     <Col>{coinData.rank}</Col>
    //       // </Row>
    //       // <tr key={coinData.id}>
    //       //     <td>{coinData.rank}</td>
    //       //     <td>{coinData.name}</td>
    //       //     <td>{`$${Number(coinData.priceUsd).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</td>
    //       //     <td>{`$${(Number(coinData.marketCapUsd)/10**9).toFixed(2)}b`}</td>
    //       //     <td>{`$${Number(coinData.vwap24Hr).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</td>
    //       //     <td>{`${Number(coinData.supply/10**6).toLocaleString(undefined, { maximumFractionDigits: 2 })}m`}</td>
    //       //     <td>{`$${Number(coinData.volumeUsd24Hr/10**9).toLocaleString(undefined, { maximumFractionDigits: 2 })}b`}</td>
    //       //     <td>{`${Number(coinData.changePercent24Hr).toFixed(2)}%`}</td>
    //       // </tr>
    //     );
    //   })}

      /* <table>
            <tbody>
            <tr>
                <th style={tableCellStyle}>Rank</th>
                <th style={tableCellStyle}>Name</th>
                <th style={tableCellStyle}>Price</th>
                <th style={tableCellStyle}>Market Cap</th>
                <th style={tableCellStyle}>VWAP (24Hr)</th>
                <th style={tableCellStyle}>Supply</th>
                <th style={tableCellStyle}>Volume (24Hr)</th>
                <th style={tableCellStyle}>Change (24Hr)</th>
            </tr>
            {data.map((coinData) => {
                return (
                    <Row key ={coinData.id}>
                        <Col>{coinData.rank}</Col>
                        <Col>{coinData.rank}</Col>
                        <Col>{coinData.rank}</Col>
                        <Col>{coinData.rank}</Col>
                        <Col>{coinData.rank}</Col>
                        <Col>{coinData.rank}</Col>
                        <Col>{coinData.rank}</Col>
                        <Col>{coinData.rank}</Col>
                    </Row>
                    // <tr key={coinData.id}>
                    //     <td>{coinData.rank}</td>
                    //     <td>{coinData.name}</td>
                    //     <td>{`$${Number(coinData.priceUsd).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</td>
                    //     <td>{`$${(Number(coinData.marketCapUsd)/10**9).toFixed(2)}b`}</td>
                    //     <td>{`$${Number(coinData.vwap24Hr).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</td>
                    //     <td>{`${Number(coinData.supply/10**6).toLocaleString(undefined, { maximumFractionDigits: 2 })}m`}</td>
                    //     <td>{`$${Number(coinData.volumeUsd24Hr/10**9).toLocaleString(undefined, { maximumFractionDigits: 2 })}b`}</td>
                    //     <td>{`${Number(coinData.changePercent24Hr).toFixed(2)}%`}</td>
                    // </tr>
                )
            })}
            </tbody>
        </table> */
    // </Container>
  );
}

export default Table;
