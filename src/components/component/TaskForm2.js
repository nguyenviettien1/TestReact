import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
class TaskForm2 extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      id:'',
      theme:'',
      author:'',
      content:'',
      status:false,
      modal:false
    }
  }
  onChange=(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name==='status'){
      value = target.value ==='true'?true:false;
    }
    this.setState({
      [name]:value
    });
  }
  onSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  }
  onClear=()=>{
    this.setState({
      id:'',
      theme:'',
      author:'',
      content:'',
      status:false
    });
  }
  componentDidMount(){
    if(this.props.task){
      this.setState({
        id:this.props.task.id,
        theme:this.props.task.theme,
        author:this.props.task.author,
        content:this.props.task.content,
        status:this.props.task.status,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps &&nextProps.task){
      this.setState({
        id:nextProps.task.id,
        theme:nextProps.task.theme,
        author:nextProps.task.author,
        content:nextProps.task.content,
        status:nextProps.task.status,
      }); 
    }else if(!nextProps.task){
      this.setState({
        id:'',
        theme:'',
        author:'',
        content:'',
        status:false
      });
    }
  }
  render(){
    var{id}=this.state;
      return(
        <Modal isOpen={true} className="modal-lg modal-custom">
        <KeyHandler
          keyEventName={KEYPRESS}
          // code="0x20"
          keyCode={0x20} // space
          onKeyHandle={this.onClear}
        />
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue="Enter"
          onKeyHandle={this.onSubmit}
        />
        <ModalHeader toggle={this.onClear}> 
            {id!==''?'Cập nhật bài đăng' : 'Thêm bài đăng'} 
        </ModalHeader>
        <ModalBody>
          <Row className="margin-bottom-30">
            <Col xs="2"/>
            <Col xs="2"><span>Chủ đề</span></Col>
            <Col xs="6">
              <input
                name="theme"
                value={this.state.theme}
                onChange={this.onChange}
                type="text"
                className="form-control"
              />
              {
                this.state.theme.length == 0 &&
                <small className="form-text text-danger">Trường này là bắt buộc</small>
              }
            </Col>
          </Row>
          <Row className="margin-bottom-30">
            <Col xs="2"/>
            <Col xs="2"><span>Tác giả</span></Col>
            <Col xs="6">
              <input
                name="author"
                value={this.state.author}
                onChange={this.onChange}
                type="text"
                className="form-control"
              />
              {
                this.state.author.length == 0 &&
                <small className="form-text text-danger">Trường này là bắt buộc</small>
              }
            </Col>
          </Row>
          <Row>
            <Col xs="2"/>
            <Col xs="2"><span>Nội dung</span></Col>
            <Col xs="6">
            <input
                name="content"
                value={this.state.content}
                onChange={this.onChange}
                type="text"
                className="form-control"
              />
              {
                this.state.content.length == 0 &&
                <small className="form-text text-danger">Trường này là bắt buộc</small>
              }
            </Col>
          </Row>
          <Row>
            <Col xs="2"/>
            <Col xs="2"><span>Trạng thái</span></Col>
            <Col xs="6">
                <select className="form-control" 
                        required="required"
                        name="status"
                        value={this.state.status}
                        onChange={this.onChange}
                >
                  <option value={true}>Kích Hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
            </Col>
           </Row>
        </ModalBody>
        <ModalFooter>
                <div className="text-center">
                  <button type="submit" className="btn btn-success">
                    <i className="fas fa-plus pr-2"></i>
                    Lưu lại
                  </button>
                  &nbsp;
                  <button type="button" 
                          className="btn btn-danger"
                          onClick={this.onClear}
                  >
                    <i className="fas fa-trash-alt pr-2"></i>
                    Hủy Bỏ
                  </button>
                </div>
        </ModalFooter>

      </Modal>
      );
  }
}
export default TaskForm2;