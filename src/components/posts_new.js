import React, { Component, PropTypes } from  'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		// createpost is an actioncreator that returns a promise
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate user to index
				// by calling this.context.router.push with new path
				this.context.router.push('/');
			});
	}
	render(){
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		return (
			// handleSubmit is a built-in redux-form function
			// <form onSubmit={handleSubmit(this.props.createPost)}>
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : null}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control"  {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : null}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content}/>
					<div className="text-help">
						{content.touched ? content.error : null}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		)
	}
}

function validate(values) {
	const errors = {};

	if (!values.title){
		errors.title = 'enter a username';
	}
	if (!values.categories){
		errors.categories = 'enter some categories';
	}
	if (!values.content){
		errors.content = 'enter some content';
	}

	return errors;
}

// connect first argument is mapStateToProps 2nd is mapDispatchToProps
// reduxform: 1st form config, 2nd mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNew',
	fields: ['title', 'categories', 'content'],
	validate
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