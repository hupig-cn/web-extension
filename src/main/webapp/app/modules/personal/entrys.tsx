import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import List from '@material-ui/core/List';
// tslint:disable-next-line: no-submodule-imports
import ListItem from '@material-ui/core/ListItem';
// tslint:disable-next-line: no-submodule-imports
import ListItemText from '@material-ui/core/ListItemText';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      paddingTop: '0px',
      backgroundColor: theme.palette.background.paper,
      '& span': {
        fontSize: '0.9rem'
      },
      '& hr': {
        backgroundColor: '#f0f0f0'
      }
    }
  })
);

export default function ListDividers(props) {
  const classes = useStyles();
  const { profit } = props;

  return (
    <List component="nav" className={classes.root} aria-label="Mailbox folders">
      <ListItem button style={{ padding: '0px 16px 0px 16px' }}>
        <ListItemText primary="累计总收益" secondary={profit.totalprofit} />
        <span>></span>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="提现账单记录" />
        <span>></span>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="账户流水记录" />
        <span>></span>
      </ListItem>
      <Divider />
    </List>
  );
}
