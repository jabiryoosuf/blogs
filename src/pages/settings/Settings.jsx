import Sidebar from '../../components/sidebar/Sidebar'
import'./settings.css'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingswrapper">
           <div className="settingstitle">
            <span className="settingsupdatetitile">update your account</span>
            <span className="settingsdeletetitle">delete account</span>
            </div> 
            <form  className="settingform">
                <label>Profile Picture</label>
                <div className="settingspp">
                    <img  className='' src="" alt="" />
                    <label htmlFor="fileinput">

                    </label>
                    <input type="file" style={{display:"none"}} />
                </div>
                <label htmlFor="">username</label>
                <input type="text"placeholder='username' />
                <label htmlFor="">Email</label>
                <input type="email"placeholder='username' />
                <label htmlFor="">Password</label>
                <input type="password"placeholder='username' />
                <button className='settingssubmit'>update</button>
            </form>
        </div>
      <Sidebar/>
    </div>
  )
}

export default Settings
