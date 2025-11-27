import { PiStarFill, PiStarHalfFill, PiStar } from 'react-icons/pi'

const Rating = ({ value, text }) => {
  return ( 
    <div className='rating'>
      <span>
        {value >= 1
          ? <PiStarFill />
          : value >= 0.5
            ? <PiStarHalfFill />
            : <PiStar />
        }
      </span>
    </div>
   )
}
 
export default Rating