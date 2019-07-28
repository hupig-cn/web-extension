import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';

import Users from './users';
import Recommend from './recommend';
import Advertising from './advertising';
import Error from 'app/modules/public/error';
import { getMyImg } from 'app/requests/basic/files.reducer';
import { queryBalance } from 'app/requests/basic/userassets.reducer';
import Profit from './profit';
import Entrys from './entrys';

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
          this.props.queryBalance(valueII.data.id);
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
    const { account, userassetsEntity } = this.props;
    return (
      <div>
        {!(account && account.login) ? (
          <div className="jh-personal">
            <Users account={account} state={this.state} userassets={userassetsEntity} />
            <Recommend />
            <Advertising />
            <Profit />
            <Entrys />
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, files, userassets }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  filesEntity: files.entity,
  userassetsEntity: userassets.entity
});

const mapDispatchToProps = { getSession, getMyImg, getSessionRE, queryBalance };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal);
