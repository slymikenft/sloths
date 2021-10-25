import Head from 'next/head'
import Web3 from "web3";
import $ from 'jquery'; 

import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "./../congif"


export default function Home() {
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
    <div>
      <Head>
        <title>Sly Sloths World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="dF container">
          <img height="50" className="dB icon" src={'/static/logo.jpg'} />
          <div className="dF f1 hR vC">
              <a href="#story"><span>STORY</span></a>
              <a href="#roadmap"><span>ROADMAP</span></a>
              <a href="#team"><span>TEAM</span></a>
              <a href="#faq"><span>FAQ</span></a>
              <a className="social" href="https://discord.gg/veJHGQxK" target="_blank"><img height="25" src={'/static/discord.svg'} /></a>
              <a className="social" href="https://twitter.com/slyslothsworld" target="_blank"><img height="25" className="mL05" src={'/static/twitter.svg'} /></a>
              {/* <button id="walletAddr" onClick={() => signIn()} className="blueBtn ">CONNECT WALLET</button> */}
          </div>
      </nav>
      <main>
        <section className="mainS">
          <div>
          <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='title' class="container dF">
              <div class="dF vC">
                <div>
                  <span class="f14 sF lT4 blueC">WELCOME TO THE SLY SLOTHS WORLD</span>
                  <span class="sF f40 whiteC lT4">WELCOME TO THE SLY SLOTHS WORLD</span>
                  <span class="f16 whiteC mT1 mB2 lT1" style={{lineHeight: "22px;"}}>SSW is a collection of 10,000 Sly Sloth NFTs-unique digital collectibles living on the Ethereum blockchain.</span>
                  <div class="dF mT1">
                    <a target="_blank" href="https://discord.gg/2As8URk4" className="whiteBtn">JOIN DISCORD</a>
                    <a href="#story" className="blueBtn mL1">READ MORE</a>
                  </div>
                </div>
              </div>             
              <div class="f1 dF hC">
                <img className="dB mL1 bimage" src={'/static/planet2.png'} />
              </div>
            </div>
          </div>
        </section>
        <section id="story" className="story">
          <div className="container dF">
          <div class="f1 dF vC hC">
            <img style={{paddingRight: "25%"}} height="500" className="dB mL1 bimage" src={'/static/teleport2.png'} />
          </div>
          <div className="f1">
            <span class="f14 sF lT4 blueC dB">HOW IT BEGAN...</span>
            <div className="dIF">
              <h2 className="f40 whiteC sF lT4">THE STORY</h2>
              <img className="dB icon mL1" src={'/static/script.svg'} />
            </div>
            <p className="whiteC lT1" style={{textAlign: "justify"}}>The year is 2078…  <br /> <br /> Numerous natural disasters 🌪️  and multiplying civilization diseases 🦠  make life more and more difficult on planet Earth 🌎. In the face of the deteriorating situation, the Great Council of Sloths  convenes an extraordinary assembly at which an absolute decision is made to leave planet Earth in order to save the species. This is a drastic move that requires a well-thought-out plan and non-standard concept, because the task is extremely difficult. The council asks for the help of the mad but highly respected astrophysicist, Dr. Slothkins, in order to save the species.
            <br /> <br />
            Many weeks ⌛ of research and consultation bring only mediocre results. This resigned society is close to accepting the current state of affairs and its own fate. Two days before the rescue plan deadline, Slothkins comes up with a controversial idea - the sloths will move to a planet 300 million light-years away with conditions similar to Earth called STH-13894 🪐. <br /><br />
            There are too many sloths to decide to travel by available means of transport, so the only hope is in the prototype of Slothkins' invention, which was ultimately to be the world's first teleportation device - SlothPorter  . The concept created has nothing to do with a well-thought-out and effective plan, but it is the only one to save the breed from extinction. In the face of the increasingly difficult situation in the world, the Council decides to trust Slothkins. After several weeks of hard work and hundreds of tests performed, Slothporter is ready to go. Slothkins has been observing 🔭 the chosen planet for a long time, but he has no idea what the sloths will find out there. But only one thing is certain - they have to build their lives from scratch there. A new chapter begins - <span className="blueC"><i><b>The Settle</b></i></span>.
            </p>
            <a href="#roadmap" className="blueBtn mT1 dIF">ROADMAP</a>
          </div>
          </div>
          
        </section>
        <section id="roadmap" className="container dF">
        <div className="f1">
            <span class="f14 sF lT4 blueC dB">"The Settle"</span>
            <div className="dIF">
              <h2 className="f40 whiteC sF lT4">ROADMAP<span></span></h2>
              <img className="dB icon mL1" src={'/static/road-map.svg'} />
            </div>
            <span class="whiteC dB"><b>Sly Sloth World</b> will have 3 phases for roadmap: <span className="blueC bold">The Settle</span>, <span className="blueC bold">The Utility</span> and <span className="blueC bold">The "???".</span> The two latter phases will be revealed later as we progress. This is to secure the longevity and continuous growth of this project.
            </span>           
            <div className="mT2">
              <div className="dF vC">
                <span className="f22 bold blueC">20%</span>
                <div class="dF vC posRel mL1" style={{flex: "2"}}>
                     <hr class="progressHR f1" />
                </div>
                <div class="dF vC posRel" style={{flex: "8"}}>
                     <hr class="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05"><b class="blueC">Pre-launch giveaways, ETH raffle, releasing sneak peeks, competitions are all included here. </b> But the most important thing is to give perks to our early supporters hence, a total of 2,000 presale/whitelist slots will be sold to the people who showed support and patience from the early days of this project. This is not just only to prevent gas wars, but also to give you the privilege of having a SSW NFT first hand. </span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">40%</span>
                <div class="dF vC posRel mL1" style={{flex: "4"}}>
                     <hr class="progressHR f1" />
                </div>
                <div class="dF vC posRel" style={{flex: "6"}}>
                     <hr class="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05">Our team will be bringing Sly Sloths to life.<b class="blueC"> A short animation film</b> that will revolve about the SSW’ story. Better look out for those sloths that will get the once in a lifetime opportunity to be included in the castings on this upcoming short film!</span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">60%</span>
                <div class="dF vC posRel mL1" style={{flex: "6"}}>
                     <hr class="progressHR f1" />
                </div>
                <div class="dF vC posRel" style={{flex: "4"}}>
                     <hr class="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05"><b class="blueC">Rarity.tools</b> is one of the most trusted tools on identifying your NFT’s rarity, and we will be securing the listing alongside with the OpenSea verification. </span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">80%</span>
                <div class="dF vC posRel mL1" style={{flex: "8"}}>
                     <hr class="progressHR f1" />
                </div>
                <div class="dF vC posRel" style={{flex: "2"}}>
                     <hr class="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05"><b class="blueC">A $20,000 donation fund</b> will be put aside securely. The team would love to hear from the community about its suggestions. Some species of sloths are actually considered endangered, and they need our support on saving them and their shelter. And so, we will collectively decide which reputable charity preferably but not limited to the ones that support reforestation and/or endangered species. </span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">100%</span>
                <div class="dF vC posRel mL1" style={{flex: "1"}}>
                     <hr class="progressHR f1" />
                </div>
                 <span className="whiteC dB mT05"><b class="blueC">An exclusive and limited merch</b> will launch. Expect everything extra here, we have already some great ideas and designs that are waiting for execution. Everything from the drop can only be bought if you hold an SSW NFT. More info will be provided soon as we progress.</span>
              </div> 
            </div>
       
        </div>
        <div class="f1">
          <div className="roadmapImg">
            <img className="dB" src={'/static/ROADMAPFINAL_SMALL.png'} />
          </div>
        </div>
         
        </section>
        <section id="team">
        <span class="f14 sF lT4 blueC dB">MEET US</span>
            <div className="dIF mB2">
              <h2 className="f40 whiteC sF lT4">TEAM<span></span></h2>
              <img className="dB icon mL1" src={'/static/team.png'} />
            </div>
          <div className="dF">
            <div className="f1">
              <img src={'/static/0.jpg'} />
              <div>
                <div>
                  <span>Sly Nathan</span>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
               </div>
              </div>
            </div>
            <div className="f1">
            <img src={'/static/1.jpg'} />
            <div>
                <div>
                  <span>Sly Josie</span>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
               </div>
              </div>
            </div>
            <div className="f1">
            <img src={'/static/2.jpg'} />
            <div>
                <div>
                  <span>Sly Mike</span>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
               </div>
              </div>
            </div>
          </div>
        </section>
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
        <section id="faq" className="container">
        <span class="f14 sF lT4 blueC dB">FAQ</span>
        <div className="dIF mB2">
          <h2 className="f40 whiteC sF lT4">FREQUENTLY ASKED QUESTIONS<span></span></h2>
          <img className="dB icon mL1" src={'/static/faq.png'} />
        </div>
        <div className="dF">
          <div className="f1">
            <div className="faq">
              <span>What is <span className="blueC">Sly Sloth World</span>?</span>
              <span>Sly Sloth World is a collection of 10,000 unique, randomly generated NFTs that just want to live in peace and safety.</span>
            </div>
          </div>
          <div className="f1">
            <div className="faq">
              <span>How can I get a <span className="blueC">Sly Sloth</span>?</span>
              <span>You can mint it on our website or get it from Opensea!</span>
            </div>
          </div>
        </div>
        <div className="dF mT2">
          <div className="f1">
            <div className="faq">
              <span>How much does it cost to get a <span className="blueC">Sloth</span>?</span>
              <span>Each Sloth costs 0.05 ETH.</span>
            </div>
          </div>
          <div className="f1">
            <div className="faq">
              <span>Why should I buy Sloth and become <span className="blueC">SSW member</span></span>
              <span>Come on... Look at them! They are so dope! The team has a long-term vision and a project plan that is sure to please even the most demanding members. </span>
            </div>
          </div>
        </div>
        <div className="dF mT2">
          <div className="f1">
            <div className="faq">
              <span>Will there be a <span className="blueC">Presale</span>?</span>
              <span>Yes - we appreciate early support and certainly early adopters will be awarded with a whitelist spot.</span>
            </div>
          </div>
          <div className="f1">
            <div className="faq">
              <span>When does SSW <span className="blueC">launch</span>?</span>
              <span>To be announced! </span>
            </div>
          </div>
        </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}
