import React from 'react';

const Post= props=> {
   return(
          <div>
              <li>
                        <h2> {props.title} </h2>
                        <h3> {props.body}</h3>
                        <button onClick={()=>props.delt(props.index)}>Remove this post</button>
                        <hr/>
             </li>
          </div>
        )
    }

export default Post