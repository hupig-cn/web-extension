import React from 'react';

import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import Income from 'app/modules/extension/income';
import Rrofiticon from 'app/modules/extension/profiticon';
import Revenue from 'app/modules/extension/revenue';
import Recommend from 'app/modules/extension/recommend';

import Enddiv from '../../shared/menu/enddiv';
export interface IExtensionProp extends StateProps, DispatchProps {}

export class Extension extends React.Component<IExtensionProp> {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    return (
      <div>
        <Income />
        <Rrofiticon />
        {/*<Revenue />*/}
        <Recommend />
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
)(Extension);
