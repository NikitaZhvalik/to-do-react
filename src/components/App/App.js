import React from 'react';

import './App.css';

import Header from "../Header/Header";
import List from "../List/List";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";

class App extends React.Component {
    state = {
        todoData:  [
            { id: 0, title: 'Выпить кофе', important: false, done: false},
            { id: 1, title: 'Сделать React приложение', important: false, done: false},
            { id: 2, title: 'Позавтракать', important: false, done: false}
        ],
        term: '',
    }

    onToggleImportant = (id) => {
        this.setState((state) => {
            // находим индекс задачи
            const index = state.todoData.findIndex((el) => el.id === id);

            // формируем новый {}, но с обратным значением important
            const oldItem = state.todoData[index];
            const newItem = {...oldItem, important: !oldItem.important};

            // формируем новый массив вставляя в него вместо старого новый {}
            const part1 = state.todoData.slice(0, index);
            const part2 = state.todoData.slice(index + 1);
            const newArray = [...part1, newItem, ...part2];

            return {
                todoData: newArray
            }
        })
    }

    onToggleDone = (id) => {
        this.setState((state) => {
            const index = state.todoData.findIndex((el) => el.id === id)

            const findTask = state.todoData[index];
            const newTask = {...findTask, done: !findTask.done};

            const part1 = state.todoData.slice(0, index);
            const part2 = state.todoData.slice(index + 1);
            const newArray = [...part1, newTask, ...part2];

            return {
                todoData: newArray
            }
        })
    }

    delTask = (id) => {
        this.setState((state) => {
            const index = state.todoData.findIndex((task) => task.id === id);
    
            const part1 = state.todoData.slice(0, index);
            const part2 = state.todoData.slice(index + 1);
    
            const newArray = [...part1, ...part2]

            return {
                todoData: newArray
            }
        })
    }

    addItem = (taskTitle) => {
        this.setState((state) => {
            const ID = state.todoData[state.todoData.length - 1]['id'] + 1;
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

    render() {
        const visibleItems = this.search(this.state.todoData, this.state.term);

        return(
            <div>
            <Header />
            <List 
            data={visibleItems} 
            onToggleImportant={this.onToggleImportant} 
            onToggleDone={this.onToggleDone} 
            delTask={this.delTask}
            />
            <Search changeTerm={this.changeTerm} term={this.state.term }/>
            <Footer addItem={this.addItem} />
            </div>
        )
    }
}

export default App;
