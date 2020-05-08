import React,{useState} from 'react';
import { Route, Router } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Projects from './pages/Projects';

const Content= props=> {
    let [posts, setPosts] = useState([
        {title: 'Machine Learning', body: 'ML stub'},
        {title: 'React' , body: 'React stub'},
        {title:'Python' , body: 'Python stub'},
        {title: 'Typescript' , body: 'Typescript stub' },
    ])

    const addBlogPost=(titleT,bodyT)=>{
      
        setPosts([...posts,{title:titleT, body: bodyT}])
    }

    const delt=(index)=>{
        console.log('delete index',index)
        let currentPosts = [...posts]
        currentPosts.splice(index,1)
        setPosts(currentPosts) 
    }
          

   return(
          <div>
             <Route exact path='/' component={Home}/>
             <Route  path='/blog' render={()=>
                 <Blog posts={posts} addBlogPost={addBlogPost} delt={delt} /> 
                 }/>
             <Route  path='/about' component={About}/>
             <Route  path='/projects' component={Projects}/>
         </div>
          )
    }

export default Content
