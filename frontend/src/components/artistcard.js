import example from '../pictures/example.jpg'
import '../css/artistcard.css'

const Artistcard = ({id,picture,name,key,toArtist}) => {
    return(
        <div className="container" key={key} id={id} onClick={() => toArtist(id)}>
            <div className="images">
                <img src={picture}></img>
            </div>
            <br></br>
            <div className="description">
                <div className="right-column">
                    <div className="Title">{name}</div>
                </div>
            </div>
        </div>
    )
}

export default Artistcard;