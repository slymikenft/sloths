import Head from 'next/head'
import Web3 from "web3";
import $ from 'jquery'; 
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../congif"

export default function SlothWinners() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)
  
  // FOR MINTING
  const [how_many_bananas, set_how_many_bananas] = useState(1)
  
  const [bananaContract, setBananaContract] = useState(null)
  
  // INFO FROM SMART Contract
  
  const [totalSupply, setTotalSupply] = useState(0)
  
  const [saleStarted, setSaleStarted] = useState(false)
  
  const [bananaPrice, setBananaPrice] = useState(0)
  
  // useEffect( async() => { 
  
  //   signIn()
  
  // }, [])
  
  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);   
    } 
    else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }
  
    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)
        $("#walletAddr").text(wallet.substring(0,5) + "..." + wallet.substring(wallet.length - 3, wallet.length));
  })
    .catch(function (error) {
    // Handle error. Likely the user rejected the login
    console.error(error)
    })
  }
  
  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const bananaContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setBananaContract(bananaContract)
  
    // const salebool = await bananaContract.methods.saleIsActive().call() 
    // // console.log("saleisActive" , salebool)
    // setSaleStarted(salebool)
  
    const totalSupply = await bananaContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)
  
    const bananaPrice = await bananaContract.methods.getPrice().call() 
    setBananaPrice(bananaPrice)
   
  }
  
  async function claimFreeSloths() {
    try {
      if (bananaContract) {   
          const gasAmount = await bananaContract.methods.freeRollMint().estimateGas({from: walletAddress})
          console.log("estimated gas",gasAmount)
      
          console.log({from: walletAddress})
      
          bananaContract.methods
                .freeRollMint()
                .send({from: walletAddress, gas: String(parseInt(1.2 * gasAmount))})
                .on('transactionHash', function(hash){
                  alert("Congrats! Here's transaction hash: " + hash);
                  console.log("transactionHash", hash)
                });    
      } else {
          alert("Please connect your wallet.");
          console.log("Wallet not connected");
      }
    }
    catch(error) {
      alert(error.message.split('{')[0]);
    }
  };

  async function pickSloths (amount) {
    $("#amount").val(amount);
    set_how_many_bananas(amount);
  }

  return (
    <section id="mint">
      {/* <div className="starz" id='stars'></div>
      <div className="starz" id='stars2'></div>
      <div className="starz" id='stars3'></div> */}
    <div>
    <div className="dB mB2" style={{textAlign:"center"}}>
      <span className="f14 sF lT4 blueC dB">GET A SLOTH</span>
      <div className="dIF">
        <h2 className="f40 whiteC sF lT4">MINTING<span></span></h2>
        <img className="dB icon mL1" src={'/static/teleporter.png'} />
      </div>
      <span className="whiteC dB">Please connect your wallet by clicking button below.</span>
      <button id="walletAddr" onClick={() => signIn()} style={{margin: "1rem auto"}} className="blueBtn dB">CONNECT WALLET</button>
      {/* <p className="wallet whiteC">Wallet Connected: {walletAddress} </p> */}
    </div>
    <div className="container dF posRel">
    <div className="posAbs absSloths" style={{height:"100%"}}>
      <img src={'/static/14_13_small.jpg'} />
      <img src={'/static/1_small.jpg'} />
      <img src={'/static/2_1_small.jpg'} />
      <img src={'/static/3_2_small.jpg'} />
      <img src={'/static/4_3_small.jpg'} />
      <img src={'/static/5_small.jpg'} />
    </div>
    {/* <div className="f1"><img  style={{borderRadius:"15px", marginRight:"25%"}} className="dB mL1" src={'/static/sswbig.gif'} /></div> */}
    <div className="mintC">
      <div className="mintContainer" style={{border: "2px solid #2784d3"}}>
        <h2>CLAIM FREE SLOTHS</h2>
        <span style={{marginBottom: "0.5rem"}} className="whiteC dB tCenter mW100">Yeah - it's that simple! Just click the button below.</span>
        <div className="dF hC vC mT3">
        <button onClick={() => claimFreeSloths()} className="blueBtn ">CLAIM FREE SLOTHS</button>
        </div>
      </div>
    </div>
    </div>
    </div>          
    </section>
    )
}