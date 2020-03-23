import React from "react";
import "./../App.css";
import TaskForm from "./component/TaskForm";
import Control from "./component/Control";
import TaskList from "./component/TaskList";
import Select from "react-select";
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks : [], //id, theme, author, content, status
      isDisplayForm: false,
      taskEditing:null,
      filter:{
        theme:'',
        author:'',
        content:'',
        status: -1
      },
      keyword:'' ,
      type:'',
      sort:{
        by:'',
        value:1
      }
    }
  }
  
  componentDidMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }
  //Hàm lấy id mặc /
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4();
  }
  onToggleForm=()=>{
    if(this.state.isDisplayForm && this.state.taskEditing!==null){
      this.setState({
        isDisplayForm : true,
        taskEditing:null
      })
    }else{
      this.setState({
        isDisplayForm : !this.state.isDisplayForm,
        taskEditing:null
      })
    }
    
  }
  onCloseForm=()=>{
    this.setState({
      isDisplayForm : false
    })

  }
  onSubmit=(data)=>{
    var {tasks}=this.state;
    if(data.id===''){
      data.id=this.generateID();
      tasks.push(data);
    }else{
      var index = this.findIndex(data.id);
      tasks[index]=data;
    }
    
    this.setState({
      tasks:tasks,
      taskEditing:null
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  onUpdateStatus=(id)=>{
    var {tasks}=this.state;
    var index = this.findIndex(id);
    if(index !==-1){
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    
  }
  findIndex=(id)=>{
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task,index)=>{
      if(task.id===id){
        result = index;
      }
    });
    return result;
  }
  onDelete=(id)=>{
    var {tasks}=this.state;
    var index = this.findIndex(id);
    if(index !==-1){
      tasks.splice(index,1);
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    this.onCloseForm();
  }
  onShowForm=()=>{
    this.setState({
      isDisplayForm : true
    })
  }
  onUpdate=(id)=>{
    var {tasks}=this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing : taskEditing
    });
    this.onShowForm();
  }
  onFilter=(filterTheme,filterAuthor,filterContent,filterStatus)=>{
    filterStatus=parseInt(filterStatus,10);
    this.setState({
      filter:{
        theme:filterTheme.toLowerCase(),
        author:filterAuthor.toLowerCase(),
        content:filterContent.toLowerCase(),
        status: filterStatus
      }
    })
  }
  onSearch=(keyword)=>{
    this.setState({
      keyword:keyword
    });
  }
  onSort=(sortBy,sortValue)=>{
    console.log(sortBy,sortValue);
  }
  clearModal=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal,
      submitted : false,
      theme : "",
      author : "",
      content : "",
      
    }));
  }
  handleChange(e) {
    this.setState({[e.target.name] : e.target.value})
  }
  render() {
   var {tasks, isDisplayForm, taskEditing, filter, keyword}=this.state; // var tasks = this.state.tasks;
   if(filter){
     if(filter.theme){
       tasks=tasks.filter((task)=>{
          return task.theme.toLowerCase().indexOf(filter.theme)!==-1;
       });
     }
     if(filter.author){
      tasks=tasks.filter((task)=>{
         return task.author.toLowerCase().indexOf(filter.author)!==-1;
      });
    }
    if(filter.content){
      tasks=tasks.filter((task)=>{
         return task.content.toLowerCase().indexOf(filter.content)!==-1;
      });
    }
    tasks=tasks.filter((task)=>{
      if(filter.status===-1){
        return task;
      }else{
        return task.status === (filter.status ===1?true:false);
      }
    });
   }
  if(keyword){
      tasks=tasks.filter((task)=>{
         return task.theme.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
      });
  }
   
   var elmTaskForm=isDisplayForm
   ?<TaskForm 
   onSubmit={this.onSubmit} 
   onCloseForm={this.onCloseForm}
   task={taskEditing}
   ></TaskForm>
   :'' ;
   return (
    <div className="container-fluid">
      <div className="text-center">
        <h1>Quản Lý Bài Đăng</h1>
        <hr />
      </div>
      <div className="row">
        <div className={isDisplayForm===true?"col-xs-3 col-sm-3 col-md-3 col-lg-3":''}>
          {elmTaskForm}
          
        </div>
        <div className={isDisplayForm===true?"col-xs-9 col-sm-9 col-md-9 col-lg-9":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
          <button
           type="button" 
           className="btn btn-primary mr-5"
           onClick={this.onToggleForm}
           >
            <span className="fas fa-plus pr-2" />           
            Thêm Bài Đăng
          </button>
          <button
                className="btn btn-primary btn-sm pull-right"
                type="button"
                value="+ Thêm bài đăng"
                onClick={() => this.setState({type : "create", modal : true})}
              >
                <i className="fa fa-plus"/> Thêm bài đăng
              </button>
            <Control
            onSearch={this.onSearch}
            onSort={this.onSort}
            ></Control>           
         
          <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-200">
              <TaskList 
              tasks={tasks} 
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
              ></TaskList>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={this.state.modal} className="modal-lg modal-custom">
              <KeyHandler
                keyEventName={KEYPRESS}
                // code="0x20"
                keyCode={0x20} // space
                onKeyHandle={this.clearModal}
              />
              <KeyHandler
                keyEventName={KEYPRESS}
                keyValue="Enter"
                onKeyHandle={this.handleSaveModal}
              />
              <ModalHeader toggle={this.clearModal}>
                <b>
                {
                  this.state.type === "create" ?
                  "Thêm mới bài đăng" :
                  "Cập nhật thông tin bài đăng"
                }
                </b>
              </ModalHeader>
              <ModalBody>
                <Row className="margin-bottom-30">
                  <Col xs="2"/>
                  <Col xs="2"><span>Chủ đề</span></Col>
                  <Col xs="6">
                    <input
                      name="theme"
                      value={this.state.theme}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                    {
                      this.state.modal && this.state.submitted &&
                      this.state.theme.length === 0 &&
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
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                    {
                      this.state.modal && this.state.submitted &&
                      this.state.name.length === 0 &&
                      <small className="form-text text-danger">Trường này là bắt buộc</small>
                    }
                  </Col>
                </Row>
                <Row className="margin-bottom-30">
                  <Col xs="2"/>
                  <Col xs="2"><span>Nội dung</span></Col>
                  <Col xs="6">
                    <input
                      name="content"
                      value={this.state.content}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                    {
                      this.state.modal && this.state.submitted &&
                      this.state.content.length === 0 &&
                      <small className="form-text text-danger">Trường này là bắt buộc</small>
                    }
                  </Col>
                </Row>
                <Row>
                  <Col xs="2"/>
                  <Col xs="2"><span>Trạng thái</span></Col>
                  <Col xs="6">
                    <Select
                      required="required"
                      name="status"
                      value={this.state.status}
                      onChange={this.handleChange}
                      placeholder={"Trạng thái..."}
                    />
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-light btn-sm" type="button" onClick={()=> {
                  this.clearModal()
                }
                }>
                  Hủy bỏ
                </button>
                <button className="btn btn-primary btn-sm" type="button" onClick={()=> {
                  this.setState({submitted : true});
                  if(this.state.subject_name.length > 0 && this.state.code.length > 0)
                    if(this.state.type === "create")
                      this.handleSaveModal()
                    else
                      this.handleSaveModalEdit(this.state.content_edit_id)
                }}>Lưu
                </button>
              </ModalFooter>

            </Modal>
    </div>
   );
  }
}

export default Home;
