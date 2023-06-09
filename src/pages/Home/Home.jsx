import'./Home.css'
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <Header/>
      <div id='home' className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Home
