import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import DashTitle from './DashTitle';


async function fetchStockData(){

  ///------------------------------------------Fetch Made for CoinRanking-------------------------------/////
  const url = 'https://api.coinranking.com/v2/coins';
  const options = {
    headers: {
      'x-access-token': 'coinrankingc41b1b348020369aa458bf4341ba6faccac3c470db9bb7e8',
    },
  };
  
  const response = await fetch(url, options);
  const result = await response.json()
  console.log(result)
  const coins = result.data.coins.map((coin, index) => ({
    index: index+1,
    id: coin.uuid,
    symbol: coin.symbol,
    name: coin.name,
    price: parseFloat(coin.price), // use the 'c' key for the current price
    volume: parseFloat(coin['24hVolume']) //  这里报错可能是整除的问题,因为本来的数字是String，所以无法进行//Float运算。
  }));
  return coins
  // //because this is async function, this becomes promise again
  /////////-----------------------Fetch Made for CoinRanking--------------------------------------///////////
  // // Quote
  

}



export default function Dashboard() {

  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchStockData().then((coins) => {
      console.log(coins)
      setRows(coins)
    })
    .catch((error) => {
      console.error(error)
    });
  }, []);

  const columns = [
    {field: 'index', headerName: '#', width:60},
    {field: 'symbol', headerName: 'Symbol', width:150},
    {field: 'name', headerName: 'Name', width:200},
    {field: 'price', headerName: 'Price', width:390},
    {field: 'volume', headerName: 'Volume', width:390},
  ];

/** here we've missing the values for Price and Volume because the JSON Object
 ** we returned does not have a key called 'Price' nor 'Volume'. 
 */

  return (
      <Box sx={{ height: 750, width: '100%', justifyContent: 'center'}}>
        
        <DashTitle></DashTitle>

        <Box sx= {{ 
          width: '250px', 
          position:'relative', 
          left:'15%', 
          top:'2%'}}> 
          <Autocomplete options={rows.map(coin => coin.name)} renderInput={(params) => <TextField {...params} label='Search' sx={{ textEmphasisColor: 'white'}}/>}/>
        </Box>

        <DataGrid 
          sx={{
            position: 'relative',
            top: '4%',
            alignContent: 'center',
            height: '2800px',
            width: '70%',
            left: '15%',
            borderRadius: '20px',
            backgroundColor: 'transparent',
            boxShadow: '2',
            borderColor: 'white', 
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
            color: 'black', //text color
            background: 'rgba(255, 255, 255, 0.5)',
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 50,
              },
            },
          }}
          pageSizeOptions={[15]}giv
          disableRowSelectionOnClick
        />
      </Box>
  );
}