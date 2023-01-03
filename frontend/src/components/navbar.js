import Logo from "./logo"
import '../css/navbar.css'
import { Input, Tag, message} from 'antd'
import { NavLink, Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom'

const { Search } = Input;


const Navbar = () => {
    const navigate = useNavigate();
    const navigateTo = (e) => {
        const pages = e.target.className;
        navigate(`/${pages}`);
    }
    const backToHome = () => {
        navigate('/')
    }
    return(
        <div className="navbar">
            <div className="left-navbar">
                <div className="logo-container" onClick={backToHome}>
                    <Logo/>
                </div>
                <div className="search">
                <Search className="search-text"
                    placeholder="Search for artists or artworks..."
                    allowClear
                    style={{
                        width: '300px',
                    }}
                >
                </Search>
                </div>
            </div>
            <div className="right-navbar">
                <div className="collections" onClick={navigateTo}>MY COLLECTIONS</div>
                <div className="artists" onClick={navigateTo}>ARTISTS</div>
                <div className="artworks" onClick={navigateTo}>ARTWORKS</div>
                <div className="signup" onClick={navigateTo}>BECOME A MEMBER</div>
                <div className="login" onClick={navigateTo}>LOGIN</div>
            </div>
        </div>
    )
}
export default Navbar