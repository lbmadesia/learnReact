import React, { Component } from "react";
import Name from "./component/Name";
class From extends Component {
    state = {
        items : [],
        text : "lb madesia"
    }
   addname = () => {
       let indata = document.getElementById("in_name").value;
       let item = [...this.state.items,indata];
       this.setState({items : item});
    }
    deleteName = (id) => {
      let item = this.state.items.filter((element,i)=>{
          return i !== id
      })
      this.setState({items : item});
    }
   render(){
    return (
      <div className="w-100 bg-dark">
        <div className="p-4 bg-light shadow-lg d-flex justify-content-center mb-4">
            <div className="w-50">
                <h3 className="text-center">Test App</h3>
                <div className="input-group">
                    <input type="text" name="name" id="in_name" placeholder="enter name" className="form-control" />
                    <div className="input-group-append">
                        <span className="input-group-text" onClick={this.addname}>ADD</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-4 bg-light d-flex justify-content-center mb-4">
            <div className="w-50">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center"><p>Name List</p><i className="fa fa-close text-danger"></i></li>
                       {
                           this.state.items.map((value , i) =>{
                               return <Name key={i} name={value} id={i} delete={ this.deleteName } />
                           })
                       }

                    </ul>
            </div>
        </div>

      </div>
    );
}
}
export default From;