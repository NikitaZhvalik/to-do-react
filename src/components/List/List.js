import './List.css';
import ListItem from './ListItem';

const List = () => {
            const items = [
                { id: 0, title: 'Выпить кофе' },
                { id: 1, title: 'Сделать React приложение' },
                { id: 2, title: 'Позавтракать' }
            ];

            const render = items.map((el) => 
                <ListItem key={el.id} el={el} />
            );

            const noTask = (
                <li className="todo-item justify-content-center">
                    <span className="todo-item-text">Список дел пуст</span>
                </li>
            )

            return  (<ul>
                        {items.length === 0 ? noTask : render}
                    </ul>);
}

export default List;