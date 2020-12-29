import * as axios from 'axios';

const ApiKey = '39AMAXPX2GJYQGXHV5TPG29A7GSQWEQ892';
const address = '0xA145ac099E3d2e9781C9c848249E2e6b256b030d';

const instance = axios.create({
	baseURL: 'https://api.etherscan.io/',
});

//Get users balance and ether last price
export const userAPI = {
	getEtherLastPrice(){
		 return instance.get(`api?module=stats&action=ethprice&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data
     })}, 
     
	getBalance(){
		 return instance.get(`api?module=account&action=balance&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data
		 })
		}
};

//Get all tokens
export const tokenAPI = {
  usdCoin() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  tether() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  IDKToken() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0x61fd1c62551850d0c04c76fce614cbced0094498&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  kickToken() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  livepeerToken() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0x58b6a8a3302369daec383334672404ee733ab239&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  saiStablecoin() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  loopringCoin() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0xbbbbca6a901c926f240b89eacb641d8aec7aeafd&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  hexToken() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0x2b591e99afe9f32eaa6214f7b7629768c40eeb39&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  },
  ebakusToken() {
    return instance.get(`api?module=account&action=tokenbalance&contractaddress=0xbddab785b306bcd9fb056da189615cc8ece1d823&address=${address}&tag=latest&apikey=${ApiKey}`)
		 .then(response=>{
		 	return response.data.result
		 })
  }
};