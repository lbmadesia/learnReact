import Name from "./component/Name";


const From = () => {
   let state = {
        items : [],
        text : "lb madesia"
    }
    const addname = () => {
        console.log(state.text);
       state.text = "vivek has been changed";
       console.log(state.text);
    }
   
    return (
      <div className="w-100 bg-dark">
        <div className="p-4 bg-light shadow-lg d-flex justify-content-center mb-4">
            <div className="w-50">
                <h3 className="text-center">Test App</h3>
                <div className="input-group">
                    <input type="text" name="name" placeholder="enter name" className="form-control" />
                    <div className="input-group-append">
                        <span className="input-group-text" onClick={addname}>ADD</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-4 bg-light d-flex justify-content-center mb-4">
            <div className="w-50">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center"><p>Name List</p><i className="fa fa-close text-danger"></i></li>
                       <Name name={state.text} />
                    </ul>
            </div>
        </div>

      </div>
    );
}
export default From;