import {Component} from 'react';

import './App.css';

import Header from "../Header/Header";
import List from "../List/List";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import StatusBar from "../StatusBar";

class App extends Component {
    state = {
        todoData:  [
            { id: 0, title: 'Выпить кофе', important: false, done: false},
            { id: 1, title: 'Сделать React приложение', important: false, done: false},
            { id: 2, title: 'Позавтракать', important: false, done: false}
        ],
        term: '',
        status: 'all',
    }

    toggleParam = (param, id) => {
        this.setState((state) => {
            const newArray = state.todoData.map((task) => {
                return {
                    ...task,
                    [param]: id === task.id ? !task[param] : task[param],
                }
            })
 
            return {todoData: newArray}
        })   
    }

    onToggleImportant = (id) => this.toggleParam('important', id);

    onToggleDone = (id) => this.toggleParam('done', id);

    delTask = (id) => {
        this.setState((state) => {
            return {
                todoData: state.todoData.filter((task) => task.id !== id)
            }
        })
    }

    addItem = (taskTitle) => {
        this.setState((state) => {
            let ID = 0;
            if (state.todoData.length > 0) {
                const lastElement = state.todoData[state.todoData.length - 1];
                ID = lastElement.id + 1;
            }
            const newItem = {id: ID, title: taskTitle, important: false, done: false};
            const newArray = [...state.todoData, newItem];
            return {
                todoData: newArray
            }
        })
    }

    search = (tasks, term) => {
        if (term.trim().length === 0) {
            return tasks
        }

        return tasks.filter((task) => {
            if (task.title.toLowerCase().indexOf(term.toLowerCase().trim()) > -1) {
                return true
            }
        })
    }

    changeTerm = (term) => {
        this.setState({
            term: term
        })
    }

    filterByStatus = (tasks, status) => {
        switch (status) {
            case 'all':
                return tasks
            case 'active':
                return tasks.filter((task) => task.done === false)
            case 'done':
                return tasks.filter((task) => task.done === true)
            default:
                return tasks
        }
    }

    changeStatus = (status) => {
        this.setState({status: status}); 
    }

    render() {
        const filteredBySearchTasks = this.search(this.state.todoData, this.state.term);
        const filterByStatusTasks = this.filterByStatus(filteredBySearchTasks, this.state.status);

        return(
            <div>
            <Header />
            <div className="search">
                <Search changeTerm={this.changeTerm} term={this.state.term }/>
                <StatusBar changeStatus={this.changeStatus} status={this.state.status}></StatusBar>
            </div>
            <List 
            data={filterByStatusTasks } 
            onToggleImportant={this.onToggleImportant} 
            onToggleDone={this.onToggleDone} 
            delTask={this.delTask}
            />
            <Footer addItem={this.addItem} />
            </div>
        )
    }
}

export default App;
