import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Player } from '@lottiefiles/react-lottie-player';

import './genres.css';

const Genres = (data) => {

  console.log("sdhgjvn", data);

  const getArcLabel = (params) => {
    return `${(params.value).toFixed(0)}%`;
  };

  return (
      <React.Fragment>
        <Player
              autoplay
              loop
              src={require("../../images/lottie/slide3.json")}
              style={{ height: '100%', width: '100%', position: 'absolute' }}
            />
        <div className='genreContainer'>
          {/* <h3>What genres are you into?</h3> */}
          <div className='pieContainer'>
            <PieChart
              series={[
                {
                  // data: [
                  //   { id: 0, value: 50, label: 'series A' },
                  //   { id: 1, value: 30, label: 'series B' },
                  //   { id: 2, value: 20, label: 'series C' },
                  // ],
                  data: data.data.data,
                  arcLabel: getArcLabel,
                },
              ]}
              width={800}
              height={400}
            />
          </div>
        </div>
      </React.Fragment>
  );
};

export default Genres;