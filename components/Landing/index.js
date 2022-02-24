// next imports
import Image from 'next/image';
// styles 
import landingStyles from './landing.module.scss';

const Landing = (props) => {
    return (
        <div className={landingStyles.landingWrap}>
            <span className={landingStyles.spnLandingInner}>
                <Image 
                className={landingStyles.imageBanner}
                src='https://ui8-bitcloud.herokuapp.com/img/content/video-bg.jpg' 
                width={640} 
                height={427} 
                alt='sample banner'
                layout='fill'
                objectFit='cover' 
                priority />
            </span>
            <span className={landingStyles.spnLandingInner}>{props.counter}</span>
        </div>
    );
}

export default Landing;