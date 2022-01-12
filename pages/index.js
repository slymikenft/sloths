import Head from 'next/head'
import Web3 from "web3";
import $ from 'jquery'; 

import { useState, useEffect } from 'react';

// import {ADDRESS, ABI} from "./../congif"


export default function Home() {

  async function closeMenuOnClick () {
    $('#toggle').toggleClass('active');
    $('#overlayMobile').toggleClass('open');
  }

  return (
    <div>
      <Head>
        <title>Sly Sloths World</title>
        <link rel="icon" href="/static/favicon-32x32.png" />
        <meta property="og:title" content="Sly Sloths World" key="ogtitle" />
        <meta property="og:description" content="SSW is a collection of 10,000 Sly Sloths NFTs-unique digital collectibles living on the Ethereum blockchain." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://slyslothsworld.com/" key="ogurl"/>
        <meta property="og:image" content="https://slyslothsworld.com/static/planet2.png" key="ogimage"/>
        <meta property="og:site_name" content="https://slyslothsworld.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="slyslothsworld.com" key="twdomain" />
        <meta property="twitter:url" content="https://slyslothsworld.com/" key="twurl" />
        <meta name="twitter:title" content="Sly Sloths World" key="twtitle" />
        <meta name="twitter:description" content="SSW is a collection of 10,000 Sly Sloths NFTs-unique digital collectibles living on the Ethereum blockchain." key="twdesc" />
        <meta name="twitter:image" content="https://slyslothsworld.com/static/planet2.png" key="twimage" />
      </Head>
      <nav className="dF container">
          <img height="50" className="dB icon" src={'/static/logo.jpg'} />
          <div className="dF f1 hR vC dN860">
              <a href="#story"><span>STORY</span></a>
              <a href="#roadmap"><span>ROADMAP</span></a>
              <a href="#team"><span>TEAM</span></a>
              <a href="/mint"><span className="blueC">MINT</span></a>
              <a className="social" href="https://discord.gg/RC59EPTmTh" target="_blank"><img height="25" src={'/static/discord.svg'} /></a>
              <a className="social" href="https://twitter.com/slyslothsworld" target="_blank"><img height="25" className="mL05" src={'/static/twitter.svg'} /></a>
              {/* <a className="social" href="https://slyslothsworld.medium.com/" target="_blank"><img height="25" className="mL05" src={'/static/medium.png'} /></a> */}
              {/* <button id="walletAddr" onClick={() => signIn()} className="blueBtn ">CONNECT WALLET</button> */}
          </div>
      </nav>        
      <div className="button_container dB860" onClick={() => closeMenuOnClick()} id="toggle">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </div>
        <div className="overlayMobile displayNone790F" id="overlayMobile">
            <div>
                <img className="dB mL1 bimage" src={'/static/planet2.png'} />
                <a onClick={() => closeMenuOnClick()} href="#story">STORY</a>
                <a onClick={() => closeMenuOnClick()} href="#roadmap">ROADMAP</a>
                <a onClick={() => closeMenuOnClick()} href="#team">TEAM</a>
                <a onClick={() => closeMenuOnClick()} href="/mint">MINT</a>
                <div className="dF hC mT1">
                  <a className="social" href="https://discord.gg/RC59EPTmTh" target="_blank"><img height="25" src={'/static/discord.svg'} /></a>
                  <a className="social mL1" href="https://twitter.com/slyslothsworld" target="_blank"><img height="25" className="" src={'/static/twitter.svg'} /></a>
                  {/* <a className="social mL1" href="https://slyslothsworld.medium.com/" target="_blank"><img height="25" className="" src={'/static/medium.png'} /></a> */}
                </div>
            </div>
        </div>
      <main>
        <section className="mainS">
          <div>
          <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='title' className="container dF">
              <div className="dF vC">
                <div>
                  <span className="f14 sF lT4 blueC">JOIN OUR JOURNEY</span>
                  <span className="sF f40 whiteC lT4">WELCOME TO THE SLY SLOTHS WORLD</span>
                  <span className="f18 whiteC mT1 mB2 lT1" style={{lineHeight: "22px;"}}>SSW is a collection of 10,000 Sly Sloths NFTs-unique digital collectibles living on the Ethereum blockchain.</span>
                  <span className="discountLabel dN" onClick={(e) => {
      e.preventDefault();
      window.location.href='/mint';
      }} style={{backgroundColor: "red", fontSize: "22px", color: "#FFF", padding: "0.5rem 1rem", marginTop: "-1rem"}}>ON SALE!</span>
                  <div className="dF mT1 btns">
                    <a target="_blank" style={{fontSize: "16px !important"}} href="https://discord.gg/RC59EPTmTh" className="whiteBtn">JOIN DISCORD</a>
                    <a href="/mint" style={{fontSize: "16px !important"}} className="blueBtn mL1">MINTING</a>
                  </div>
                </div>
              </div>             
              <div onClick={(e) => {
      e.preventDefault();
      window.location.href='/mint';
      }} className="f1 dF hC mn1 cP">  
              <div className="discount">
                <span>ON <br /> SALE!</span>
              </div>    
              <img className="dB mL1 bimage" src={'/static/ssw.gif'} />    
              <div  className="discount2">
                <span>WOW! 80% discount!</span>  
              </div>                                     
              </div>
            </div>
          </div>
        </section>
        {/* <section id="promo">
          <div>
            <img src={'/static/2_1.jpg'} />
            <img src={'/static/3_2.jpg'} />
            <img src={'/static/4_3.jpg'} />
            <img src={'/static/5_4.jpg'} />
            <img src={'/static/6_5.jpg'} />
            <img src={'/static/7_6.jpg'} />
            <img src={'/static/8_7.jpg'} />
            <img src={'/static/9_8.jpg'} />
          </div>
        </section> */}
        <section id="story" className="story">
          <div className="container dF">
          <div className="f1 dF vC hC">
            <img style={{paddingRight: "25%"}} height="500" className="dB mL1 bimage" src={'/static/planet2.png'} />
          </div>
          <div className="f1">
            <span className="f14 sF lT4 blueC dB">HOW IT BEGAN...</span>
            <div className="dIF">
              <h2 className="f40 whiteC sF lT4">THE STORY</h2>
              <img className="dB icon mL1" src={'/static/script.svg'} />
            </div>
            <p className="whiteC lT1 f18" style={{textAlign: "justify"}}>The year is 2078. Planet Earth is consumed by natural disasters, and humans are nowhere to be found. In their absence, Sloths have become Earth's keepers, but their destruction looms closer every day. One day, the Great Council of Sloths convenes and unanimously decides to elect an enterprising leader to save the species. The council turns to the mad but brilliant Dr. Slothkins—their only hope.
            <br /> <br />
            Dr. Slothkins, in typical fashion, suggests the impossible: he will move the species to a garden planet 300 million light-years away, Planet STH-69420 🪐. The Council tells the good Doctor that it is impossible, "but  . . . what choice do we have?". <br /><br />
            And so the Council—and all of Sloth Kind—gets behind Slothkins and his harebrained scheme. Against all odds, they go successfully, and begin to build a global Sloth society on their mysterious new home planet. What surprises await Sloth Kind on their Sly Sloths World?
            </p>
            <a href="#roadmap" className="blueBtn mT1 dIF">ROADMAP</a>
          </div>
          </div>
          
        </section>
        {/* <section id="promo">
          <div>
            <img src={'/static/10_9.jpg'} />
            <img src={'/static/11_10.jpg'} />
            <img src={'/static/12_11.jpg'} />
            <img src={'/static/13_12.jpg'} />
            <img src={'/static/14_13.jpg'} />
            <img src={'/static/15_14.jpg'} />
            <img src={'/static/16_15.jpg'} />
            <img src={'/static/17_16.jpg'} />
          </div>
        </section> */}
        <section id="roadmap" className="container dF">
        <div className="f1">
            <span className="f14 sF lT4 blueC dB">"The Settle"</span>
            <div className="dIF">
              <h2 className="f40 whiteC sF lT4">ROADMAP<span></span></h2>
              <img className="dB icon mL1" src={'/static/road-map.svg'} />
            </div>     
            <div className="mT2">
              <div className="dF vC">
                <span className="f22 bold blueC">20%</span>
                <div className="dF vC posRel mL1" style={{flex: "2"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "8"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05 mW100 f18">10 random holders will be <b className="blueC f18">airdropped</b> a Sly Sloth for <b className="blueC f18">FREE!</b></span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">40%</span>
                <div className="dF vC posRel mL1" style={{flex: "4"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "6"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05 mW100 f18 f18">We will list our project on <b className="blueC f18">Rarity.tools</b>.</span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">60%</span>
                <div className="dF vC posRel mL1" style={{flex: "6"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "4"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05 mW100 f18">Our team will be bringing the Sly Sloths story to life with a <b className="blueC f18">short animation</b>.</span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">80%</span>
                <div className="dF vC posRel mL1" style={{flex: "8"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "2"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05 mW100 f18">A <b className="blueC f18">$10,000 donation fund</b> will be made to a charity of the community's choosing. </span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">100%</span>
                <div className="dF vC posRel mL1" style={{flex: "1"}}>
                     <hr className="progressHR f1" />
                </div>
                 <span className="whiteC dB mT05 mW100 f18">We will <b className="blueC f18">raffle off ETH</b> to lucky holders!</span>
              </div> 
            </div>
       
        </div>
        <div className="f1">
          <div className="roadmapImg">
            <img className="dB" src={'/static/roadmap_cut_small.jpg'} />
          </div>
        </div>
         
        </section>
        <section id="team">
        <span className="f14 sF lT4 blueC dB">MEET US</span>
            <div className="dIF mB2">
              <h2 className="f40 whiteC sF lT4">TEAM<span></span></h2>
              <img className="dB icon mL1" src={'/static/team.png'} />
            </div>
          <div className="dF">
            <div className="f1">
              <img src={'/static/5.jpg'} />
              <div>
                <div>
                  <span>Sly Nathan</span>
                  <span className="f16">Marketing not-so specialist & community manager. He’s passionate about making the community safe and sound. Just please, use emojis when you’re engaging to a conversation with him or he might think that you’re angry when you don’t use ‘em. He’s the kindest, the most humble, and the most handsome human being according to his mum.</span>
               </div>
              </div>
            </div>
            <div className="f1">
            <img src={'/static/1.jpg'} />
            <div>
                <div>
                  <span>Sly Josie</span>
                  <span className="f16">Art directress. She’s an artist. She cares way too much about her "images." Yup, not only an image but 10,000 of 'em. A newbie in the industry, but it was a love at first sight. She might not own any $SHIB but definitely owns a living, barking Shiba Inu.</span>
               </div>
              </div>
            </div>
            <div className="f1">
            <img src={'/static/2_1.jpg'} />
            <div>
                <div>
                  <span>Sly Mike</span>
                  <span className="f16">Founder & Developer. The father of them all. The decision maker. He loves football, jpegs, and sloths. He’s the techie boss that owns a software house in real life. He believes in the saying, <i>"When life gives you lemons, buy a jpeg as it is easier than making a lemonade."</i></span>
               </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="container dN">
        <span className="f14 sF lT4 blueC dB">FAQ</span>
        <div className="dIF mB2">
          <h2 className="f40 whiteC sF lT4">FREQUENTLY ASKED QUESTIONS<span></span></h2>
          <img className="dB icon mL1" src={'/static/faq.png'} />
        </div>
        <div className="dF">
          <div className="f1">
            <div className="faq">
              <span>What is <span className="blueC">Sly Sloths World</span>?</span>
              <span>Sly Sloths World is a collection of 10,000 unique, randomly generated NFTs that just want to live in peace and safety.</span>
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
              <span>Each Sloth costs only <b>0.01ETH.</b></span>
            </div>
          </div>
          <div className="f1">
            <div className="faq">
              <span>Why should I buy Sloth and become <span className="blueC">SSW member</span></span>
              <span>Come on... Look at them! They are so dope! </span>
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
              <span>Minting is <b>LIVE!</b></span>
            </div>
          </div>
        </div>
        </section>
      </main>
      <footer className="dF container vC" style={{padding: "1rem 0rem"}}>
        <div className="f1">
            <span className="whiteC">© Copyright 2021 Sly Sloths World NFT. All Rights Reserved.</span>
        </div>
        <div className="f1 dF hR">
            <a className="social" href="https://discord.gg/RC59EPTmTh" target="_blank"><img height="25" src={'/static/discord.svg'} /></a>
            <a className="social" href="https://twitter.com/slyslothsworld" target="_blank"><img height="25" className="mL05" src={'/static/twitter.svg'} /></a>
            {/* <a className="social" href="https://slyslothsworld.medium.com/" target="_blank"><img height="25" className="mL05" src={'/static/medium.png'} /></a> */}
        </div>
      </footer>
    </div>
  )
}

