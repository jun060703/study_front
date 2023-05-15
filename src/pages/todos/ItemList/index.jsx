import * as S from './styled';
import Todo from '../../../components/todo';
function ItemList({ todos, searchvalue, deleteTodo, setSelectedTodoIds }) {
  return (
    <S.ItemList>
      {todos
        //filter함수
        .filter(todo => {
          return todo.name.includes(searchvalue);
        })
        .map(({ id, name }) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };
          const handleSelected = checked => {
            if (checked) {
              //checkbox가 chek되었을때 기존에 선택되 있던 setetdoIds에 새로 선택한 todo의 id를 넣어준다
              //-.새로운 todo를선택했다
              setSelectedTodoIds(prevState => [...prevState, id]);
            } else {
              setSelectedTodoIds(prevState => prevState.filter(prevId => prevId !== id));
              //체크박스가 풀렸을때
              //선택한 todo삭제
            }
            console.log({ id, checked });
          };
          return (
            <Todo key={id} deleteTodo={handleDeleteTodo} handleSelected={handleSelected}>
              {name}
            </Todo>
          );
        })}
    </S.ItemList>
  );
}
export default ItemList;
