import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import Income from './income';
import Rrofiticon from './profiticon';
import Revenue from './revenue';
import Recommend from './recommend';

// 专用接口请求模块
import RequestLoadingWait, { Axios, Api } from 'app/request';

export interface IPersonalProp extends StateProps, DispatchProps {}

export class Personal extends React.Component<IPersonalProp> {
  constructor(props) {
    super(props);
    // 初始化接口数据结构
    this.state = Api.tsxExtension;
  }

  componentDidMount() {
    this.props.getSession();

    // 动态获取最新数据
    Axios.post(this.state.api, { username: 'sumwang', age: 18 }).then(response => {
      this.setState({ loading: false, 'data': response.data.data });
    }).catch(error => {
      // TODO toast error
      window.console.log(error);
    });
  }
  render() {
     const repos = this.state.data;
      return (
        <div className="jh-personal">
          {/* 同步请求 等待视图 */}
          <RequestLoadingWait loading={ this.state.loading } />

          <Income promote={repos.promote} income={repos.income} />
          <Rrofiticon />
          <Revenue revenue={repos.revenue} />
          <Recommend recommend={repos.recommend} />
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
