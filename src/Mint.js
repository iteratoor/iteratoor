import Web3 from "web3";
import {contract, abi} from "./Iterator";

export default function Mint({setMints, mints, acct, contract, minted, active, started}) {

  const handleChange = (e) => {
    setMints(e.target.value);
  };

  async function mint () {
    const price = 220000000000000000;
    const account  = acct;
    const val = mints * price;
    console.log(val);
    await contract.methods.mint(mints).send({
      from: account,
      value: val
    })
  }

  return(
    <div className="mint">
    <div className="select">
    <label for="mints"></label>
    <select value={mints} onChange={handleChange} className="selecta">
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
    <div className="mintButton" onClick={mint}>Mint  --> {mints * .22}</div>
    { started ? <p className="defaultText">{minted} / 420 minted so far</p> : <p className="defaultText">Mint has not started yet!  Come back at 22:22 UTC.</p>}
    </div>
  );

}
