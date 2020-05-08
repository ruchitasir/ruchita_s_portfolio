import React,{useState} from 'react';
import Post from './Post';

const Blog= props=> {
   
        let posts = props.posts.map((post,i)=>{
                return(
                    <Post key={i} title={post.title} body={post.body} index={i} delt={props.delt}/>
                )
            })
        let [newTitle, setNewtitle] = useState('');
        let [newBody, setNewBody] = useState('');
        
        const handleSubmit=(e)=>{
        setNewtitle('')
        setNewBody('')
        e.preventDefault()
        if(newTitle){
            props.addBlogPost(newTitle,newBody)
        }
        else{
            console.log("title is empty")
        }
       
    }




   return(
          <div>
              <h1 className="blogH1">My blogs so far!</h1>
              <ul>
                    {posts}
              </ul>
              <h2>Add a new blog</h2>
              <form onSubmit={handleSubmit}>
                  <label>Title:</label>
                        <input type="text"  placeholder="Title of the post" value={newTitle} onChange={e=> setNewtitle(e.target.value)} required/>
                  <div> 
                  <label>Description</label>
                        <input  type="text"  placeholder="Description of the post" value={newBody} onChange={e=> setNewBody(e.target.value)} required/>
                  </div>
                  <button type="submit">Add a new post</button>  
              </form>
          </div>
          )
    }

export default Blog