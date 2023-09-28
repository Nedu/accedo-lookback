import React from 'react';

const ShowsPage = () => {
    // Define your rankList array here
    const rankList = [
        {
            rank: 1,
            name: "Breaking Bad",
            posterUrl: "https://i.pinimg.com/564x/b5/da/81/b5da816660ec3f7c2394e26b2671c9f3.jpg",
            hours: 266,
        },
        {
            rank: 2,
            name: "Game of Thrones",
            hours: 266,
        },
        {
            rank: 3,
            name: "Stranger Things",
            hours: 266,
        },
        {
            rank: 4,
            name: "The Mandalorian",
            hours: 266,
        },
        {
            rank: 5,
            name: "The Crown",
            hours: 266,
        },
    ];

    return (
        <div className="wrapper">
            <div className='main-box'>
                <div className="shows-details">
                    <div className="poster-container">
                        <img
                            className="poster"
                            src={rankList[0].posterUrl}
                            alt={`${rankList[0].name} Poster`}
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
                            <p><span className="hours-label">{rankList[0].hours} hrs</span> in the past year</p>
                        </div>
                        <div className='shows-description'>
                            <p>Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. </p>
                        </div>
                    </div>
                </div>
                <div className="rank-list">
                    {rankList.map((item) => (
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

    );
}

export default ShowsPage;
