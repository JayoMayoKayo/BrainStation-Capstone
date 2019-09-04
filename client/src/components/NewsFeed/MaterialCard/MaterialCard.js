import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

//Components


//Component Stylings
const styles = {
  designCard: {
    backgroundColor: '#D3D8E1'
  },
  media : {
    maxWidth : '100%',
    maxHeight : '100%'
  },
  BottomCard : {
    marginLeft: '8px'
  }
};

class MaterialCard extends React.Component {
  render() {
    const{ classes, value } = this.props;

    return (
      <Card className={classes.designCard}>
        <CardActionArea onClick={(event) => window.open(this.props.newsUrl, '_blank')}>
          <img src={`https://steamcdn-a.akamaihd.net/steam/apps/${this.props.basicId}/header.jpg`} />
          <CardContent>
            <h2>{this.props.newsTitle}</h2>
            <p>{this.props.newsAuthor}</p>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.BottomCard}>
          <h4>{this.props.newsFeedLabel}</h4>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(MaterialCard);