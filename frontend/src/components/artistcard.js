import example from '../pictures/example.jpg'
import '../css/artistcard.css'

const Artistcard = ({picture,name,key}) => {
    return(
        <div className="container" key={key}>
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