import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <div className="home-container1">
        <div className="top">
          <h1>Decentralized Perpetual Exchange</h1>
          <p>Trade BTC,ETH,AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
          <button>Launch Exchange</button>
        </div>
        <div className="calc">
          <div className="total">
            <p>Total Trending Volume</p>
            <p>$0</p>
          </div>
          <div className="total">
            <p>Open Interest</p>
            <p>#0</p>
          </div>
          <div className="total">
            <p>Total Users</p>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="home-container2">
        <div className="features">
          <div className="feature">
            <h2>Reduce Liquidation Risks</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem porro dolore, cumque corporis</p>
          </div>
          <div className="feature">
            <div className="feature">
              <h2>Save on Costs</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt corporis, qui repellat quasi impedit esse ea, natus </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature">
              <h2>Simple Swaps</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae, vel eveniet aliquam ipsum aliquid!</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1>Two tokens create our ecosystem</h1>
          <div className="buys">
            <div className="buy">
              <h1>$ZOMI</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis magni incidunt deserunt.</p>
              <p>Ethereum</p>
              <div className="btn">
                <button>Buy</button>
                <button>Read more</button>
              </div>
            </div>
            <div className="buy">
            <h1>$ZOMI</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis magni incidunt deserunt.</p>
              <p>Ethereum</p>
              <div className="btn">
                <button>Buy</button>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper=styled.section`
padding-bottom: 80px;

.home-container1{
    display: flex;
    flex-direction: column;
    padding: 80px;
}
.home-container1 .top{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 500px;
    gap: 15px;
}
.home-container1 .top h1{
    font-size: 3rem;
}
.home-container1 .top p{
    width: 70%;
}
.home-container1 .top button{
    padding: 10px 25px;
    font-size: 1.1rem;
    border: none;
    outline: none;
    background-color: #3EB489;
    color: #fff;
    border-radius: 8px;
    cursor:pointer;
}

.calc{
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
}
.calc .total{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    border-radius: 8px;
    gap: 10px;
    border: 1px solid rgba(82, 82, 82, 0.485);
}
.calc .total p:nth-child(1){
    font-size: 1.1rem;
}
.calc .total p:nth-child(2){
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 2px;
}

.home-container2{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 0 80px;
    height: 100%;
    width: 100%;
    flex-direction: column;
}
.home-container2 .features{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
}
.home-container2 .features .feature{
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100%;
    gap:10px;
    
    padding: 10px 30px;
    flex-wrap: wrap;
}

.home-container2 .bottom{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.home-container2 .bottom>h1{
    font-size: 2.3rem;
    width: 380px;
    margin-left: 50px;
}
.home-container2 .bottom .buys{
    display: flex;
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
}
.home-container2 .bottom .buys .buy{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    width: 500px;
    border: 1px solid #928d8d;
    padding: 30px 50px;
}
.home-container2 .bottom .buys .buy .btn{
    display: flex;
    gap: 30px;
}
.home-container2 .bottom .buys .buy .btn button:nth-child(1){
    padding: 10px 30px;
    background-color: #3EB489;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
}
.home-container2 .bottom .buys .buy .btn button:nth-child(2){
    padding: 10px 30px;
    background-color: #a4a2a282;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
}



@media(max-width:600px){
    .home-container2{
        padding: 0 30px;
    }
    .home-container2 .features{
        padding: 0;
    }
    .home-container2 .features .feature{
        width: 300px;
        text-align: center;
        padding: 0;
    }
}
@media(max-width:500px){
    .home-container2 .bottom .buys .buy{
        padding: 10px 30px;
    }
    .home-container2 .bottom>h1{
        font-size: 1.8rem;
        width: 350px;
        margin: 0px;
    }

}


@media(max-width:700px){
  .home-container1 .top h1{
    font-size:2rem
  }
  .home-container1 .top{
    width:380px;
  }
  .home-container1{
    padding: 50px 20px;
  }
}
@media(max-width:410px){
  .home-container1 .top h1{
    font-size:1.7rem
  }
  .home-container1 .top{
    width:320px;
  }
}
`;

export default Home
