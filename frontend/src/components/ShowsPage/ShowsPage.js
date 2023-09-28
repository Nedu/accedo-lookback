import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const ShowsPage = (data) => {

    return (
      <div>
        <Player
              autoplay
              loop
              src={require("../../images/lottie/slide1.json")}
              style={{ height: '100%', width: '100%', position: 'absolute' }}
            />
        <div className="wrapper">
            <div className='main-box'>
                <div className="shows-details">
                    <div className="poster-container">
                        <img
                            className="poster"
                            src={data.data.data[0].posterUrl}
                            alt={`${data.data.data[0].name} Poster`}
                        />
                        <div className="crown-icon">
                            <img src="https://static.vecteezy.com/system/resources/previews/001/189/666/non_2x/crown-png.png" alt="Crown" />
                        </div>
                    </div>
                    <div className="details-container">
                        <div className="shows-title">
                            <p>Breaking Bad</p>
                        </div>
                        <div className="hours-spent">
                            <p><span className="hours-label">{data.data.data[0].hours} hrs</span> in the past year</p>
                        </div>
                        <div className='shows-description'>
                            <p>Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. </p>
                        </div>
                    </div>
                </div>
                <div className="rank-list">
                    {data.data.data.map((item) => (
                        <div className="rank-item" key={item.rank}>
                            <span className="rank">{item.rank}.</span>
                            <span className="name">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="page-title">
                <p>Place</p>
                <p>Holder</p>
            </div>
        </div>
      </div>

    );
}

export default ShowsPage;
