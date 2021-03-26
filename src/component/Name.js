const Name = (props) =>{
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center"><p>{props.name}</p><i className="fa fa-close text-danger" onClick={()=>{props.delete(props.id)}}></i></li>
    );
}
export default Name;