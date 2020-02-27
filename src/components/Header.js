import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';

import {
  BrowserRouter as Router
} from "react-router-dom";
class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isOpen : false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle = () => {
    this.setState({
      isOpen : !this.state.isOpen
  });
  }
  render(){

  return (
      <Router>
        <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="set-color">WEBTEST</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/trangchu">Trang chủ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home">Quản lý</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gioithieu">Giới thiệu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lienhe">Liên hệ</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Phản hồi
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/chiase">
                <i className="fas fa-share mr-2"></i>
                  Chia sẻ
                </DropdownItem>
                <DropdownItem href="/gopy">
                <i className="fas fa-comments mr-2"></i>
                  Góp ý
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/taitro">
                <i className="fas fa-phone mr-2"></i>
                  Tài trợ
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>      
      </div>
      </Router>
    
  );
  }
};
export default Header;