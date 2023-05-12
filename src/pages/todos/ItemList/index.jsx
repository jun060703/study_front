import * as S from './styled';
import Todo from '../../../components/todo';
function ItemList({ todos, searchvalue, deleteTodo }) {
  return (
    <S.ItemList>
      {todos
        //filter함수
        .filter(({ todo }) => todo.incluedes(searchvalue))
        .map(({ id, name }) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };
          return (
            <Todo key={id} deleteTodo={handleDeleteTodo}>
              {name}
            </Todo>
          );
        })}
    </S.ItemList>
  );
}
export default ItemList;
