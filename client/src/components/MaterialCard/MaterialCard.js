import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//Components


//Component Stylings
const styles = {
  designCard: {
    backgroundColor: '#D3D8E1'
  }
};

class MaterialCard extends React.Component {
  render() {
    const{ classes, value } = this.props;

    return (
      <Card className={classes.designCard}>
        <CardContent>
          <p>this is a card</p>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(MaterialCard);