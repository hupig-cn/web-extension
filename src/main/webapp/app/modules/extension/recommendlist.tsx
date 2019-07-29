import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import CssBaseline from '@material-ui/core/CssBaseline';
// tslint:disable-next-line: no-submodule-imports
import Typography from '@material-ui/core/Typography';
// tslint:disable-next-line: no-submodule-imports
import Paper from '@material-ui/core/Paper';
// tslint:disable-next-line: no-submodule-imports
import List from '@material-ui/core/List';
// tslint:disable-next-line: no-submodule-imports
import ListItem from '@material-ui/core/ListItem';
// tslint:disable-next-line: no-submodule-imports
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// tslint:disable-next-line: no-submodule-imports
import ListItemText from '@material-ui/core/ListItemText';
// tslint:disable-next-line: no-submodule-imports
import Avatar from '@material-ui/core/Avatar';

const messages = [
  {
    id: 1,
    title: '支付宝用户：122********',
    time: '2019-6-18 10:06'
  },
  {
    id: 2,
    title: '支付宝用户：122********',
    time: '2019-6-18 9:06'
  },
  {
    id: 3,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  },
  {
    id: 4,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  },
  {
    id: 5,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  },
  {
    id: 6,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  },
  {
    id: 7,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  },
  {
    id: 8,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  },
  {
    id: 9,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  },
  {
    id: 10,
    title: '圆积分用户：135****5783',
    time: '2019-6-18 8:00'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0)
    },
    paper: {
      paddingBottom: 0,
      boxShadow: 'none',
      marginTop: '10px'
    },
    list: {
      fontFamily: '黑体',
      padding: 0
    },
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: 'auto',
      bottom: 0
    },
    grow: {
      flexGrow: 1
    },
    fabButton: {
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    inline: {
      width: '100%'
    }
  })
);

export default function BottomAppBar(props) {
  const classes = useStyles();
  const { state } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {state.recommenduser.map(val => (
            <React.Fragment>
              <ListItem button style={{ borderBottom: '1px solid #f0f0f0', position: 'relative' }}>
                <ListItemText
                  style={{
                    margin: '0 auto',
                    height: '100%'
                  }}
                  primary={val.phoneOrToken}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" variant="body2" className={classes.inline} color="textPrimary" />
                    </React.Fragment>
                  }
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    fontSize: '0.875rem',
                    right: '16px',
                    width: 'auto',
                    color: '#00000095'
                  }}
                >
                  {val.time}
                </span>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
