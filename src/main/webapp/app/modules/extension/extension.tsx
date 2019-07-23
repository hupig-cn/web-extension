import './extension.scss';

import React from 'react';

import { connect } from 'react-redux';

import { getSession } from 'app/shared/reducers/authentication';

import Profit from '../profit/profit';

import Enddiv from '../../shared/menu/enddiv';

export interface IHomeProp extends StateProps, DispatchProps {}

export class Home extends React.Component<IHomeProp> {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    return (
      <div className="jh-body">
        <Profit />
        <Enddiv />
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
