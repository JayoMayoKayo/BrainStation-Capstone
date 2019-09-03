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
  }
};

class DealCard extends React.Component {
  render() {
    const{ classes, value } = this.props;

    return (
      <Card className={classes.designCard}>
        <CardActionArea>
          <CardMedia />
          <CardContent>
            <h1>{this.props.newsTitle}</h1>
            <p>this is a card</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>Test Button</Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(DealCard);