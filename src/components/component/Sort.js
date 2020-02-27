import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Sort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen : false
    }
    this.toggle = this.toggle.bind(this)
  }
  
  toggle = () => {
    this.setState({
      dropdownOpen : !this.state.dropdownOpen
    })
  };

  onClick = (sortBy, sortValue) => {
    
    this.props.onSort(sortBy, sortValue);
  }
  render() {
    
  return (
    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>Sắp xếp</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => this.onClick("theme", 1)}>
          <i className="fas fa-sort-alpha-down pr-2"></i>Chủ đề: Từ A-Z
        </DropdownItem>
        <DropdownItem onClick={() => this.onClick("theme", -1)}>
          <i className="fas fa-sort-alpha-up pr-2"></i>Chủ đề: Từ Z-A
        </DropdownItem>
        <DropdownItem divider /> 
        <DropdownItem onClick={() => this.onClick("status", 1)}>
          Trạng thái kích hoạt
        </DropdownItem>
        <DropdownItem onClick={() => this.onClick("status", -1)}>
          Trạng thái ẩn
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
  }
};

export default Sort;
