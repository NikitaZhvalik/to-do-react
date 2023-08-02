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
                todoData: newArray,
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
                todoData: newArray,
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
                todoData: newArray,
            }
        })
    }

    render() {
        return(
            <div>
            <Header />
            <List 
            data={this.state.todoData} 
            onToggleImportant={this.onToggleImportant} 
            onToggleDone={this.onToggleDone} 
            delTask={this.delTask}
            />
            <Search />
            <Footer />
            </div>
        )
    }
}

export default App;
