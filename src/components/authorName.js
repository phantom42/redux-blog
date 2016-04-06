import React, { Component } from 'react';
import { reduxForm } from 'redux-form' ;

class AuthorName extends Component {
	render(){
		const {field, ...rest} = this.props;
		return (
			<div className={`form-group ${this.props.field.touched && this.props.field.invalid ? 'has-danger' : ''}`}>
				<label>Author Name</label>
				<input type="text" className="form-control" {...this.props.field}/>
				<div className="text-help">
					{this.props.field.touched ? this.props.field.error : null}
				</div>
			</div>
		)
	}
}

export default AuthorName