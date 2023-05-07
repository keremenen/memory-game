import './SingleCard.css'
import PropTypes from 'prop-types'


export const SingleCard = ({card}) => {
    return(
        <div className='card'>
            <div>
              <img className='front' src={card.src} alt='card-front' />
              <img className='back' src='/img/cover.png' alt='card-back' />
            </div>
          </div>
    )

}

SingleCard.propTypes = {
    card: PropTypes.object
}

export default SingleCard
