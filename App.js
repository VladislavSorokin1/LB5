import React from "react";
import Post from "./components/Post";
import Navichki from "./components/Navichki";
import Card1 from "./components/Card1";
import "./styles/App.css"


function App() {
  return (
      <div className="App">
          <Post post={{
              id: 1,
              title: "Я Сорокін Владислав",
              body: "Я Сорокін Владислав. Мені 18 років. Я навчаюсь в Національному університеті Одеська Юридична Академія. Я займаюсь Веб розробкою сайтів. Вмію виконувати задачі на різних мовах програмування. Мій досвід в цій сфері 3 роки."
          }}/>
          <Navichki post={{
              id: 2, 
              body: "Мої навички:",
              listBody: "Комунікабельний",
              listBody1: "Вміння організовувати роботу, планувати, приймати рішення.",
              listBody2: "Творчий підхід до поставленної задачі.",
              listBody3: "Цілеспрямованість та стресостійкість.",
              listBody4: "Презентабельність.",
              listBody5: "Ініціативність."
          }}/>
          <Card1 post={{
              id:3,
              title: "Мої контакти",
              listTitle1: "Мобільний:",
              listTitle2: "E-mail:"
          }}/>
          
          
      </div>
  );
}
export default App;