// compontnets 
import TopicList from './topics';
// styles 
import topicStyles from './topics.module.scss';
// material icons
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// material ui 
import Button from '@mui/material/Button';
// native 
import { useState } from 'react';


const Topics = () => {
    const [filter, setFilter] = useState(0);
    const [isAddedOpen, setIfAddedIsOpen] = useState(false);
    
    return (
        <div className={topicStyles.topicWrap}>
            <div className={topicStyles.searchWrap}>
                <input type="text" placeholder='Search anything about the crypto' />
                <span><SearchIcon /></span>
            </div>

            <div className={topicStyles.filterWrap}>
                <span>
                    <Button onClick={() => setIfAddedIsOpen(!isAddedOpen)}>
                        Recently Added 
                        {isAddedOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </Button>
                </span>
                <span className={topicStyles.flexWrap}></span>
                <span>
                    <ul className={topicStyles.ulFilter}>
                        <li><Button onClick={() => setFilter(1)} className={(filter == 1 ? topicStyles.active : '')}>Tutorial</Button></li>
                        <li><Button onClick={() => setFilter(2)} className={(filter == 2 ? topicStyles.active : '')}>Usecase</Button></li>
                        <li><Button onClick={() => setFilter(3)} className={(filter == 3 ? topicStyles.active : '')}>Trading</Button></li>
                        <li><Button onClick={() => setFilter(4)} className={(filter == 4 ? topicStyles.active : '')}>Wallet</Button></li>
                    </ul>
                </span>
            </div>

            <TopicList />
        </div>
    );
}

export default Topics;