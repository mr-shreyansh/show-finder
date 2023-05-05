import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BookingForm from '../Components/Form';
const Booking = (props) => {
    const location = useLocation();
    const data = location.state?.data;
    const pict =  data.image?.original;
    const [display, setDisplay] = React.useState(true);
    function removePTags(summary) {
        return summary.replace(/<\/?p>/g, "") && summary.replace(/<\/?b>/g, "");
      }

      
      function showCard(){
          setDisplay(!display);
          
        }
      useEffect(() => {
            setDisplay(!display);
      }, []);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-no-repeat bg-cover bg-opacity-10" style={{backgroundImage: `url(${pict})`}}>
        <div className=' bg-black bg-opacity-80 text-white w-[100vw] min-h-[100vh] flex flex-col px-3'>

      {
          display &&
      <div className='absolute top-[10vh] left-[10vw] right-[10vw]'>
        <button onClick={showCard} className='absolute text-2xl text-black right-1'>❌</button>
        <BookingForm name={data.name} dis={display} language={data.language} status={data.status} runtime={data.runtime} />
       </div>
      } 
        <h1 className='text-3xl font-semibold text-center'>{data.name}</h1>
       <img src={data.image?.medium} alt={data.name} height={200} width={220} className='self-center'/>
        <div className='flex flex-col'>
<span className='text-purple-500'>Summary:</span>
        <div className='flex items-center justify-center'
              dangerouslySetInnerHTML={{
                  __html: removePTags(data.summary),
                }}
                />
        </div>
        <div className='flex justify-between py-3'>
            <p><span className='text-purple-500'>Language:</span> {data.language}</p>
            <p><span className='text-purple-500'>Status:</span> {data.status}</p>
            <p><span className='text-purple-500'>Runtime:</span> {data.runtime}</p>
        </div>
            <button
             className='max-w-[120px] px-2 py-1 bg-purple-500'
             onClick={showCard}>Book a show</button>
                </div>
           
    </div>
  )
}

export default Booking