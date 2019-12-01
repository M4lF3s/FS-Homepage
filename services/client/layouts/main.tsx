import { Meta } from '../components/meta';
import { Navigation } from '../components/Navigation';
import img from '../assets/img/bg-content.png';
import styles from './main.module.scss';
import {withRouter} from 'next/router';



export default withRouter((props) => {

        const executeScroll = () => window.scrollTo( {
                top: document.body.scrollHeight,
                behavior: 'smooth'
        });

        return (
        <div>
                <Meta/>
                <div className={styles.background}></div>
                <Navigation>
                        {props.children}
                </Navigation>
                {
                props.router.pathname.replace('/', '') === 'Home' ? (
                    <div className={`${styles.arrow} ${styles.bounce}`} onClick={executeScroll} id="arrow"><a id="scrolldown"><i
                        className="material-icons">keyboard_arrow_down</i></a></div>
                ) : ''
        }
        </div>
        )
})