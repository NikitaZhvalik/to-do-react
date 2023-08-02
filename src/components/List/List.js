import './List.css';
import ListItem from './ListItem';

const List = (props) => {
            const render = props.data.map((task) => 
                <ListItem onToggleDone={props.onToggleDone} onToggleImportant={props.onToggleImportant} key={task.id} task={task} />
            );

            const noTask = (
                <li className="todo-item justify-content-center">
                    <span className="todo-item-text">Список дел пуст</span>
                </li>
            )

            return  (<ul>
                        {props.data.length === 0 ? noTask : render}
                    </ul>);
}

export default List;