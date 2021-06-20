import React, {Fragment, useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/layout/NavBar'
import AddUserModal from './components/users/AddUserModal'
import UserListModal from './components/users/UserListModal'
import EditUserModal from './components/users/EditUserModal'
import AddTaskModal from './components/tasks/AddTaskModal'
import EditTaskModal from './components/tasks/EditTaskModal'
import Tasks from './components/tasks/Tasks'
import AddBtn from './components/layout/AddBtn'
import AddProjectModal from './components/projects/AddProjectModal'
import { Provider } from 'react-redux'
import store from './store'
import AddProjectButton from './components/layout/AddProjectButton'
import UserSelectOptions from './components/users/UserSelectOptions';
import ProjectListModal from './components/projects/ProjectListModal'
import ShowTaskContent from './components/tasks/ShowTaskContent'
const App = () => {

  useEffect(() => {
    M.AutoInit();
  })
  return (
    <Provider store={store}>
    <Fragment>
      <NavBar />
      
      <div className="container">
        <AddBtn />
        <AddTaskModal />
        <EditTaskModal />
        <AddProjectModal />
        <ProjectListModal />
        <AddUserModal />
        <UserListModal />
        <ShowTaskContent />
        <Tasks />
      </div>
    </Fragment>
    </Provider>
  );
  
}

export default App;
