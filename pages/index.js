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
              <a href="#faq"><span>FAQ</span></a>
              <a className="social" href="https://discord.gg/veJHGQxK" target="_blank"><img height="25" src={'/static/discord.svg'} /></a>
              <a className="social" href="https://twitter.com/slyslothsworld" target="_blank"><img height="25" className="mL05" src={'/static/twitter.svg'} /></a>
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
                <a onClick={() => closeMenuOnClick()} href="#faq">FAQ</a>
                <div className="dF hC mT1">
                  <a className="social" href="https://discord.gg/veJHGQxK" target="_blank"><img height="25" src={'/static/discord.svg'} /></a>
                  <a className="social mL1" href="https://twitter.com/slyslothsworld" target="_blank"><img height="25" className="" src={'/static/twitter.svg'} /></a>
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
                  <span className="f16 whiteC mT1 mB2 lT1" style={{lineHeight: "22px;"}}>SSW is a collection of 10,000 Sly Sloths NFTs-unique digital collectibles living on the Ethereum blockchain.</span>
                  <div className="dF mT1 btns">
                    <a target="_blank" href="https://discord.gg/2As8URk4" className="whiteBtn">JOIN DISCORD</a>
                    <a href="#story" className="blueBtn mL1">READ MORE</a>
                  </div>
                </div>
              </div>             
              <div className="f1 dF hC">
                <img className="dB mL1 bimage" src={'/static/planet2.png'} />
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
            <img style={{paddingRight: "25%"}} height="500" className="dB mL1 bimage" src={'/static/teleport2.png'} />
          </div>
          <div className="f1">
            <span className="f14 sF lT4 blueC dB">HOW IT BEGAN...</span>
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
            <span className="whiteC dB"><b>Sly Sloth World</b> will have 3 phases for roadmap: <span className="blueC bold">The Settle</span>, <span className="blueC bold">The Economy</span> and <span className="blueC bold">The "???".</span> The two latter phases will be revealed later as we progress. This is to secure the longevity and continuous growth of this project.
            </span>           
            <div className="mT2">
              <div className="dF vC">
                <span className="f22 bold blueC">20%</span>
                <div className="dF vC posRel mL1" style={{flex: "2"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "8"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05"><b className="blueC">Pre-launch giveaways, ETH raffle, releasing sneak peeks, competitions are all included here. </b> But the most important thing is to give perks to our early supporters hence, a total of 2,000 presale/whitelist slots will be sold to the people who showed support and patience from the early days of this project. This is not just only to prevent gas wars, but also to give you the privilege of having a SSW NFT first hand. </span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">40%</span>
                <div className="dF vC posRel mL1" style={{flex: "4"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "6"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05"><b className="blueC">Rarity.tools</b> is one of the most trusted tools on identifying your NFT’s rarity, and we will be securing the listing alongside with the OpenSea verification. </span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">60%</span>
                <div className="dF vC posRel mL1" style={{flex: "6"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "4"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05">Our team will be bringing Sly Sloths to life.<b className="blueC"> A short animation film</b> that will revolve about the SSW's story. Better look out for those sloths that will get the once in a lifetime opportunity to be included in the castings on this upcoming short film!</span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">80%</span>
                <div className="dF vC posRel mL1" style={{flex: "8"}}>
                     <hr className="progressHR f1" />
                </div>
                <div className="dF vC posRel" style={{flex: "2"}}>
                     <hr className="progressHR f1" style={{background: "#F2F2F2"}} />
                 </div>
                 <span className="whiteC dB mT05"><b className="blueC">A $20,000 donation fund</b> will be put aside securely. The team would love to hear from the community about its suggestions. Some species of sloths are actually considered endangered, and they need our support on saving them and their shelter. And so, we will collectively decide which reputable charity preferably but not limited to the ones that support reforestation and/or endangered species. </span>
              </div> 
              <div className="dF vC mT2">
                <span className="f22 bold blueC">100%</span>
                <div className="dF vC posRel mL1" style={{flex: "1"}}>
                     <hr className="progressHR f1" />
                </div>
                 <span className="whiteC dB mT05"><b className="blueC">An exclusive and limited merch</b> will launch. Expect everything extra here, we have already some great ideas and designs that are waiting for execution. Everything from the drop can only be bought if you hold an SSW NFT. More info will be provided soon as we progress.</span>
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
                  <span>Marketing not-so specialist & community manager. He’s passionate about making the community safe and sound. Just please, use emojis when you’re engaging to a conversation with him or he might think that you’re angry when you don’t use ‘em. He’s the kindest, the most humble, and the most handsome human being according to his mum.</span>
               </div>
              </div>
            </div>
            <div className="f1">
            <img src={'/static/1.jpg'} />
            <div>
                <div>
                  <span>Sly Josie</span>
                  <span>Art directress. She’s an artist. She cares way too much about her "images."" Yup, not only an image but 10,000 of 'em. A newbie in the industry, but it was a love at first sight. She might not own any $SHIB but definitely owns a living, barking Shiba Inu.</span>
               </div>
              </div>
            </div>
            <div className="f1">
            <img src={'/static/2_1.jpg'} />
            <div>
                <div>
                  <span>Sly Mike</span>
                  <span>Founder & Developer. The father of them all. The decision maker. He loves football, jpegs, and sloths. He’s the techie boss that owns a software house in real life. He believes in the saying, <i>"When life gives you lemons, buy a jpeg as it is easier than making a lemonade."</i></span>
               </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="container">
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
              <span>Each Sloth costs 0.05ETH.</span>
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
      <footer className="dF container vC" style={{padding: "1rem 0rem"}}>
        <div className="f1">
            <span className="whiteC">© Copyright 2021 Sly Sloths World NFT. All Rights Reserved.</span>
        </div>
        <div className="f1 dF hR">
            <a className="social" href="https://discord.gg/veJHGQxK" target="_blank"><img height="25" src={'/static/discord.svg'} /></a>
            <a className="social" href="https://twitter.com/slyslothsworld" target="_blank"><img height="25" className="mL05" src={'/static/twitter.svg'} /></a>
        </div>
      </footer>
    </div>
  )
}

