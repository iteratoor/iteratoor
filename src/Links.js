import boat from './icons/opensea.svg'
import zorb from './icons/zora.svg'
import etherscan from './icons/etherscan.svg'
import discord from './icons/discord.svg'
import twitter from './icons/twitter.svg'

export default function Links() {
  return(
    <div className="linkSpacing">
    <a href="https://twitter.com/iteratoor">
    <img src={twitter}></img></a>
    <a href="https://t.co/LijQ8DkoZz">
    <img src={discord}></img></a>
    <a href="https://opensea.io/collection/iteratoor">
    <img src={boat}></img></a>
    <a href="https://zora.co/collections/0x99FaC84B82fe53cc3f5FaeA71c3F42b42EB1901D">
    <img src={zorb}></img></a>
    <a href="https://etherscan.io/address/0x99fac84b82fe53cc3f5faea71c3f42b42eb1901d">
    <img src={etherscan}></img></a>
    </div>
  );
}
