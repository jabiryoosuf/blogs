import {MdAddCircle} from "react-icons/md"
import './write.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AddBlogApi } from "../../Store/BlogSlice"

const Write = () => {

    const [createblog,setCreateblog]=useState({})
    console.log(createblog);
    const dispatch=useDispatch()
    const navigate=useNavigate()
  
    const handleLoginSubmit=(e)=>{
      e.preventDefault()
      dispatch(AddBlogApi({createblog,navigate}))
    }
  return (
    <div className='write'>
        <img  className="writeimg" src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <div className="writeform">
        <label htmlFor="fileinput">
            <MdAddCircle className="writeicon"/>
        </label>
        <input  type="file" id='fileinput'style={{display:"none"}} />
        <input onChange={(e) => setCreateblog({...createblog,title:e.target.value })} type="text" placeholder='title'className="writeinput" autoFocus={true} />
      </div>
      <div className="writeformgroup">
        <textarea onChange={(e) => setCreateblog({...createblog,content:e.target.value })} placeholder="Tell your story..." type="text" className="writeinput writttext"></textarea>
      </div>
      <button onClick={handleLoginSubmit} className="writesubmit">Publish</button>
    </div>
  )
}


export default Write;
