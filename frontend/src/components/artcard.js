import example from '../pictures/example.jpg'
import '../css/artcard.css'

const Artcard = ({picture, id, title, painter, key, handleClick}) => {
    return(
        <div className="container" key={key} onClick={() => handleClick(id)}>
            <div className="images">
                <img src={picture}></img>
            </div>
            <br></br>
            <div className="description">
                
                <div className="right-column">
                    <div className="Title">{title}</div>
                    <div className="Painter">{painter}</div>
                </div>
            </div>
        </div>
    )
}

export default Artcard;