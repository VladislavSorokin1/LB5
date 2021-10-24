import React from "react";

const Card1 = (props) => {
    return (
            <div className="card">
                <b>{props.card.title}</b>
                <div className="link">
                    <li>
                        <a href="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"> {props.txt} </a>
                    </li>
                    <li>
                        <a href="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"> {props.txt2} </a>
                    </li>
                </div>
                
                <div>
                    {props.card.body}
                </div>
                <div>
                <div className="button">
                    <button>Кнопка</button>
                </div>
            </div>
        </div>
    )
}

export default Card1;