import React from 'react';

import { connect } from 'react-redux';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';
import Income from 'app/modules/extension/income';
import Rrofiticon from 'app/modules/extension/profiticon';
import Recommend from 'app/modules/extension/recommend';
import Enddiv from 'app/shared/menu/enddiv';
import { getProfitEntity, findAllByRecommendAndInfo } from 'app/requests/basic/profit.reducer';
import { IRootState } from 'app/shared/reducers';
import Error from 'app/modules/public/error';
import Recommendlist from './recommendlist';

export interface IExtensionProp extends StateProps, DispatchProps {}

export class Extension extends React.Component<IExtensionProp> {
  state = { recommenduser: [{}], startPage: 0, pageSize: 10 };
  componentDidMount() {
    this.props.getSession();
    this.props
      .getSessionRE()
      // @ts-ignore
      .then(valueI => {
        valueI.payload.then(valueII => {
          this.props.getProfitEntity(valueII.data.id);
          this.props
            .findAllByRecommendAndInfo(valueII.data.id, this.state.startPage, this.state.pageSize)
            // @ts-ignore
            .then(val => {
              val.value.data.data.map(key => {
                const recommenduser = this.state.recommenduser;
                recommenduser.push({ phoneOrToken: key.phoneOrToken, time: key.time });
                this.setState({ recommenduser, startPage: 1 });
              });
            });
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
    if (
      e.srcElement.scrollingElement.clientHeight + e.srcElement.scrollingElement.scrollTop ===
      e.srcElement.scrollingElement.scrollHeight
    ) {
      this.props
        .findAllByRecommendAndInfo(this.props.account.id, this.state.startPage, this.state.pageSize)
        // @ts-ignore
        .then(val => {
          if (val.value.data.data !== undefined && undefined !== val.value.data.data.map) {
            val.value.data.data.map(key => {
              const recommenduser = this.state.recommenduser;
              recommenduser.push({ phoneOrToken: key.phoneOrToken, time: key.time });
              this.setState({ recommenduser, startPage: this.state.startPage + 1 });
            });
          }
        });
    }
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
            <Recommendlist state={this.state} />
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

const mapDispatchToProps = { getSession, getProfitEntity, getSessionRE, findAllByRecommendAndInfo };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Extension);
