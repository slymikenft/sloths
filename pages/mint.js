import Head from 'next/head'
import Web3 from "web3";
import $ from 'jquery'; 
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "./../congif"

export default function Mint() {

  const wallets = 
  ["0xd3dAC8bA1FB238473295f6057a5b2c846B1aB369",
"0x6521B457AeC14F9d425F451037052fF2641a22ea",
"0xE5C3e783bb52101eF891254E07E1e37b7e8Af17C",
"0xdACC359c1415D476EB7316f6D925eDe16b7004B6",
"0x76DA102e66dfb005df23Da93008F133517DB4865",
"0xD6b60B0Ca674e4289647a08AbEC30C71d932E465",
"0x263219b7Ef662f2493A3453C713F54b3f94A01ab",
"0x4cB259dAff37CF591630aD472d4D0Eb30f030c79",
"0x96EE89a45904E86ed22FEb6CBbE93538ED6e0500",
"0xd2D0e991b9A72483058B40216Cc37A2353926288",
"0xb1D7755DF863DAF441005AfCaB954c36045A84E0",
"0x46B1630c1f631e9A1080F72E2Cd5A62D4f37c37a",
"0x3c218eFd6edB4C6b4d4B979804d0c7736500a9d4",
"0xd891B82e005491f57abdE7d1a6A36fAbd75E65B7",
"0x336Ab09A2C4A4FeF9956D8c10b5E34A265d76bBf",
"0xe5a2F758Dd69C5E36FB3FCd49489aB7928A8188E",
"0x8c448Fa410c3d67D80AC985Dcf1f42147803549D",
"0xf351D914F2500DB0E3d51D521fB0d29185F68Ab8",
"0xbf17F6D3D7df38B4179f69059Bcc9B1cBB8a278F",
"0xcc6561255fd05d3ebbb19d983e5cae690da9159e",
"0x4e324b8d22329B7a32aed4Af89be2190c6c0b286",
"0x011B149AD9dB18F9106fE13030d5bC67Da16dA39",
"0x2bA66165c0042F1dE985bFb96c3EE9A1B113e523",
"0xacf27254c43187f53522D6F3929aD94caEd8cD3d",
"0x456457f81B584c71bE814a1d1282c261FD2Ad887",
"0xad532d02179b7d7Abb46dc4F2A101083Dbe7A14e",
"0x3Fa515Df9E7a82Ff12990ce279C707F95d2fCC7C",
"0xEA54cC4Cc7d5fde56543101b0fEa375D5E80754e",
"0xeaaf52d3c14b585ddaa43424eb09fefbf9aa2ae5",
"0xc8879e5a1baDb13Fe5c106dB3C5c8270a8400BDB",
"0x4C61a5F7eEde0155C116520F5E1a3e16346454aD",
"0x526Dc23263a5ed4EC20b0944AC1951C348199Ef3",
"0xFcAdDEfbC8eF62f5003f05Da28c72062CAF952a0",
"0xd06e748d56Ef4231eA2E202Ad951737b1365A861",
"0xd3039521fFBCf30F75B3a4f7B7b97e3f6Ab4e9cD",
"0x91f7bbb102bedec11d34294b2d18f535db093889",
"0x4ee9c996BCB7c4D94e6F1e122441fc3301874751",
"0x483199Cc3318414B2b7Af323Cb981840ae8AB4F9",
"0x5161549cC60C94411f47E3Cf96D5E49053cb925d",
"0xC6062bD0524fD3e5bDEa71f71CAC24b4FB93ed4B",
"0xcC81B906e061bE5C45AA63e922C8C341228eCA26",
"0x6E83eAc3a97014E94d068936294e6ffA769FCDC9",
"0x170fe59EC78D9890Cf768aA1693A8b51AD21552e",
"0xbE7d880693749DB5E9A11d12Cc3870604f794D87",
"0x617F1431e2cc9661D2450D2459db3494465660De",
"0x42F86730d04A379bD2FD27221b4143748c2E42FC",
"0xd3A6A407C4A52e47DE09800f8F0Bb0526F81c46F",
"0x915cf1F25Cd7A42F66299097DeF1b75c16129E7b",
"0x33cd35C808A8c0B379314C5E129c1331Ee4a2113",
"0xf4A7C75d2B34bbeE8eB3EC93fdd2642939516425",
"0x7bAb7BE723344273dd7daA977610713DebDd9007",
"0x5d11e6420264d54699296F080572281a910b8744",
"0xE86F8720f811BE47988CCfBec0d7348B5329578e",
"0x85c0c8346d37f64AF19c4Cf6785280244b048271",
"0xcc32CeF9bE740313eB814Ff1c10fa15218Ad5c08",
"0x87c14b606A4887BB658985AdAe8479cbe0DF5b7D",
"0x15776c1F16C3B766A8a4af06DdB83dAD1512C9E9"];

const lowWallets = wallets.map(name => name.toLowerCase());

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
  
  async function mintBanana(how_many_bananas) {
    try {
      console.log(how_many_bananas)
      if (bananaContract) {
        if(how_many_bananas < 4 && lowWallets.includes(walletAddress.toString().toLowerCase())) {
          const price = Number(bananaPrice)  * how_many_bananas 
    
          const gasAmount = await bananaContract.methods.mint(how_many_bananas).estimateGas({from: walletAddress, value: price})
          console.log("estimated gas",gasAmount)
      
          console.log({from: walletAddress, value: price})
      
          bananaContract.methods
                .mint(how_many_bananas)
                .send({from: walletAddress, value: price, gas: String(parseInt(1.2 * gasAmount))})
                .on('transactionHash', function(hash){
                  alert("Congrats! Here's transaction hash: " + hash);
                  console.log("transactionHash", hash)
                });    
        }
        else {
          if(how_many_bananas > 3)
            alert("Minting too many at once!");
          else
            alert("This wallet is not on our whitelist :(.");
        }
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
      <div className="starz" id='stars'></div>
      <div className="starz" id='stars2'></div>
      <div className="starz" id='stars3'></div>
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
        <h2>MINT A SLOTH</h2>
        <span style={{marginBottom: "0.5rem"}} className="whiteC dB tCenter mW100">Pick amount of sloths you'd like to mint</span>
        <div className="dF hC vC amounts">
          {/* <button onClick={() => pickSloths(5)}>5</button>
          <button onClick={() => pickSloths(10)}>10</button>
          <button onClick={() => pickSloths(15)}>15</button>
          <button onClick={() => pickSloths(20)}>20</button> */}
          <button onClick={() => pickSloths(1)}>1</button>
          <button onClick={() => pickSloths(2)}>2</button>
          <button onClick={() => pickSloths(3)}>3</button>
        </div>
        <div className="dF hC vC">
        <input id="amount" type="number" min="1" max="3" value={how_many_bananas} onChange={ e => set_how_many_bananas(e.target.value) }
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