import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  PaymentRounded,
  MoveToInboxRounded,
  ThumbsUpDownRounded,
  RateReviewRounded,
  EventNoteRounded,
  ControlPointRounded
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#ffffff',
      height: '100%',
      borderTop: '1px solid #f0f0f0',
      '& button': {
        minWidth: '0px',
        outline: 'none',
        color: 'rgba(0, 0, 0, 0.64)',
        height: '100%',
        maxWidth: '100%',
        '& img': {
          marginBottom: 5,
          width: 28,
          height: 28
        }
      }
    },
    divTitleName: {
      '& span': {
        margin: '0px 10px 5px 10px',
        fontSize: '0.9rem'
      }
    }
  })
);

export const Loadpages = key => {
  let temp: any = null;
  switch (key) {
    case 'recommend':
      document.getElementById('app-modules-consumer-quickaccess-button-link-sharepage').click();
      break;
    default:
      temp = null;
      break;
  }
};

export default function LongMenu(props) {
  const classes = useStyles();
  const [value] = React.useState('home');
  const { profit } = props;

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
  }

  return (
    <div
      style={{
        marginTop: '15px',
        paddingTop: '6px',
        backgroundColor: 'white',
        borderBottom: '1px solid #f0f0f0'
      }}
    >
      <div className={classes.divTitleName}>
        <span style={{ float: 'left' }}>我的推荐</span>
        <span style={{ float: 'right', fontSize: '0.65rem', color: '#00000075' }}>○</span>
      </div>
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction label="已推荐/人" value="key1" icon={<span style={{ fontSize: '1.4rem' }}>{profit.totalrecommend}</span>} />
        <BottomNavigationAction
          style={{ color: '#fe4365', background: '#f0f0f0' }}
          label="推荐好友"
          value="recommend"
          icon={<ControlPointRounded style={{ height: '33px', fill: '#fe4365' }} />}
        />
      </BottomNavigation>
      <Link id="app-modules-consumer-quickaccess-button-link-sharepage" to="/sharepage" />
    </div>
  );
}
