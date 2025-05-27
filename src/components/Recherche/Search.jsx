import React from 'react'
import '../Recherche/style.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5
    px] relative p-2'>
        <input type="text" placeholder='Cherchez de produits, une marque ou une catégorie' className='w-full h-[35px] focus: outline-none bg-inherit p-2 text-[15px]' />
         <Button className='!absolute top-[5px] right-[8px] z-50 w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-[#000] text-[22px]'><IoSearch className='text-black' /></Button>
    </div>
  )
}



export default Search