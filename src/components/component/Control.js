import React from "react";
import Search from "./Search.js"
import Sort from "./Sort.js"
class Control extends React.Component { 
  render(){
  return (
    <div className="row mt-15">          
            <Search 
            onSearch={this.props.onSearch}
            ></Search>
            <Sort
            onSort={this.props.onSort}
            ></Sort>
        </div>
  );
}
}
export default Control;
