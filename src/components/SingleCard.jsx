import './SingleCard.css'
import PropTypes from 'prop-types'


export const SingleCard = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled){

            handleChoice(card)
        }
    }

    return(
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
              <img className='front' src={card.src} alt='card-front' />
              <img className='back' src='/img/cover.png' onClick={handleClick} alt='card-back' />
            </div>
          </div>
    )

}

SingleCard.propTypes = {
    card: PropTypes.object,
    handleChoice: PropTypes.func,
    flipped: PropTypes.bool,
    disabled: PropTypes.bool
}

export default SingleCard
