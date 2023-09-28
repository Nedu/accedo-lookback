import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import './genres.css';

const Genres = () => {

  const getArcLabel = (params) => {
    return `${(params.value).toFixed(0)}%`;
  };

  return (
      <React.Fragment>
        <div className='genreContainer'>
          <h3>What genres are you into?</h3>
          <div className='pieContainer'>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 50, label: 'series A' },
                    { id: 1, value: 30, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                  ],
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