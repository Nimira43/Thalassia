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
      <span className='text-main'>
        {stars.map((star) => (
          <span key={star}>{renderStar(star)}</span>
        ))}
      </span>
      
      <span className='rating-text'>{text && text}</span>
    </div>
  )
}

export default Rating
