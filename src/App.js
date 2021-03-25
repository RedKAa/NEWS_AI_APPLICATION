import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './style.js';

const alanKey = '31137bed342dfcbc7fc6f3cd50925c1b2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}) => {
        if(command === 'newHeadLines', articles){
          setNewsArticles(articles);
        }
      }
    })
  }, [])

  return(
    <div>
    <div className={classes.logoContainer}>
      <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="logo" />
    </div>
    <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;