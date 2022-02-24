// next imports 
import Link from 'next/link';
import Image from 'next/image';

// styles 
import navStyles from '../Navigation/navigation.module.scss'
// mui icons 
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// internal icons 
import Logo from '../../public/icons/logo-light.svg'

const GuestNavigation = () => {
    return (
        <>
        <div className={navStyles.navWrap}>
            <span className={navStyles.borderRight}>
                <Link href='/'><a className={navStyles.logo}><Image src={Logo} width={137} height={32} alt='BitCloud' /></a></Link>
            </span>
            <span className={navStyles.spnSubpagesWrap}>
                <ul>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a>Exchange</a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a>Buy Crypto</a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a>Market</a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a>Discover</a></Link></li>
                </ul>
            </span>
            <span className={navStyles.flexAuto}></span>
            <span className={navStyles.spnSubpagesWrap}>
                <ul>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a>EN/USD</a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a><BoltOutlinedIcon /></a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a><NotificationsNoneOutlinedIcon /></a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a className={navStyles.wallet}>Wallet</a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a><LightModeIcon /></a></Link></li>
                    <li><Link href={`${process.env.hostBaseUrl}/`}><a><AccountCircleIcon /></a></Link></li>
                </ul>
            </span>
        </div>

        <div className={navStyles.navWrapMobile}>
            I am Sidebar
        </div>
        </>
    );
}

export default GuestNavigation;