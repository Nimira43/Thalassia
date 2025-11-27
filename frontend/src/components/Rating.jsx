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
      <span>
        {value >= 2
          ? <PiStarFill />
          : value >= 1.5
            ? <PiStarHalfFill />
            : <PiStar />
        }
      </span>
      <span>
        {value >= 3
          ? <PiStarFill />
          : value >= 2.5
            ? <PiStarHalfFill />
            : <PiStar />
        }
      </span>
      <span>
        {value >= 4
          ? <PiStarFill />
          : value >= 3.5
            ? <PiStarHalfFill />
            : <PiStar />
        }
      </span>
      <span>
        {value >= 5
          ? <PiStarFill />
          : value >= 4.5
            ? <PiStarHalfFill />
            : <PiStar />
        }
      </span>
      <span className='rating-text'>
        { text && text }
      </span>
    </div>
   )
}
 
export default Rating