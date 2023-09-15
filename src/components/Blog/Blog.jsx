import PropTypes from 'prop-types';
import { FaBookOpen } from 'react-icons/fa';
import { FiDollarSign } from "react-icons/fi";

const Blog = ({ blog,handleAddTOBookmark }) => {
  const { course_name, img, course_details, price, credit } = blog
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className='p-2'><img className='h-full w-full' src={img} alt={`coursename:${course_name}`} /></figure>
      <div className="card-body p-2">
        <h2>{course_name}</h2>
        <p>{course_details}</p>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'> <FiDollarSign /> Price: {price}</div>
          <div className='flex items-center gap-4'><FaBookOpen /> Credit: {credit} hr</div>
        </div>
        <div className="card-actions justify-center">
          <button onClick={handleAddTOBookmark} className="btn btn-primary w-full">Select</button>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;