// import blog from "../../assets/Blogs.jpg"
import { useDispatch, useSelector } from 'react-redux';
import'./post.css'
import { useEffect } from 'react';
import { allBlogApi } from '../../Store/BlogSlice';
import { map } from "lodash";
import moment from 'moment/moment';
function Post({img}) {

  const dispatch = useDispatch();

  const { allblogs } = useSelector((state) => state.blogs);
  console.log(allblogs);

  

    useEffect(() => {
      dispatch(allBlogApi());
  },[dispatch]);


  return (
    <div className='postcontainer'>
      {/* {allblogs.map((blog)=>( */}
     {map(allblogs,(blog)=>
    
      <div className="post">
      <img
        className="postimg"
        src={img}
        alt=""
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">
              Music
          </span>
          <span className="postcat">
              Life
          </span>
        </div>
        <span className="posttitle">
            {blog.title}
        </span>
        <hr />
        <span className="postdate">{moment(blog.createdAt).format('DD/MM/YYYY')}</span>
      </div>
      <p className="postdesc">
        {blog.content}
      </p>
    </div>
      )}
    </div>
  )
}

export default Post
