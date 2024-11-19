import React, { useState } from 'react';
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';



function Currency () {

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

   let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
   let API_KEY = "fca_live_lk0QWNCqzAghh795Rd1vWB8m9yVyMqXdNRWC3IoL";
   
  
  const exchange = async ()=>{
     const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
   const result = (response.data.data[toCurrency]) * amount;
    setResult(result);

  }

    return ( 
        <div className='currency-div'>
            <div style={{marginTop:'-20px', backgroundColor:'goldenrod',fontSize:'25px', fontFamily:'arial', width:'100%', textAlign:'center', height:'50px' ,paddingBottom:'1.2rem'}}>
                <h3> CURRENCY APP </h3>
            </div>
            <div style={{marginTop:'50px'}}>
                <input 
                 value={amount} onChange={(e) => setAmount(e.target.value)}
                 type='number' className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '25px', marginRight: '10px', color: 'black' }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />
            </div>
            <div>
            <button 
            onClick={exchange}
             className='exchange-button'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency