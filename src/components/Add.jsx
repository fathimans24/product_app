import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#333333',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#555555',
  },
}));

const Add = () => {
  const [product, setProduct] = useState({
    Title: '',
    Productprice: '',
    ProductRate: ''
  });

  const [errors, setErrors] = useState({});

  const fetchValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    
    // Title validation: check if not empty and only contains alphabetic characters
    if (!product.Title) {
      newErrors.Title = 'Title is required';
    } else if (!/^[a-zA-Z\s]*$/.test(product.Title)) {
      newErrors.Title = 'Title must contain only alphabetic characters';
    }

    // Product price validation: must be a positive number
    if (!product.Productprice || isNaN(product.Productprice) || product.Productprice <= 0) {
      newErrors.Productprice = 'Price must be a positive number';
    }

    // Product rate validation: must be between 0 and 5
    if (!product.ProductRate || isNaN(product.ProductRate) || product.ProductRate < 0 || product.ProductRate > 5) {
      newErrors.ProductRate = 'Rate must be between 0 and 5';
    }

    return newErrors;
  };

  const sendData = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Product details:', product); // Log product details on successful validation
      setErrors({}); // Clear errors on successful submission
      // You can add your data submission logic here
    }
  };

  return (
    <div>
      <h2 style={{ paddingTop: "50px", color: "white" }}>New Product</h2>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name='Title'
          onChange={fetchValue}
          error={!!errors.Title}
          helperText={errors.Title}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white', // Text color
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color
            },
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color when focused
            },
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: background color for better contrast
          }}
        /><br />

        <TextField
          id="filled-basic"
          label="Product Price"
          variant="outlined"
          name='Productprice'
          onChange={fetchValue}
          error={!!errors.Productprice}
          helperText={errors.Productprice}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white', // Text color
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color
            },
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color when focused
            },
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: background color for better contrast
          }}
        /><br />

        <TextField
          id="standard-basic"
          label="Product Rate"
          variant="outlined"
          name='ProductRate'
          onChange={fetchValue}
          error={!!errors.ProductRate}
          helperText={errors.ProductRate}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white', // Text color
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color
            },
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color when focused
            },
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: background color for better contrast
          }}
        /><br />
          <Button
                
                 style={{ backgroundColor: "yellow", color: "black" }}
                 variant="contained"
                 onClick={sendData}
               >
                 Add
               </Button>
       
      </Box>
    </div>
  );
};

export default Add;
