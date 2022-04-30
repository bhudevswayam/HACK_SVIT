import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";

import logo from "../../images/finallogo.png";

// const style = {
//   display: 'flex',
//    color: '#e1a730',
//   // Adding media query..
//   '@media (max-width: 500px)': {
//     color: "white"
//   },
// };


// const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

{/* <button onClick={connectWallet}>suvmit</button> */}
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav style={{width: '100%',height: '100px',backgroundColor: 'black'}} className="w-full flex md:justify-center justify-between items-center p-4">
      <div style={{display: 'flex',padding: "10px"}}  className="md:flex-[0.5] sm:w-1020 flex-initial justify-center items-center">
        <img style={{width: "50px",position: "absulute",right: "100%"}}  src={logo} alt="logo" className="w-32 cursor-pointer" />
        <h1 style={{padding: "20px",fontSize: "40px",fontFamily: "'Brush Script MT', cursive",color: 'white'}}>Cranberry Crypto</h1>
      </div>
      <ul style={{fontWeight: "bolder",padding: "50px"}} className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
        <li style={{color: "white",padding: "5px",fontSize: "20px"}}><a href="https://ethereumprice.org/live/" target="blank">Market</a></li>
        <li style={{color: "white",padding: "5px",fontSize: "20px"}}>Develpors</li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <a href="https://metamask.io/" target="blank">Login</a>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {/* {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )} */}
            <li style={{color: "white",padding: "5px",fontSize: "25px"}}><a href="https://ethereumprice.org/live/" target="blank">Market</a></li>
            <li style={{color: "white",padding: "5px",fontSize: "25px"}}>Develpoers</li> 
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
