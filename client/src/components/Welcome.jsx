import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { BiBorderRadius } from "react-icons/bi";
import Transactions from "./Transactions";
import '.././index.css'

function changeBackground(e){ 
  e.target.style.background = 'red'
}
function changeBackgroundLeave(e){ 
  e.target.style.background = 'black'
}


const style={
  color: 'black',
  fontSize: '60px',
  fontFamily: "'Brush Script MT', cursive"
}

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-grey-4000 text-sm font-bold text-white";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 style={style} className="text-3xl sm:text-5xl  py-1">
            Send Crypto <br /> across the world
          </h1>
          <p style={{color: 'black',fontWeight: 'bolder'}} className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div style={{background: 'black',borderRadius: '20px'}} className={`grid sm:grid-cols-3 grid-cols-2 w-full mt-10 .`}>
            <div onMouseEnter={changeBackground} onMouseLeave={changeBackgroundLeave} className={`rounded-tl-2xl ${companyCommonStyles}`}>
              <a href="https://www.ibm.com/topics/blockchain-security#:~:text=Basic%20blockchain%20security,-Blockchain%20technology%20produces&text=It's%20based%20on%20principles%20of,transaction%20or%20bundle%20of%20transactions" target='blank'>
              Reliability</a>
            </div>
            <div onMouseEnter={changeBackground} onMouseLeave={changeBackgroundLeave} className={companyCommonStyles}>
              <a href="https://academy.binance.com/en/articles/what-makes-a-blockchain-secure" target='blank'>
              Security</a></div>
            <button onMouseEnter={changeBackground} onMouseLeave={changeBackgroundLeave} className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              <a href="https://coinmarketcap.com/currencies/ethereum/" target='blank'>
              Ethereum</a>
            </button>
            <button onMouseEnter={changeBackground} onMouseLeave={changeBackgroundLeave} className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              <a href="https://www.binance.com/en/blog/fiat/web-30-coin-the-newest-crypto-trend-in-2022-421499824684903194" target="blank">
              Web 3.0</a>
            </button>
            <div onMouseEnter={changeBackground} onMouseLeave={changeBackgroundLeave} className={companyCommonStyles}>
              <a href="https://ethereum.org/en/developers/docs/gas/" target='blank'> 
              Low Fees</a></div>
            <div onMouseEnter={changeBackground} onMouseLeave={changeBackgroundLeave} className={`rounded-br-2xl ${companyCommonStyles}`}>
              <a href="https://academy.binance.com/en/glossary/blockchain" target='blank'>
              Blockchain</a>
            </div>
          </div>
        </div>

        <div  className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div style={{border: '3px solid black'}} className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div  className="flex justify-between flex-col w-full h-full">
              <div  className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div style={{border: '3px solid black',color: 'black'}} className="p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism">
            <Input style={{color: "white"}} placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input style={{color: "white"}} placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input style={{color: "white"}} placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input style={{color: "white"}} placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button style={{background: 'black'}}
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Welcome;
