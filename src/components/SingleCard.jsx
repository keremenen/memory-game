import './SingleCard.css'
import PropTypes from 'prop-types'


export const SingleCard = ({card, handleChoice}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return(
        <div className='card'>
            <div>
              <img className='front' src={card.src} alt='card-front' />
              <img className='back' src='/img/cover.png' onClick={handleClick} alt='card-back' />
            </div>
          </div>
    )

}

SingleCard.propTypes = {
    card: PropTypes.object
}

export default SingleCard
