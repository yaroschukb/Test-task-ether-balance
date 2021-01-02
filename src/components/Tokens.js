import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { tokenAPI } from '../api/api';
import TableOfTakens from './TableOfTakens';

const Tokens = () => {  
const [open, setOpen] = useState(false); // open/close table
const [result, setResult] = useState({});

  useEffect( () => {
    async function fetchData (){
    const USDC = await tokenAPI.usdCoin();
    const USDT = await tokenAPI.tether();
    const IDK = await tokenAPI.IDKToken();
    const KICK = await tokenAPI.kickToken();
    const SAI = await tokenAPI.saiStablecoin();
    const LPT = await tokenAPI.livepeerToken();
    const LRC = await tokenAPI.loopringCoin();
    const HEX = await tokenAPI.hexToken();
    const EBK = await tokenAPI.ebakusToken();
    setResult({
      "USDC": USDC,
      "USDT": USDT,
      "IDK": IDK,
      "KICK": KICK,
      "SAI": SAI,
      "LPT": LPT,
      "LRC": LRC,
      "HEX": HEX,
      "EBK": EBK,
    })
  };
  fetchData ();
  }, []);

  
  return (
    <>
    <Button size="large" onClick={()=>setOpen(!open)}>
      Get All Token Balance
    </Button>
    {!open ? "" : <TableOfTakens  result={result} />}
    </>
  );
};

export default Tokens;
