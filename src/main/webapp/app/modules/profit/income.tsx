import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import Button from '@material-ui/core/Button';
// tslint:disable-next-line: no-submodule-imports
import { ControlPointRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      backgroundColor: '#fe4365',
      height: '100%',
      '& button': {
        outline: 'none',
        marginBottom: 5,
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
      margin: '10px 0px 0px 15px',
      float: 'left',
      fill: '#fffde5',
      width: '50px',
      height: '50px'
    },
    namePlusSetting: {
      width: 'calc(100% - 70px)',
      height: '60px',
      float: 'right',
      padding: '14px 10px 0px 0px'
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
      float: 'left'
    },
    login: {
      color: '#fffde5',
      float: 'left',
      fontSize: '0.7rem'
    }
  })
);

// tslint:disable-next-line: ter-arrow-body-style
export const Title = () => {
  return (
    <div
      style={{
        height: 35,
        width: '100vw',
        color: '#fffde5',
        backgroundColor: '#fe4365',
        padding: '5px 10px 0px 10px',
        position: 'fixed',
        top: 0,
        zIndex: 1000
      }}
    >
      <span
        style={{
          float: 'left',
          fontSize: '1rem',
          marginTop: '3px',
          marginLeft: '2px',
          color: '#fffde5'
        }}
      >
        我的收益
      </span>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        style={{
          color: '#fffde5',
          float: 'right',
          padding: 0,
          fontSize: '1rem',
          minWidth: 0,
          boxShadow: 'none',
          backgroundColor: '#fe4365',
          outline: 'none'
        }}
      >
        <ControlPointRounded />
      </Button>
    </div>
  );
};

export const Loadpages = key => {
  let temp: any = null;
  switch (key) {
    case 'scan':
      break;
    case 'pay':
      break;
    case 'income':
      break;
    case 'share':
      break;
    default:
      temp = null;
      break;
  }
};

export default function LongMenu() {
  const classes = useStyles();
  const [value] = React.useState('home');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
  }

  return (
    <div>
      <Title />
      <BottomNavigation
        style={{
          position: 'fixed',
          top: '35px',
          height: 'auto',
          zIndex: 1000
        }}
        showLabels
        className={classes.root}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="今日推荐" value="pay" icon={<span style={{ fontSize: '1.5rem' }}>81</span>} />
        <BottomNavigationAction label="今日收益" value="pay" icon={<span style={{ fontSize: '1.5rem' }}>1253.82</span>} />
      </BottomNavigation>
      <div style={{ height: '117px' }} />
      <img
        style={{
          width: '100%',
          height: '60px',
          padding: '5px',
          borderRadius: '10px'
        }}
        src="./content/images/uprevenue.png"
      />
    </div>
  );
}
