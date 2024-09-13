// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blogItemContainer">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />
        <div className="item-info">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={`author${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
