import React from "react";

const Post = (props) => {
    return (
            <div className="post">
                <b>{props.post.title}</b>
                <div>
                    <div className="text1">
                        {props.post.body}
                    </div>
                <div className="button">
                    <button>Моє фото</button>
                   <li>
                       <a href="google.com"></a>
                   </li>
                </div>
            </div>
        </div>
    )
}

export default Post;