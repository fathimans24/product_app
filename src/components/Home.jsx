import React, { useEffect, useState } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import axios from 'axios';
import { Grid } from '@mui/material';

const Home = () => {
    // const rows = [
    //     {
    //         empID: 1,
    //         name: "John Doe",
    //         dept: "Marketing",
    //         location: "finland"
    //     },
    //     {
    //         empID: 2,
    //         name: "Jane Smith",
    //         dept: "Sales",
    //         location: "London"
    //     },
    //     {
    //         empID: 3,
    //         name: "Susan Lee",
    //         dept: "IT",
    //         location: "San Fransisco"
    //     }
    // ]


    const [products, setProducts] = useState([]);
    
    //connecting external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);   //users is the array name in dummyjson data
        })
    },[])
    
    return (
        // <TableContainer component={Paper}>
        //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell sx={{fontWeight: 'bold'}} align="center">Title</TableCell>
        //                 <TableCell sx={{fontWeight: 'bold'}} align="center">Price</TableCell>
        //                 <TableCell sx={{fontWeight: 'bold'}} align="center">Image</TableCell>
        //                 <TableCell sx={{fontWeight: 'bold'}} align="center">Rate</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {products.map((row) => (
        //                 <TableRow
        //                     key={row.title}
        //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                 >
        //                     <TableCell component="th" scope="row">
        //                         {row.title}
        //                     </TableCell>
                            
        //                     <TableCell align="center">{row.price}</TableCell>
        //                     <TableCell align="center"><img src={row.image} width="100" height="100"/></TableCell>
        //                     <TableCell align="center">{row.rating.rate}</TableCell>

        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>


<Grid container spacing={2}>
        {products.map((product)=>(
          <Grid item xs={12} sm={6} md={4} key={product.title}>
          <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
        
          <CardMedia
            
            sx={{height: 250}}
            image={product.image}
            alt="product"
            title={product.title}
          />
          <CardContent sx={{flex: '1 0 auto'}}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.price}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.rating.rate}
            </Typography>
          </CardContent>
        
      </Card>
  </Grid>
            
        ))}
        </Grid>
        
    )
}

export default Home