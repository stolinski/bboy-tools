import React, { PureComponent, PropTypes } from 'react';

export default class EmailPasswordForm extends PureComponent {
  propTypes: {
    submitAction: PropTypes.func.isRequired
  }

  getDefaultProps() {
    return {
      submitBtnLabel: 'Submit',
    };
  }

  render() {
    return (
      <form onSubmit={this.props.submitAction}>
        <div className="form-group">
          <input placeholder="Email" type="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <input placeholder="Password" type="password" id="password" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
        </div>
      </form>
    );
  }
}
