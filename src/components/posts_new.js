import React, { Component } from  'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render(){
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control"  {...categories} />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content}/>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}
// connect first argument is mapStateToProps 2nd is mapDispatchToProps
// reduxform: 1st form config, 2nd mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNew',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);


// user types something in, record it on app state
/*
state === {
	form: {
		PostsNewForm : {
			title: '...',
			categories: '....',
			content: '....'
		}
	}
}
*/