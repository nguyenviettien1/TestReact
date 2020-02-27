import React from "react";

class TaskForm extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      id:'',
      theme:'',
      author:'',
      content:'',
      status:false
    }
  }
  onCloseForm=()=>{
    this.props.onCloseForm();
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
    this.onCloseForm();
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
  return (
    <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">
               {id!==''?'Cập nhật bài đăng' : 'Thêm bài đăng'}
              <span className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
              ></span>
              </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label><b><i className="fas fa-trophy pr-2"></i>Chủ đề :</b></label>
                  <input type="text" 
                  className="form-control" 
                  name="theme"
                  value={this.state.theme}
                  onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label><b><i className="fas fa-user-tie pr-2"></i>Tác giả :</b></label>
                  <input type="text" 
                  className="form-control" 
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label><b><i className="fas fa-book pr-2"></i>Nội dung :</b></label>
                  <input type="text" 
                  className="form-control" 
                  name="content"
                  value={this.state.content}
                  onChange={this.onChange}
                  />
                </div>
                <label><b>Trạng Thái :</b></label>
                <select className="form-control" 
                        required="required"
                        name="status"
                        value={this.state.status}
                        onChange={this.onChange}
                >
                  <option value={true}>Kích Hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
                <br />
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
              </form>
            </div>
          </div>
  );
}
}
export default TaskForm;
