import './Card.css'

const Card = ({ album }) => {

  return (
    <div >
      <h3>{album.name}</h3>
      <img src={album.images[0].url} alt='album cover' />
    </div>
  )


}

export default Card;
