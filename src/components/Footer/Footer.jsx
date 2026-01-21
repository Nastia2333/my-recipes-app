import { ReactComponent as InstaIcon} from '../../assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import { ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg';
import { ReactComponent as ThreadsIcon} from '../../assets/icons/threads.svg';
import '../Footer/Footer.scss';


export const Footer = ()=> {
    return (
        <footer>
            <div className="footer-main">
                <div className="logo-slogan">
                    <a href="/" className="logo footer-logo">HROOM</a>
                    <span>Feel the crunch. Love the taste.</span>
                </div>
                <div className="links">
                    <div className="categories">
                        <a href="/">Home</a>
                        <a href="/recipes">Recipes</a>
                        <a href="/favourites">Favourites</a>
                        <a href="/about-us">About Us</a>
                    </div>
                    <div className="social-media">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <InstaIcon className="icon" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FacebookIcon className="icon" />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer">
                            <TwitterIcon className="icon" />
                        </a>
                        <a href="https://www.threads.com/" target="_blank" rel="noreferrer">
                            <ThreadsIcon className="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span>© 2025 Hroom inc. All rights reserved.</span>
            </div>
        </footer>
    );
}

