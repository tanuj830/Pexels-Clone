import React from 'react'
import '../styles/Home.module.css'
import Link from 'next/link'
import {RiPixelfedLine} from 'react-icons/ri'
import {MdOpenInNew} from 'react-icons/md'
const axios = require("axios");
import {useEffect} from 'react'

const Header = () => {
    const [data, setData] = React.useState({})
    const [randomData, setRandomData] = React.useState({})
    const [input, setInput] = React.useState("")
    const [count, setCount] = React.useState(1)
  
    
    useEffect(() => {
        
        axios.get(`https://api.pexels.com/v1/curated`,{
            headers:{
              Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
            }
          }).then(res=>setRandomData(res.data)).catch(err=>console.log(err))
        }, [])


    const handleChange = (e) =>{
      setInput(e.target.value)
    }
  
    const handlePreviousSearched = () =>{

      axios.get(data.prev_page,{
                headers:{
                  Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
                }
              }).then(res=>setData(res.data)).catch(err=>console.log(err))
        console.log(data)
      }
      
      const handleNextSearched = () =>{
      axios.get(data.next_page,{
                headers:{
                  Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
                }
              }).then(res=>setData(res.data)).catch(err=>console.log(err))
        console.log(data)
      
    }


    // Curated Page Pagination
    const handlePreviousRand = () =>{

      axios.get(randomData.prev_page,{
                headers:{
                  Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
                }
              }).then(res=>setRandomData(res.data)).catch(err=>console.log(err))
        console.log(data)
      }
      
      const handleNextRand = () =>{
      axios.get(randomData.next_page,{
                headers:{
                  Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
                }
              }).then(res=>setRandomData(res.data)).catch(err=>console.log(err))
        console.log(data)
      
    }


    const handleSubmit = ()=>{
      axios.get(`https://api.pexels.com/v1/search?query=${input}`,{
        headers:{
          Authorization: 'E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL'
        }
      }).then(res=>setData(res.data)).catch(err=>console.log(err))
      console.log(data)
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
  data.photos ?
  data.photos.map(con=>(
  <div key={con.id} className='col-12 col-md-4 mt-3'>
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

{
  data.photos ?
  <div className='d-flex justify-content-center align-items-center p-3 mt-3'>
<ul className="pagination">
  {/* Pagination */}
    <li className="page-item" onClick={handlePreviousSearched}><a className="page-link text-secondary" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link text-secondary" href="#">{data.page}</a></li>
    <li className="page-item" onClick={handleNextSearched}><a className="page-link text-secondary" href="#">Next</a></li>
  </ul>
  </div>
  : null
}
</div>
</div>


{/* Random pictures */}
<div className='container'>
    <h3 className='text-center fs-1 text-secondary lead'>Random Curated Pictures</h3>
<div className='row mt-5'>
{
  randomData.photos ?
  randomData.photos.map(con=>(
  <div key={con.id} className='col-12 col-md-4 mt-3'>
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
{
  randomData.photos ?
  <div className='d-flex justify-content-center align-items-center p-3 mt-3 '>
    <ul className="pagination">
  {/* Pagination */}
    <li className="page-item " onClick={handlePreviousRand}><a className="page-link text-secondary" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link text-secondary" href="#">{randomData.page}</a></li>
    <li className="page-item" onClick={handleNextRand}><a className="page-link text-secondary" href="#">Next</a></li>
  </ul>
  </div>
  : null
}
</div>
</div>
</>
  )
}

export default Header