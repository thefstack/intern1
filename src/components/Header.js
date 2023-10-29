import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

    const [menu,setMenu]=useState(false);

    useEffect(()=>{
        console.log(menu)
    },[menu])
  return (
    <Wrapper>
      <div className="header">
      
      <MenuIcon className='menu-icon' style={{fontSize:"2rem", cursor:"pointer"}} onClick={()=>{setMenu(true)}}/>
        <div className="logo">
            <img src={Logo} alt="failed to render logo" />
            <h1>Romi Finance</h1>
        </div>
        {/* setting menu to false when clicked on the empty container */}
        {menu ? <div onClick={()=>{setMenu(false)}} id="menu-close-container"></div> : ""}
        {menu ? <div className="hidden-nav">
                <ArrowBackIcon onClick={()=>{setMenu(false)}} id='menu-close'/>

                <NavLink className="link" to="/" onClick={()=>{setMenu(false)}}>Home</NavLink>
                <NavLink className="link" to="/dashboard" onClick={()=>{setMenu(false)}}>Dashboard</NavLink>
                <NavLink className="link" to="/nft" onClick={()=>{setMenu(false)}}>NFT</NavLink>
                <NavLink className="link" to="/earn" onClick={()=>{setMenu(false)}}>Earn</NavLink>
                <NavLink className="link" to="/buy" onClick={()=>{setMenu(false)}}>Buy</NavLink>
                <NavLink className="link" to="/referals" onClick={()=>{setMenu(false)}}>Referrals</NavLink>
                <NavLink className="link" to="/ecosystem" onClick={()=>{setMenu(false)}}>Ecosystem</NavLink>
                <NavLink className="link" to="/about" onClick={()=>{setMenu(false)}}>About</NavLink>
                <div className="login">
                <button>Trade</button>
                <button><AccountBalanceWalletIcon className='wallet-icon'/>Connect Wallet</button>
            </div>
            </div>:""}
        <div className="nav-container">
            <div className="nav">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/dashboard">Dashboard</NavLink>
                <NavLink className="link" to="/nft">NFT</NavLink>
                <NavLink className="link" to="/earn">Earn</NavLink>
                <NavLink className="link" to="/buy">Buy</NavLink>
                <NavLink className="link" to="/referals">Referrals</NavLink>
                <NavLink className="link" to="/ecosystem">Ecosystem</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
            </div>
            <div className="login">
                <button>Trade</button>
                <button><AccountBalanceWalletIcon className='wallet-icon'/>Connect Wallet</button>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: #000;
    color:#fff;
    height:80px;
    border-bottom: 0.5px solid #4e4e4e;
}
.header .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 75px;
    width: 230px;
    gap: 50px;
    flex-wrap:wrap;
}
.header .logo img{
    width: 80px;
    position: absolute;
    left: 15px;
}

.nav-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-container .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-right: 70px;
}
.nav-container .link{
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
}
.nav-container .login{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.nav-container .login button:nth-child(1){
    background-color: #3EB489;
    padding: 8px 30px;
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: 1px;
    border: none;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
}
.nav-container .login button:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #000;
    padding: 8px 25px;
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: 1px;
    border: 1px solid #525151;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
}

.header .menu-icon{
    display: none;
}

@media(max-width:1350px){

    .header .menu-icon{
        display: flex;
    }
    .header .nav-container .nav{
        display: none;
    }

    .hidden-nav{
        display: flex;
        flex-direction: column;
        position: absolute;
        height: 100%;
        top: 0px;
        left: 0;
        padding: 100px 40px;
        font-size: 1.3rem;
        z-index: 10;
        background-color: #4e4e4e;
        gap: 30px;
    }
    .hidden-nav .link{
        text-decoration: none;
        color: #fff;
    }
     #menu-close{
        position: absolute;
        top: 30px;
        right: 30px;
        border: 1px solid #b0adad;
        border-radius: 30px;
        padding: 5px;
        font-size: 2rem;
        z-index: 10;
    }
    #menu-close-container{
        height: 100%;
        width: 100%;
        right: 0;
        position: absolute;
        z-index: 5;
        background-color: rgba(0, 255, 255, 0);
    }
    .hidden-nav .login button:nth-child(1){
    background-color: #3EB489;
    padding: 8px 30px;
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: 1px;
    border: none;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
}
.hidden-nav .login button:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #000;
    padding: 8px 25px;
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: 1px;
    border: 1px solid #525151;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
}
.hidden-nav .login{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction:column;
}
}

@media(max-width:700px){
    .nav-container .login{
        display:none;
    }
    
    
}

`;

export default Header;