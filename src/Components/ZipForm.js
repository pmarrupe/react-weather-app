import React from 'react';
import PropTypes from 'prop-types';

class ZipForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitZipCode = this.submitZipCode.bind(this);
	}

	submitZipCode(e) {
		const {onSubmit} = this.props;

		onSubmit(e.target.value); // communication between parent and child
	}
	render() {
		return (
			<div className="zip-form">
			<form>
			<label htmlFor="zipcode">Zip Code</label>
			<select onChange={this.submitZipCode}>
			<option value="">Select a zip</option>
			{this.props.zips.map(zip =>
				<option key={zip} value={zip}>{zip}</option>
				)}
			</select>
			</form>
			</div>
			);
	}
}

ZipForm.propTypes = {
  zips: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSubmit: PropTypes.func
};

ZipForm.defaultProps = {
  onSubmit: () => {}
};

export default ZipForm;