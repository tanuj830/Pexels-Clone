import React from 'react'
import '../styles/Home.module.css'
import Link from 'next/link'
import {RiPixelfedLine} from 'react-icons/ri'
import {MdOpenInNew} from 'react-icons/md'
const axios = require("axios");
import {useEffect} from 'react'

const Header = () => {
    const [data, setData] = React.useState([])
    const [randomData, setRandomData] = React.useState([])
    const [input, setInput] = React.useState("")
  
    
    useEffect(() => {
        
        axios.get(`https://api.pexels.com/v1/curated`,{
            headers:{
              Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
            }
          }).then(res=>setRandomData(res.data.photos)).catch(err=>console.log(err))
    }, [])
    

    const handleChange = (e) =>{
      setInput(e.target.value)
    }


    const handleSubmit = ()=>{
      axios.get(`https://api.pexels.com/v1/search?query=${input}`,{
        headers:{
          Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
        }
      }).then(res=>setData(res.data.photos)).catch(err=>console.log(err))
    }



  return (<>
    <div className='container-fluid-header py-2'>
        <div className='container'>
           <div className='row '>
           <div className='col-3 col-md-4 d-flex align-items-center '>
          <h1   className=' hoverlink d-flex align-items-center fs-3' style={{ cursor:"pointer"}}> <span><RiPixelfedLine/></span>Pixels</h1>

           </div>

           {/* <div className='col-9 d-flex justify-content-end col-md-8'>
                <div>
                         <Link className='text-decoration-none text-dark' href="/">Sign-in</Link>
                </div>
           </div> */}
           </div>
        </div>
        
        
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
              <div className='col-md-6 col-12'>
              <h3 className='p-4 text-light fs-1 mt-5' >The best free stock photos, royalty free images & videos shared by creators.</h3>
              </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-8 col-12 d-flex justify-content-center align-items-center py-5'>
                <input className='w-75 p-2 ' style={{borderRadius:10, color:"grey", border:"solid white 2px"}} placeholder='Search for free photos' onChange={handleChange} type="text" />
    <button className='py-2 btn btn-success mx-2' style={{borderRadius:10}} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    
    </div>


{/* Searched photos */}
    <div className='container'>
<div className='row mt-5'>
{
  data.length > 0 ?
  data.map(con=>(
  <div key={con.id} className='col-12 col-md-4 mt-5'>
    <div className='box'>
    <img className='img-fluid original_img' src={con.src.original} alt="" />
    <div className='author_name d-flex justify-content-between'>
    <h1 className='lead '>{con.photographer}</h1>
    <a href={con.src.original}><button className='downloadBtn' ><MdOpenInNew /></button></a>
    </div>
    </div>
    </div>
  )): null
}  
</div>
</div>


{/* Random pictures */}
<div className='container'>
    <h3 className='text-center fs-1 text-secondary lead'>Random Curated Pictures</h3>
<div className='row mt-5'>
{
  randomData.length > 0 ?
  randomData.map(con=>(
  <div key={con.id} className='col-12 col-md-4 mt-5'>
    <div className='box'>
    <img className='img-fluid original_img' src={con.src.original} alt="" />
    <div className='author_name d-flex justify-content-between'>
    <h1 className='lead '>{con.photographer}</h1>
    <a href={con.src.original}><button className='downloadBtn' ><MdOpenInNew /></button></a>
    </div>
    </div>
    </div>
  )): null
}
</div>
</div>
</>
  )
}

export default Header