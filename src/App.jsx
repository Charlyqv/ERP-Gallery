import './App.css'
import ImageGallery from 'react-image-gallery'
import Image0 from '../src/assets/erp-0.png';
import Image1 from '../src/assets/erp-1.png';
import Image2 from '../src/assets/erp-2.png';
import Image3 from '../src/assets/erp-3.png';
import Image4 from '../src/assets/erp-4.png';
import Image5 from '../src/assets/erp-5.png';
import Image6 from '../src/assets/erp-6.png';
import Image7 from '../src/assets/erp-7.png';
import Image8 from '../src/assets/erp-8.png';
import Image9 from '../src/assets/erp-9.png';
import Image10 from '../src/assets/erp-10.png';
import Image11 from '../src/assets/erp-11.png';
import Image12 from '../src/assets/erp-12.png';
import Image13 from '../src/assets/erp-13.png';
import Image14 from '../src/assets/erp-14.png';

import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  
  const images = [
    {
      original: Image0,
    },
    {
      original: Image1,
    },
    {
      original: Image2,
    },
    {
      original: Image3,
    },
    {
      original: Image4,
    },
    {
      original: Image5,
    },
    {
      original: Image6,
    },
    {
      original: Image7,
    },
    {
      original: Image8,
    },
    {
      original: Image9,
    },
    {
      original: Image10,
    },
    {
      original: Image11,
    },
    {
      original: Image12,
    },
    {
      original: Image13,
    },
    {
      original: Image14,
    },
  ]

  return (
    <div>
      <h1>ERP Productos</h1>
      <h3>Permite gestionar productos, clientes, pedidos y provedores</h3>
      <h3>Herramientas utilizadas: PHP, Laravel, MySQL.</h3>
      <ImageGallery items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        showBullets={true}
        autoPlay={false}
        slideInterval={100}
        slideDuration={1000}
      />
    </div>
  )
}

export default App
