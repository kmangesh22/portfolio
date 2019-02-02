import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Icon} from 'antd'
import 'antd/dist/antd.css';
import "../sass/posts.scss"

const posts=[
  {
    id:1,
    title:"Intro To Regular Expression",
    posted_date:"26 Jan 2019",
    image:`${process.env.PUBLIC_URL}/regex.png`,
    category:"Regular Expression",
    content:"This tutorial is to give you an introduction to Regular Expression. You’ll start with the theories behind these concepts.",
  },
]
//route define what component to render when a link is clicked
//match.path refers to the path pattern used to match in the route path prop
export default function Posts({match}){
  const listItems = posts.map((post) =>
    <Link to={`${match.url}/${post.id}`}>
      <Post title={post.title} image={post.image} category={post.category} date={post.posted_date} content={post.content} />
    </Link>
  );
  return(
    <div>
      <PostHeader/>
      <div style={{backgroundColor:"white"}}className="posts">
        <Route path={`${match.path}/:postId`} component={Topic} />
        <Route exact path={match.path} render={()=><h1>please select a post</h1>}/>
        {listItems}
      </div>
    </div>
  );
}
function Topic({match}){
  let content=posts.filter(post=>(
    post.id===Number(match.params.postId)
  ))
  return(
    <p>{content[0].content}</p>
  );
}

function Post(props){
    return(
      <div class="post">
        <img class="post-image" src={props.image} alt=""></img>
        <a class="post-body" style={{display:"block"}} href="#">
          <span class="post-category">{props.category}</span>
          <span class="post-date">{props.date}</span>
          <h2 class="post-title">{props.title}</h2>
          <p class="post-content">
            {props.content}
          </p>
        </a>
      </div>
    );
}
function PostHeader(){
  return(
    <header>
      <h1>Blog</h1>
      <h2>Computer Science and Technology tutorials and articles.</h2>
      <div class="logo">
        <Icon style={{fontSize:"40px"}} type="youtube" />
        <Icon style={{fontSize:"40px"}} type="instagram" />
        <Icon style={{fontSize:"40px"}} type="facebook" />
      </div>
    </header>
  );
}
