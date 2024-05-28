import React from 'react';
import { motion } from 'framer-motion';
import { SlCalender } from "react-icons/sl";


const Navbar = () => {
  const navigate = (path) => {
    window.location.href = path;
  }
  return (
    <div className="container_Navbar">
      <nav className="navbar">
        <div className='logo'>
          <h1>PLSE</h1>
        </div>
        <div className='Navbar_rest'>
          <div className='Navbar_rest_1' >
            <button>Summary</button>
            <button>Balance Sheet</button>
            <button>Income Statement</button>
            <button> Cashflow</button>
            <button> +</button>
          </div>
          <div className='Navbar_rest_2'>
            <button>Normal View</button>
            <button>Growth View</button>
            <button> Period From <SlCalender /></button>
            <button>  Period To <SlCalender /></button>
          </div>
        </div>

      </nav>
    </div>

  );
}

export default Navbar;
