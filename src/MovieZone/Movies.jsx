import React, { useState } from 'react'
import {movies} from './data.js'

const Movies = () => {
    
    const [movieList,setMovieList] = useState(movies)
  return (
    
    <>
    <div className="my-3 bg-dark" style={{width:'1000px',margin:'auto'}}>
<button type="button" className="btn btn-outline-primary mx-3">Primary</button>
<button type="button" className="btn btn-outline-secondary mx-3">Secondary</button>
<button type="button" className="btn btn-outline-success mx-3">Success</button>
<button type="button" className="btn btn-outline-danger mx-3">Danger</button>
<button type="button" className="btn btn-outline-warning mx-3">Warning</button>
<button type="button" className="btn btn-outline-info mx-3">Info</button>
<button type="button" className="btn btn-outline-light mx-3">Light</button>
<button type="button" className="btn btn-outline-dark mx-3">Dark</button>
    </div>
    


    <div 
    style= {{display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        // gap:'2rem',
        textAlign:'center',
        width:'1300px',
        // backgroundColor:'yellow',
        margin:'auto',
        marginTop:'1.5rem'


    }}>
        
       {movieList.map((data) =>(
        <div key = {data.id} style={{maxWidth:'280px'}}>
            <div style={{padding:'10px '}} className='hover_effect'>
                <img src ={data.poster_path} alt=""
                 style={{width:'200px',
                    height:'280px', 
                    borderRadius:'10px',
                    border:'1px solid yellow',
                }} />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
        </div>

       ))}
    </div>

    </>
  )
}

export default Movies