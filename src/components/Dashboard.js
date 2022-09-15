import React from 'react'

function Dashboard({ data }) {
  let marketCap=0, exchangeVol=0, assets=0, exchanges=0, markets=0,  btcDomIndex=0;
  data.forEach((coinData) =>  {
    marketCap += Number(coinData.marketCapUsd);
    exchangeVol += Number(coinData.volumeUsd24Hr);
    assets += coinData.vwap24Hr;

  })
  return (
    <div className='dashboard'>
      <div className='content'>
      <p>Market Cap</p>
      {`$${(Number(marketCap)/10**9).toFixed(2)}b`}
      </div>
      <div className='content'>
      <p>Exchange Volume</p>
      {`$${(Number(exchangeVol)/10**9).toFixed(2)}b`}
      </div>
    </div>
  )
}

export default Dashboard