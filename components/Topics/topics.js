// components 
import Topic from './topic';
// styles 
import topicStyles from './topics.module.scss';
// next import 
import Link from 'next/link';

const TopicList = () => {
    const arr = [1,2,3,4,,6,7]
    
    return (
        <div className={topicStyles.topicListWrap}>
            {arr.map(function(item, index){
                return (
                    <div key={index} className={topicStyles.topicOuter}>
                        <Link href='/'>
                        <a>
                        <Topic count={item} />
                        </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default TopicList;