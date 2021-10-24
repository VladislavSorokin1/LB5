import React from "react";

const Navichki = (props) => {
    return (
            <div className="navichki">
                <div>
                <div className="text1">
                 <b>{props.navichki.title}</b> {props.navichki.id}
                    <ul>
                        <li>
                             {props.navichki.listBody}
                         </li>
                         <li>
                            {props.navichki.listBody1}
                         </li>
                         <li>
                            {props.navichki.listBody2}
                         </li>
                         <li>
                            {props.navichki.listBody3}
                         </li>
                         <li>
                            {props.navichki.listBody4}
                         </li>
                         <li>
                            {props.navichki.listBody5}
                         </li>
                        
                    </ul>
                </div>
                <div className="button">
                    <button>Кнопка</button>
                </div>
            </div>
        </div>
    )
}

export default Navichki;