import React ,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
class CoursesPage extends Component{
	constructor(props, context){
		super(props,context);

		this.state = {
			course:{ title : "" }
		};
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}
	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course:course});
	}
	onClickSave(event){
		//alert(event.target.previousElementSibling.value);
		event.target.previousElementSibling.value = "";
		this.props.actions.createCourse(this.state.course); // this is the ugly way of dispatching the action if we are not using mapDispatchToProps
		//alert(`Saving ${this.state.course.title} & Clicked at ${event.target.value} button` );
	}
	courseRow(course,index){
		return <div key={index}>{course.title}</div>;

	}
	render(){
		debugger;
		return(
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Course</h2>
				<input 
					type="text"
					onChange={this.onTitleChange}/>
				<input 
					type="submit"
					value="Save"
					onClick={this.onClickSave} />
			</div>
		);
	}
}
CoursesPage.propTypes = {
	//dispatch : PropTypes.func.isRequired,
	courses : PropTypes.array.isRequired,
	actions : PropTypes.object.isRequired 
};
function mapStateToProps(state,ownProps){
	debugger;
	return {
		courses:state.courses
	};
}
function mapDispatchToProps(dispatch){
	return {
		actions : bindActionCreators(courseActions,dispatch)
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage) ;
