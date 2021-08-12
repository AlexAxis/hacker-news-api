import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },

  job: {
    backgroundColor: '#aaffaa',
  },
  story: {
    backgroundColor: '#aaaaff',
  },
  comment: {
    backgroundColor: '#ffffaa',
  },
  poll: {
    backgroundColor: '#ffaaff',
  },
  pollopt: {
    backgroundColor: '#aaffff',
  },
}))

function HackerCard(props) {
  const { resultList } = props
  const classes = useStyles()

  return (
    <div className="WrapCards">
      <Card className={classes.root}>
        <CardHeader
          title={resultList.title}
          subheader={moment(resultList.time).format('LLLL')}
        />
        <CardContent>
          {resultList.score} <ThumbUpIcon />
          <Typography variant="body2" color="textSecondary" component="p">
            By: {resultList.by}
          </Typography>
        </CardContent>
        <CardActions>
          <Chip label={resultList.type} className={classes[resultList.type]} />
          <IconButton onClick={() => window.open(resultList.url)}>
            go to page <ArrowForwardIosIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default HackerCard
