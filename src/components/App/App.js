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

    render() {
        return(
            <div>
            <Header />
            <List data={this.state.todoData}/>
            <Search />
            <Footer />
            </div>
        )
    }
}

export default App;
