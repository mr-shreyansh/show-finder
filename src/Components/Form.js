import { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [numTickets, setNumTickets] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date,
      numTickets,
      email,
      name
    };
    localStorage.setItem('bookingData', JSON.stringify(data));
    alert('Booking data saved successfully!');
  };


  return (
    <div>
   <form onSubmit={handleSubmit} className="p-6 text-black bg-gray-100">
    <h1 className='text-3xl font-semibold text-center'>{props.name}</h1>
    <div className='flex justify-between py-3'>
    <p><span className='text-purple-500'>Language:</span> {props.language}</p>
    <p><span className='text-purple-500'>Rating:</span> {props.rating}</p>
    <p><span className='text-purple-500'>Runtime:</span> {props.runtime}</p>
    </div>
    
      <label htmlFor="date" className="block mb-2 font-medium">
        Date:
      </label>
      <input
        type="date"
        id="date"
        className="w-full p-2 mb-4 border border-gray-300"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="numTickets" className="block mb-2 font-medium">
        Number of Tickets:
      </label>
      <input
        type="number"
        id="numTickets"
        className="w-full p-2 mb-4 border border-gray-300"
        value={numTickets}
        onChange={(e) => setNumTickets(e.target.value)}
        required
      />

      <label htmlFor="email" className="block mb-2 font-medium">
        Email:
      </label>
      <input
        type="email"
        id="email"
        className="w-full p-2 mb-4 border border-gray-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="name" className="block mb-2 font-medium">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="w-full p-2 mb-4 border border-gray-300"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button
        type="submit"
        className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
        Submit
      </button>
    
    </form>
    </div>
  
  );
};

export default BookingForm;
