import React from "react";

class TaskItem extends React.Component { 
  onUpdateStatus=()=>{
   this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete=()=>{
    this.props.onDelete(this.props.task.id);
  }
  onUpdate=()=>{
    this.props.onUpdate(this.props.task.id);
  }
  render(){
    var {task, index} = this.props;
  return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{task.theme}</td>
                    <td>{task.author}</td>
                    <td>{task.content}</td>
                    <td className="text-center">
                      <span 
                      className={task.status===true?"btn btn-success far fa-life-ring":"btn btn-primary far fa-eye-slash"}
                      onClick={this.onUpdateStatus}
                      >
                      {task.status===true?'Kích hoạt':'Ẩn'}
                      </span>
                    </td>
                    <td className="text-center">
                      <button 
                      type="button" 
                      className="btn btn-warning"
                      onClick={this.onUpdate}
                      >
                        <span className="far fa-edit pr-2" />
                        Sửa
                      </button>
                      &nbsp;
                      <button 
                      type="button" 
                      className="btn btn-danger"
                      onClick={this.onDelete}
                      >
                        <span className="fa fa-trash pr-2" />
                        Xóa
                      </button>
                    </td>
                  </tr>
  );
}
}
export default TaskItem;
