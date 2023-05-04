import React, { useEffect, useState } from 'react'
import Footer from '../Components/footer';
import Card from '../Components/Card';

const Home = () => {
    const [shows, setShows] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState("");
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));

  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
          const data = await response.json();
          setShows(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);
  return (
    <div className="App">
    <div className="py-2 bg-stone-900 mb-9 min-h-[100px] rounded-b-xl">
      <h1 className='text-4xl text-center text-purple-500'>Show<strong className='text-purple-400'>Finder</strong></h1>
      <div className="flex flex-wrap justify-around gap-2">
        <select value={selectedOption} className="bg-purple-500 py-2 px-4 min-w-[210px]" onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">All genres</option>
          <option value="Drama">Drama</option>
          <option value="Medical">Medical</option>
          <option value="Sports">Sports</option>
          <option value="Legal">Legal</option>
          <option value="Comedy">Comedy</option>
          <option value="Music">Music</option>
          <option value="Children">Children</option>
          <option value="Anime">Anime</option>
        </select>
        <input type="text" className="px-4 py-2 text-white bg-purple-500 border-none placeholder:text-white placeholder:px-2 " placeholder="Search" onChange={(e) => { setQuery(e.target.value) }} />
      </div>
    </div>
    <div className="flex flex-wrap justify-center min-h-[500px] gap-3">
      {
        shows.filter((val) => {
          if (query === "" && selectedOption === "") {
            return val;
          }
          else if (selectedOption !== '') {
            if (
              val.show.genres.some((genre) =>
                genre.toLowerCase().includes(selectedOption.toLowerCase())
              )
            ) {
              return val;
            }
          }
          else if (query !== '') {
            if (val.show.name.toLowerCase().includes(query.toLowerCase())) {
              return val;
            }
          }
        }).map((show) => (
          <Card
            key={show.show.id}
            data={show.show}
            name={show.show.name}
            rating={show.show.rating.average}
            language={show.show.language}
            image={show.show.image}
            date={show.show.premiered}
          />

        ))

      }
    </div>
{console.log(bookingData)}
    <Footer/>
  </div>
  )
}

export default Home