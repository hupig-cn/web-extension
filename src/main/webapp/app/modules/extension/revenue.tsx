import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

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
    case 'key1':
      break;
    case 'key2':
      break;
    case 'key3':
      break;
    case 'key4':
      break;
    case 'key5':
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
    <div
      style={{
        marginTop: '5px',
        paddingTop: '6px',
        backgroundColor: 'white',
        borderBottom: '1px solid #f0f0f0'
      }}
    >
      <div className={classes.divTitleName}>
        <span style={{ float: 'left' }}>收益管理</span>
        <span style={{ float: 'right', fontSize: '0.65rem', color: '#00000075' }}>○</span>
      </div>
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction label="冻结中" value="key1" icon={<span style={{ fontSize: '1.4rem' }}>300.00</span>} />
        <BottomNavigationAction label="可提现" value="key2" icon={<span style={{ fontSize: '1.4rem' }}>732.81</span>} />
        <BottomNavigationAction label="提现中" value="key3" icon={<span style={{ fontSize: '1.4rem' }}>650.30</span>} />
        <BottomNavigationAction label="持有总额" value="key4" icon={<span style={{ fontSize: '1.4rem' }}>5821.00</span>} />
      </BottomNavigation>
      <div style={{ height: '10px', width: '100%', backgroundColor: '#f0f0f0' }} />
    </div>
  );
}
