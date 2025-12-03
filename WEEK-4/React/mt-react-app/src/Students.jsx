import PropTypes from 'prop-types';
function Students(props) {   
    return(
        <div className="stud"> 
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent ? "Yes" : "No"}</p>
        </div>
    );
}
Students.propsTypes={
    name: PropTypes.string
}
export default Students;