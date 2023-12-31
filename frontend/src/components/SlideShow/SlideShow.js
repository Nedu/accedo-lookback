import React, { useState, useEffect } from 'react';

import Components from "./components.js";
import './slideShow.css';

// const useKeyPress = function(targetKey) {
//   const [keyPressed, setKeyPressed] = useState(false);

//   React.useEffect(() => {
//     const leftHandler = ({ key }) => {
//       if (key === targetKey) {
//         setKeyPressed(true);
//       }
//     }
  
//     const rightHandler = ({ key }) => {
//       if (key === targetKey) {
//         setKeyPressed(false);
//       }
//     };

//     window.addEventListener("keyleft", leftHandler);
//     window.addEventListener("keyright", rightHandler);

//     return () => {
//       window.removeEventListener("keyleft", leftHandler);
//       window.removeEventListener("keyright", rightHandler);
//     };
//   }, [targetKey]);

//   return keyPressed;
// };

const SlideShow = () => {
  const [index, setIndex] = React.useState(0);
  // const leftPress = useKeyPress("ArrowLeft");
  // const rightPress = useKeyPress("ArrowRight");
  // const timeoutRef = React.useRef(null);

  // const  resetTimeout = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  function onKeyPress(e) {
    console.log("what jey was presedeff", e.key);
  }

  const data = [{
    backgroundColor: "#0088FE",
    id: 'genres',
    data: [
      { id: 0, value: 50, label: 'series A' },
      { id: 1, value: 30, label: 'series B' },
      { id: 2, value: 20, label: 'series C' },
    ],
    component: "genres",
    headline: "Genres"
  },{
    id: 'mostWatchedMovies',
    backgroundColor: "#00C49F"
  },{
    id: "mostWatchedShows",
    backgroundColor: "#FFBB28"
  }]
  // const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  // const delay = 2500;

  // React.useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === data.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [data.length, index]);

  // useEffect(() => {
  //   if (leftPress) {
  //     // setCursor(prevState =>
  //     //   prevState < items.length - 1 ? prevState + 1 : prevState
  //     // );
  //     setIndex((prevIndex) =>
  //         prevIndex > 0 ? prevIndex - 1 : prevIndex
  //       )
  //   }
  // }, [leftPress]);

  // useEffect(() => {
  //   if (rightPress) {
  //     // setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
  //     setIndex((prevIndex) =>
  //         prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
  //       )
  //   }
  // }, [rightPress]);

  useEffect(() => {
    console.log("erkjgdsjvmfdv")
    window.addEventListener('keydown', e => {
     if(e.key === '39'){ //right
      console.log('You pressed Right')
     }

     if(e.key === '37'){ //right
      console.log('You pressed left')
     }
    })
   }, [])

  return (
    <React.Fragment>
      <div className='slideShowContainer'>
        <div className='slideShowSliderContainer' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {/* {data.map((item, index) => (
            <div className="slideContainer" key={index} style={{ backgroundColor: item.backgroundColor }}/>
          ))} */}
          {data.map((item, index) => Components(item))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SlideShow;