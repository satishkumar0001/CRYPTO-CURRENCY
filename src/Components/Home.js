import axios from 'axios';
import React,{useState,useEffect} from 'react'
import ImgCard from './ImgCard';

const Home = () => {
    const [search,setsearch] = useState("");
    const [data,setdata] = useState([]);
    const handler = e=>{
        setsearch(e.target.value);
    }

    useEffect(()=>{
        axios.get(`https://api.coinstats.app/public/v1/coins?skip=0`).then(
            res=> setdata(res.data.coins)
        )
    },[])
    
  return (
    <>
    <div className='header'>
        <input value={search} onChange={handler} placeholder='Search for Crypto'/>
    </div>
    {data.length>0 && 
        <div className='grid-container'>
            {data.filter(crypto=>
            crypto.name.toLowerCase().includes(search.toLowerCase())
            ).
            map(crypto =>
            <div>
                <ImgCard name={crypto.name}
                rank={crypto.rank}
                price={crypto.price} 
                marketCap={crypto.marketCap} url={crypto.icon} key={crypto.id}
                />
            </div>
                )}
        </div>
    }
    </>
  )
}

export default Home
