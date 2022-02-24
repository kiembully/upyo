// styles 
import topicStyles from './topics.module.scss';
import Image from 'next/image';

const Topic = (props) => {
    return (
        <div className={topicStyles.topicInner}>
            <div className={topicStyles.imgWrap}>
                <Image src='https://ui8-bitcloud.herokuapp.com/img/content/article-pic-1@2x.jpg' width={352} height={297} alt='sample image' layout='fill' objectFit='cover' />
            </div>
        </div>
    );
}

export default Topic;