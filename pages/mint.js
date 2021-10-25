import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "./../config"

export default function Mint() {

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
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }
  
    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "rinkeby"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
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
  
  async function mintBanana(how_many_bananas) {
    console.log(how_many_bananas)
    if (bananaContract) {
  
      const price = Number(bananaPrice)  * how_many_bananas 
  
      const gasAmount = await bananaContract.methods.mint(how_many_bananas).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)
  
      console.log({from: walletAddress, value: price})
  
      bananaContract.methods
            .mint(how_many_bananas)
            .send({from: walletAddress, value: price, gas: String(parseInt(1.2 * gasAmount))})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  



  return (
    <section id="mint" className="dN">
    <div>
    <div className="dB mB2" style={{textAlign:"center"}}>
      <span class="f14 sF lT4 blueC dB">GET A SLOTH</span>
      <div className="dIF">
        <h2 className="f40 whiteC sF lT4">MINTING<span></span></h2>
        <img className="dB icon mL1" src={'/static/teleporter.png'} />
      </div>
    </div>
    <div className="container dF posRel">
    <div className="posAbs absSloths" style={{height:"100%"}}>
      <img src={'/static/0.jpg'} />
      <img src={'/static/1.jpg'} />
      <img src={'/static/2.jpg'} />
      <img src={'/static/3.jpg'} />
      <img src={'/static/4.jpg'} />
      <img src={'/static/5.jpg'} />
    </div>
    {/* <div className="f1"><img  style={{borderRadius:"15px", marginRight:"25%"}} className="dB mL1" src={'/static/sswbig.gif'} /></div> */}
    <div class="mintC">
      <div className="mintContainer" style={{border: "2px solid #2784d3"}}>
      <span className="wallet">Wallet Connected: {walletAddress} </span>
        <h2>MINT A SLOTH</h2>
        <div class="dF hC vC">
        <input type="number" min="1"max="20"value={how_many_bananas} onChange={ e => set_how_many_bananas(e.target.value) }
        name="" className=""/>
        <button onClick={() => mintBanana(how_many_bananas)} className="blueBtn ">MINT {how_many_bananas} Sloths for {(bananaPrice * how_many_bananas) / (10 ** 18)} ETH + GAS</button>
        </div>
      </div>
    </div>
    </div>
    </div>          
  </section>
    )
  }