import React from 'react';

const MoviesPage = () => {
    // Define your rankList array here
    const rankList = [
        {
            rank: 1,
            name: "Inception",
            posterUrl: "https://i.pinimg.com/564x/96/07/dd/9607ddb58b5a327d7463833da63ce6fd.jpg",
            hours: 154,
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
        },
        {
            rank: 2,
            name: "The Dark Knight",
            posterUrl: "https://example.com/dark-knight-poster.jpg",
            hours: 140,
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        {
            rank: 3,
            name: "The Shawshank Redemption",
            posterUrl: "https://example.com/shawshank-redemption-poster.jpg",
            hours: 142,
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        },
        {
            rank: 4,
            name: "Pulp Fiction",
            posterUrl: "https://example.com/pulp-fiction-poster.jpg",
            hours: 148,
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        },
        {
            rank: 5,
            name: "Forrest Gump",
            posterUrl: "https://example.com/forrest-gump-poster.jpg",
            hours: 136,
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
        },
    ];
    

    return (
        <div className="wrapper">
            <div className="page-title">
                <p>Place</p>
                <p>Holder</p>
            </div>
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
        </div>

    );
}

export default MoviesPage;
