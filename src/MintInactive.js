export default function MintInactive({setMints, mints}) {

  const handleChange = (e) => {
    setMints(e.target.value);
  };

  return(
    <div className="mint">
    <div className="select">
    <label for="mints"></label>
    <select value={mints} onChange={handleChange} className="selectaNull">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    </select>
    </div>
    <div className="mintButtonNull">Mint  --> {mints * .22}</div>
    <p className="defaultText">Not connected.  Please connect your wallet to Ethereum Mainnet</p>
    </div>
  );
}
