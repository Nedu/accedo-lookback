import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowsPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Programmatically navigate to the "/other" route when the container is clicked
        navigate('/moviesPage');
    };
    // Define your rankList array here
    const rankList = [
        {
            rank: 1,
            name: "Breaking Bad",
            posterUrl: "https://i.pinimg.com/564x/b5/da/81/b5da816660ec3f7c2394e26b2671c9f3.jpg",
            hours: 266,
            description: "Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy."
        },
        {
            rank: 2,
            name: "Game of Thrones",
            hours: 266,
            description: "Seven noble families fight for control of the mythical land of Westeros."
        },
        {
            rank: 3,
            name: "Stranger Things",
            hours: 266,
            description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back."
        },
        {
            rank: 4,
            name: "The Mandalorian",
            hours: 266,
            description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, set after the fall of the Empire and before the rise of the First Order."
        },
        {
            rank: 5,
            name: "The Crown",
            hours: 266,
            description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century."
        },
    ];


    return (
        <div className="wrapper" onClick={handleNavigate}>
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
                            <p>{rankList[0].name}</p>
                        </div>
                        <div className="hours-spent">
                            <p>
                                <span className="hours-label">{rankList[0].hours} hrs</span> in the past year
                            </p>
                        </div>
                        <div className='shows-description'>
                            <p>{rankList[0].description}</p>
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
