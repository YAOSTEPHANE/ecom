import React, { useState } from 'react'
import "../Sidebar/style.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button"

const Sidebar = () => {

    const [isOpenCategoryFilter, SetIsOpenCategoryFilter] = useState(true)

  return (
    <aside className='sidebar py-5'>
        <div className='box'>
           <h3 className='w-full mb-3 text-[18px] font-[600] flex items-center pr-5'>Achetez par Categorie
            <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto' onClick={() => SetIsOpenCategoryFilter(!isOpenCategoryFilter)}><FaAngleDown /></Button>
           </h3>
           <Collapse isOpened={isOpenCategoryFilter}>
           <div className='scroll px-3 relative -left-[-10px]'>
            <FormControlLabel control={<Checkbox size='small' />} label="Mode" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Electroniques" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Hygiène" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Maison" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Electromanagers" className='w-full' />
            <FormControlLabel control={<Checkbox  size='small'/>} label="Informatique" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Beauté" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Bureau" className='w-full' />
           </div>
           </Collapse>
        </div>
    </aside>
  )
}

export default Sidebar;