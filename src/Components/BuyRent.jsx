import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BuyRent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className='bg-cyan-900
   bg-opacity-80
   text-white
   w-1/2
   mx-auto
   px-10
   rounded-md
   '>
       <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='ms-44' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Buy" {...a11yProps(0)} />
          <Tab label="Rent" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className='flex'>
          <input type="search" className='w-full h-16 rounded-lg relative' /> 
          <p className='bg-red-600 absolute right-96 h-16 flex items-center justify-center rounded-lg px-6 '>Search</p></div>
       <div className='flex gap-3'>
       <select className=" select outline-0 border-0 mt-2 bg-cyan-900
       bg-opacity-80   text-black bg-">
                      <option selected className='mt-2'><input type="radio" name="radio-4" className="radio radio-accent" checked />All Residential</option>
                      <option className='mt-2'>Condo</option>
                      <option>
                       Detached House</option>
                      <option disabled className='text-gray-500' >Townhouse</option>
                      <option>Land</option>
                      <option>Apartment</option>
                      </select>
       <select className=" select outline-0 border-0 mt-2 bg-cyan-900
       bg-opacity-80   text-black bg-">
                      <option selected className='mt-2'><input type="radio" name="radio-4" className="radio radio-accent" checked />Any Price</option>
                      <option className='mt-2'>Condo</option>
                      <option>
                       Detached House</option>
                      <option disabled className='text-gray-500' >Townhouse</option>
                      <option>Land</option>
                      <option>Apartment</option>
                      </select>
       <select className=" select outline-0 border-0 mt-2 bg-cyan-900
       bg-opacity-80   text-black bg-">
                      <option selected className='mt-2'><input type="radio" name="radio-4" className="radio radio-accent" checked />Bedroom</option>
                      <option className='mt-2'>Condo</option>
                      <option>
                       Detached House</option>
                      <option disabled className='text-gray-500' >Townhouse</option>
                      <option>Land</option>
                      <option>Apartment</option>
                      </select>
       </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className='flex'>
          <input type="search" className='w-full h-16 rounded-lg relative' /> 
          <p className='bg-red-600 absolute right-96 h-16 flex items-center justify-center rounded-lg px-6 '>Search</p></div>
       <div className='flex gap-3'>
       <select className=" select outline-0 border-0 mt-2 bg-cyan-900
       bg-opacity-80   text-black bg-">
                      <option selected className='mt-2'><input type="radio" name="radio-4" className="radio radio-accent" checked />All Residential</option>
                      <option className='mt-2'>Condo</option>
                      <option>
                       Detached House</option>
                      <option disabled className='text-gray-500' >Townhouse</option>
                      <option>Land</option>
                      <option>Apartment</option>
                      </select>
       <select className=" select outline-0 border-0 mt-2 bg-cyan-900
       bg-opacity-80   text-black bg-">
                      <option selected className='mt-2'><input type="radio" name="radio-4" className="radio radio-accent" checked />Any Price</option>
                      <option className='mt-2'>Condo</option>
                      <option>
                       Detached House</option>
                      <option disabled className='text-gray-500' >Townhouse</option>
                      <option>Land</option>
                      <option>Apartment</option>
                      </select>
       <select className=" select outline-0 border-0 mt-2 bg-cyan-900
       bg-opacity-80   text-black bg-">
                      <option selected className='mt-2'><input type="radio" name="radio-4" className="radio radio-accent" checked />Bedroom</option>
                      <option className='mt-2'>Condo</option>
                      <option>
                       Detached House</option>
                      <option disabled className='text-gray-500' >Townhouse</option>
                      <option>Land</option>
                      <option>Apartment</option>
                      </select>
       </div>
      </CustomTabPanel>
    </Box>
   </div>
  );
}