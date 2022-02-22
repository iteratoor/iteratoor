import React, { useState, useEffect } from "react";
import ConnectButton from './ConnectButton';
import Mint from './Mint';
import Slider from './Slider';
import Info from './Info';
import MintInactive from './MintInactive';
import Copy from './Copy';
import Links from './Links';
import logo from './icons/iteratoor.svg';

  function Main({Component, pageProps}) {
    const [acct, setAcct] = useState('');
    const [mints, setMints] = useState('1');
    const [active, setActive] = useState(false);
    const [contract, setContract] = useState();
    const [minted, setMinted] = useState();
    const [started, setStarted] = useState();

    return (
      <div>
      <div className="dappTitle"><img src={logo}></img></div>
      <Info />
      <ConnectButton setAcct={setAcct} setActive={setActive} active={active} setContract={setContract} setMinted={setMinted} minted={minted} started={started} setStarted={setStarted}/>
      { active ? <Mint setMints={setMints} mints={mints} acct={acct} contract={contract} minted={minted} active={active} started={started}/> : <MintInactive mints={mints} setMints={setMints}/>}
      <Slider />
      <Links />
      <Copy />
      </div>
    );
  }
  export default Main;
