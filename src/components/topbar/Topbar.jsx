import './topbar.scss';
import {Mail, Person} from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">My Portfolio</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+351 910 939 503</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>pedro.r.galveias@pm.me</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
