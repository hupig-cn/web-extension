import React from 'react';

import { connect } from 'react-redux';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';
import Income from 'app/modules/extension/income';
import Rrofiticon from 'app/modules/extension/profiticon';
import Recommend from 'app/modules/extension/recommend';
import Enddiv from 'app/shared/menu/enddiv';
import { getProfitEntity } from 'app/requests/basic/profit.reducer';
import { IRootState } from 'app/shared/reducers';
import Error from 'app/modules/public/error';
import Recommendlist from './recommendlist';

export interface IExtensionProp extends StateProps, DispatchProps {}

export class Extension extends React.Component<IExtensionProp> {
  componentDidMount() {
    this.props.getSession();
    this.props
      .getSessionRE()
      // @ts-ignore
      .then(valueI => {
        valueI.payload.then(valueII => {
          this.props.getProfitEntity(valueII.data.id);
        });
      });
    // tslint:disable-next-line: unnecessary-bind
    window.addEventListener('scroll', this.handleScroll.bind(this)); // 监听滚动
  }
  componentWillUnmount() {
    // 一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    // tslint:disable-next-line: unnecessary-bind
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll = e => {
    // tslint:disable-next-line: no-console
    console.log(e.srcElement.scrollingElement.scrollTop, e.srcElement.scrollingElement.scrollHeight);
    console.log(
      e.srcElement.scrollingElement.clientHeight + e.srcElement.scrollingElement.scrollTop === e.srcElement.scrollingElement.scrollHeight
        ? '到底了'
        : '没到底'
    );
  };

  render() {
    const { account, profitEntity } = this.props;
    return (
      <div>
        {account && account.login ? (
          <div>
            <Income profit={profitEntity} />
            <Rrofiticon />
            <Recommend profit={profitEntity} />
            <Recommendlist />
            <Enddiv />
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ authentication, profit }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  profitEntity: profit.entity
});

const mapDispatchToProps = { getSession, getProfitEntity, getSessionRE };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Extension);
