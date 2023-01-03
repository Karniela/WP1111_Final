import example from '../pictures/example.jpg'
import '../css/artcard.css'

const Artcard = ({picture,title,painter, key}) => {
    return(
        <div className="container" key={key}>
            <div className="images">
                <img src={picture}></img>
            </div>
            <br></br>
            <div className="description">
                <div className="left-gap"></div>
                <div className="right-column">
                    <div className="Title">{title}</div>
                    <div className="Painter">{painter}</div>
                </div>
            </div>
        </div>
    )
}

export default Artcard;