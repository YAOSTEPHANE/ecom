import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Sidebar = () => {
  return (
    <aside className='sidebar py-5'>
        <div className='box'>
           <h3 className='mb-3 text-[18px] font-[600]'>Achetez par Categorie</h3>
           <div className='scroll'>
            <FormControlLabel control={<Checkbox />} label="Mode" />
            <FormControlLabel control={<Checkbox />} label="Electroniques" />
            <FormControlLabel control={<Checkbox />} label="Hygiène" />
            <FormControlLabel control={<Checkbox />} label="Maison" />
            <FormControlLabel control={<Checkbox />} label="Electromanagers" />
            <FormControlLabel control={<Checkbox />} label="Informatique" />
            <FormControlLabel control={<Checkbox />} label="Beauté" />
            <FormControlLabel control={<Checkbox />} label="Bureau" />
           </div>
        </div>
    </aside>
  )
}

export default Sidebar;