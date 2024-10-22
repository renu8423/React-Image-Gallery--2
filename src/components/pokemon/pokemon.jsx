import { Link } from 'react-router-dom';
import './pokemon.css'
function Pokemon({ name ,image,id }) {
    return (
      <div className="pokemon">
        <Link to={`/pokemon/${id}`}>
        <div>
        <img  className="pokemon-image" src={image} alt={name} style={{ width: '100px' }} />
        </div>
        <div className='pokemon-name'>{name}</div>
        </Link>
      </div>
    
    );
  }



export default Pokemon;