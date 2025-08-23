import React from "react";

import photo1 from "../src/assets/explorepage/che_pic1.jpeg";
import photo2 from "../src/assets/explorepage/tommy_2.jpeg";
import photo3 from "../src/assets/explorepage/allah3.jpeg";
import photo4 from "../src/assets/explorepage/jhonsnow4.jpeg";
import photo5 from "../src/assets/explorepage/ironman5.jpeg";
import photo6 from "../src/assets/explorepage/tommy6.jpeg";
import photo7 from "../src/assets/explorepage/tom7.jpeg";
import photo8 from "../src/assets/explorepage/fault8.jpeg";
import photo9 from "../src/assets/explorepage/love9.jpeg";
import photo10 from "../src/assets/explorepage/blackpanther10.jpeg";
import photo11 from "../src/assets/explorepage/love11.jpeg";
import photo12 from "../src/assets/explorepage/cillin12.jpeg";
import photo13 from "../src/assets/explorepage/Suriya13.jpeg";
import photo14 from "../src/assets/explorepage/romeo14.jpeg";
import photo15 from "../src/assets/explorepage/wed15.jpeg";
import photo16 from "../src/assets/explorepage/james16.jpeg";
import photo17 from "../src/assets/explorepage/witch17.jpeg";
import photo18 from "../src/assets/explorepage/natasha18.jpeg";
import photo19 from "../src/assets/explorepage/caption19.jpeg";
import photo20 from "../src/assets/explorepage/wonder20.jpeg";
import photo21 from "../src/assets/explorepage/chan21.jpeg";
import photo22 from "../src/assets/explorepage/jolie22.jpeg";
import photo23 from "../src/assets/explorepage/harry23.jpeg";
import photo24 from "../src/assets/explorepage/rock24.jpeg";
import photo25 from "../src/assets/explorepage/zandaya25.jpeg";
import photo26 from "../src/assets/explorepage/dom26.jpeg";
import photo27 from "../src/assets/explorepage/neymar27.jpeg";
import photo28 from "../src/assets/explorepage/paul28.jpeg";
import photo29 from "../src/assets/explorepage/monika29.jpeg";
import photo30 from "../src/assets/explorepage/brad30.jpeg";


const posts = [photo1, photo2, photo3, photo4, photo5,
  photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15,
  photo16, photo17, photo18, photo19, photo20,
  photo21, photo22, photo23, photo24, photo25,
  photo26, photo27, photo28, photo29, photo30
];

function Explore() {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore</h2>
      <div className="explore-grid">
        {posts.map((photo, index) => (
          <div key={index} className="explore-item">
            <img src={photo} alt={`Personal Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
