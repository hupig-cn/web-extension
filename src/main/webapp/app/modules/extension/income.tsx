import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import CloseRounded from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      backgroundColor: '#fe4365',
      height: '100%',
      '& button': {
        marginTop: 4,
        outline: 'none',
        marginBottom: 4,
        color: '#fffde5',
        fill: '#fffde5',
        height: '100%'
      },
      '& svg': {
        width: 30,
        height: 30
      },
      '& span': {
        marginTop: 3
      }
    },
    bigAvatar: {
      margin: '8px 0px 0px 15px',
      float: 'left',
      fill: '#fffde5',
      width: '50px',
      height: '50px'
    },
    namePlusSetting: {
      width: '95%',
      height: 'auto',
      float: 'right',
      padding: '12px 10px 0px 0px'
    },
    nameOne: {
      float: 'left',
      width: '100%',
      '& button': {
        '& span': {
          '& svg': {
            fill: '#fffde5'
          }
        }
      }
    },
    name: {
      color: '#fffde5',
      float: 'left',
      width: '100%'
    },
    login: {
      color: '#fffde5',
      float: 'left',
      fontSize: '0.7rem'
    }
  })
);

const gotohomes = () => {
  window.location.replace('http://app.yuanscore.com:8081');
};

export default function LongMenu(props) {
  const classes = useStyles();
  const { profit } = props;

  return (
    <div>
      <div
        style={{
          backgroundColor: '#fe4365',
          height: 'auto',
          position: 'fixed',
          top: '0px',
          width: '100%',
          zIndex: 1000
        }}
      >
        <div className={classes.namePlusSetting}>
          <span style={{ float: 'left', color: '#fffde5' }}>我的收益</span>
          <CloseRounded style={{ fill: '#fffde5', float: 'right' }} onClick={gotohomes} />
        </div>
      </div>

      <BottomNavigation
        style={{
          position: 'fixed',
          top: '35px',
          height: 'auto',
          zIndex: 1000,
          width: '50%',
          left: '0px'
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label={'今日推荐'}
          value="scan"
          icon={<span style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{profit.todayrecommend}</span>}
        />
      </BottomNavigation>
      <BottomNavigation
        style={{
          position: 'fixed',
          top: '35px',
          height: 'auto',
          zIndex: 1000,
          width: '50%',
          right: '0px'
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label={'今日收益'}
          value="scan"
          icon={<span style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{profit.todayprofit}</span>}
        />
      </BottomNavigation>
      <div style={{ height: '140px' }} />
    </div>
  );
}
