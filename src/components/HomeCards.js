import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './HomeCards.module.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: '30px',
  },
  media: {
    height: 220,
  },
});

export default function HomeCards() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                title='Nike Shoes'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Nike Shoes
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Nike shoes provide excellent support – Nike shoes comes with a
                  herringbone pattern and a solid rubber, which adds to the
                  comfort and support of users. – Nike shoes are lightweight and
                  durable – Despite provides exceptional comfort, flexibility,
                  of Nike shoes are very light.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://image.shutterstock.com/image-photo/bangkok-thailand-july-82016-adidas-260nw-449080468.jpg'
                title='Adidas Shoes'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Adidas Shoes
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Adidas, in full Adidas AG, German manufacturer of athletic
                  shoes and apparel and sporting goods. In the early 21st
                  century it was the largest sportswear manufacturer in Europe
                  and the second largest (after Nike) in the world.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzkoh8ethGvl2PaYlpA95GvCSVW3IX7uO2AQ&usqp=CAU'
                title='Puma Shoes'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Puma Shoes
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  The fusion of sports and lifestyle. The PUMA Mostro with its
                  typical touch fastener and spike sole is a combination of two
                  shoes
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
