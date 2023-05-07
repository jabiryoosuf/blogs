import {MdAddCircle} from "react-icons/md"
import './write.css'

const Write = () => {
  return (
    <div className='write'>
        <img  className="writeimg" src="" alt="" />
      <div className="writeform">
        <label htmlFor="fileinput">
            <MdAddCircle className="writeicon"/>
        </label>
        <input type="file" id='fileinput'style={{display:"none"}} />
        <input type="text" placeholder='title'className="writeinput" autoFocus={true} />
      </div>
      <div className="writeformgroup">
        <textarea placeholder="Tell your story..." type="text" className="writeinput writttext"></textarea>
      </div>
      <button className="writesubmit">Publish</button>
    </div>
  )
}

export default Write
