// import { PiStarFill, PiStarHalfFill, PiStar } from 'react-icons/pi'

// const Rating = ({ value, text }) => {
//   return ( 
//     <div className='rating'>
//       <span>
//         {value >= 1
//           ? <PiStarFill />
//           : value >= 0.5
//             ? <PiStarHalfFill />
//             : <PiStar />
//         }
//       </span>
//       <span>
//         {value >= 2
//           ? <PiStarFill />
//           : value >= 1.5
//             ? <PiStarHalfFill />
//             : <PiStar />
//         }
//       </span>
//       <span>
//         {value >= 3
//           ? <PiStarFill />
//           : value >= 2.5
//             ? <PiStarHalfFill />
//             : <PiStar />
//         }
//       </span>
//       <span>
//         {value >= 4
//           ? <PiStarFill />
//           : value >= 3.5
//             ? <PiStarHalfFill />
//             : <PiStar />
//         }
//       </span>
//       <span>
//         {value >= 5
//           ? <PiStarFill />
//           : value >= 4.5
//             ? <PiStarHalfFill />
//             : <PiStar />
//         }
//       </span>
//       <span className='rating-text'>
//         { text && text }
//       </span>
//     </div>
//    )
// }
 
// export default Rating

import { PiStarFill, PiStarHalfFill, PiStar } from 'react-icons/pi'

const Rating = ({ value, text }) => {
  const stars = [1, 2, 3, 4, 5]

  const renderStar = (starValue) => {
    if (value >= starValue) return <PiStarFill />
    if (value >= starValue - 0.5) return <PiStarHalfFill />
    return <PiStar />
  }

  return (
    <div className='rating'>
      {stars.map((star) => (
        <span key={star}>{renderStar(star)}</span>
      ))}
      <span className="rating-text">{text && text}</span>
    </div>
  )
}

export default Rating
