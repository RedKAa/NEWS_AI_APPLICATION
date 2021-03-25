import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import {CardActionArea, CardContent, CardMedia, Grid, Grow, Typography} from '@material-ui/core';
import useStyles from './style.js';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({articles}) => {
  const classes = useStyles();

  if(!articles.length){
    //InfoCards
    return(
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((inforCard)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
              <div className={classes.card} style={{backgroundColor: inforCard.color}}>
              <Typography varian="h5"><strong>{inforCard.title}</strong></Typography>
              {inforCard.info ? (<Typography className={classes.infoCard} varian="h6" color="inherit">{inforCard.info}</Typography>):null}
              <Typography varian="h6" color="inherit">Try saying: <br/> <i>{inforCard.text}</i> </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
            <NewsCard article={article} i={i}/>
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
