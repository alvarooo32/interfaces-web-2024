import { useState } from 'react';
import './App.css';
import Image from './components/Image';
import image1 from "./images/Toshiro.jpg";
import image2 from "./images/Shunsui.png";

function App() {  
  const img1 = image1;
  const img2 = image2;

  const [srcImage, setSrcImage] = useState(img1);
  
  const changeImage = () => {
    setSrcImage(nextImage => (nextImage === img1 ? img2 : img1));  
  }

  return (
    <div className="container">
      <Image src={srcImage} width="300px" method={changeImage}/>
    </div>
  );
}

export default App;
