import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import Income from './income';
import Rrofiticon from './profiticon';
import Revenue from './revenue';
import Recommend from './recommend';

export interface IPersonalProp extends StateProps, DispatchProps {}

export class Personal extends React.Component<IPersonalProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div className="jh-personal">
        <Income />
        <Rrofiticon />
        <Revenue />
        <Recommend />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal);
