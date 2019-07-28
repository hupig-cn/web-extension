import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';

import Users from './users';
import Recommend from './recommend';
import Advertising from './advertising';
import Error from 'app/modules/public/error';
import { getMyImg } from 'app/requests/basic/files.reducer';
import Profit from './profit';
import Entrys from './entrys';
import { getProfitEntity } from 'app/requests/basic/profit.reducer';
import Enddiv from 'app/shared/menu/enddiv';

export interface IPersonalProp extends StateProps, DispatchProps {}

export class Personal extends React.Component<IPersonalProp> {
  state = { file: '', fileContentType: '' };
  componentDidMount() {
    this.props.getSession();
    this.props
      .getSessionRE()
      // @ts-ignore
      .then(valueI => {
        valueI.payload.then(valueII => {
          this.props.getProfitEntity(valueII.data.id);
          if (valueII.data.imageUrl > 0) {
            this.props
              .getMyImg(valueII.data.imageUrl)
              // @ts-ignore
              .then(photo => {
                this.setState({
                  file: photo.value.data.file,
                  fileContentType: photo.value.data.fileContentType
                });
              });
          }
        });
      });
  }

  render() {
    const { account, profitEntity } = this.props;
    return (
      <div>
        {account && account.login ? (
          <div className="jh-personal">
            <Users account={account} state={this.state} profit={profitEntity} />
            <Recommend profit={profitEntity} />
            <Advertising />
            <Profit profit={profitEntity} />
            <Entrys profit={profitEntity} />
            <Enddiv />
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, files, profit }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  filesEntity: files.entity,
  profitEntity: profit.entity
});

const mapDispatchToProps = { getSession, getMyImg, getSessionRE, getProfitEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal);
