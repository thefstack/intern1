import React from 'react'
import styled from 'styled-components'

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="stats">
        <h1>Stats</h1>
        <p>Ethereum total stsrt from 06Jan 2022</p>
        <p>For detailed stats:</p>

        <div className="overview-stats">
          <div className="overview">
            <p>Overview</p>
            <div className="table">
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
            </div>
          </div>
          <div className="total-stats">
            <p>Stats</p>
            <div className="table">
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* token section  */}

    <div className="stats tokens">
        <h1>Token</h1>
        <p>Platform and $ZLP index tokens</p>
        <div className="overview-stats">
          <div className="overview">
            <p>$ZOMI</p>
            <div className="table">
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
            </div>
          </div>
          <div className="total-stats">
            <p>$ZLP</p>
            <div className="table">
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
              <div className="row">
                <p>adsasd</p>
                <p>asass</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* index section  */}

      <div className="index">
        <h3>$ZLP Index Composition</h3>
        <div className="container">
          <div className="column">
            <p>TOKEN</p>
            <p>Ethereum</p>
            <p>Wrapped Bitcoin</p>
            <p>ApeCoin</p>
            <p>USD Coin</p>
          </div>
          <div className="column">
            <p>PRICE</p>
            <p>$41411</p>
            <p>$4154251</p>
            <p>$22.2</p>
            <p>$1.00</p>
          </div>
          <div className="column" id='pool'>
            <p>POOL</p>
            <p>$41</p>
            <p>$4</p>
            <p>$0</p>
            <p>$14</p>
          </div>
          <div className="column" id='weight'>
            <p>WEIGHT</p>
            <p>50%/25%</p>
            <p>50%/25%</p>
            <p>50%/25%</p>
            <p>50%/25%</p>
          </div>
          <div className="column" id='utilization'>
            <p>UTILIZATION</p>
            <p>0.00%</p>
            <p>0.00%</p>
            <p>0.00%</p>
            <p>0.00%</p>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
justify-content:center;
flex-direction:column;
align-item:center;
width:100%;
padding:50px;
gap:50px;


.stats{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.stats h1{
    font-size: 1.8rem;
    margin-bottom: 10px;
}
.stats p:nth-child(3){
    margin-bottom: 20px;
}

.overview-stats{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
}

.overview-stats .overview{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    flex: 1;
    border: 1px solid #a4a2a280;

}
.overview .table{
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.overview>p{
    border-bottom: 1px solid #a4a2a280;
    padding: 10px;
}
.table .row{
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 1px;
}
.total-stats{
    flex:1;
    justify-content: center;
    align-items: center;
    gap: 50px;
    min-width: 300px;
    border: 1px solid #a4a2a280;
}
.total-stats>p{
    padding: 10px;
    border-bottom: 1px solid #a4a2a280;
}
.total-stats .table{
    padding: 10px;
}
.table .row p:nth-child(1){
    color: #cfcdcd
}
.table .row p:nth-child(2){
    font-weight: 700;
    letter-spacing: 1px;
}
.tokens>p{
    margin-bottom: 10px;
}
.tokens .overview-stats .overview>p,.total-stats>p{
    font-size: 1.6rem;
}
.index{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #9f9e9e81;
}
.index h3{
    font-size: 1.5rem;
    border-bottom: 1px solid #9f9e9e81;
    padding: 10px;
}
.index .container{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
}
.index .container .column{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.index .container .column p:nth-child(1){
    font-size: 1.2rem;
    color: #cac6c6e7;
    margin-bottom: 10px;
}


@media(max-width:850px){
    #weight{
        display: none;
    }
  }
  
@media(max-width:650px){
    #utilization{
        display: none;
    }
  }
  @media(max-width:500px){
    #pool{
        display: none;
    }
    padding:10px
  }

`;

export default Dashboard
