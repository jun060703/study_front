import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { setTodos, createTodo, deleteSelectedTodos, deleteTodo } from '../../reduce/todos';
import * as S from './styled';
import CreateItemBox from './CreateItembox';
import ItemList from './ItemList/';
import SearchInput from '../../components/SearchInput/';
import Button from '../../components/Button';
function Todos() {
  const [todoName, setTodoName] = useState('');
  const [tempTodos, setTodos] = useState([]);
  const [searchvalue, setSearchValue] = useState('');
  //선택한 todos들을 저장하는 state
  const [seletedTodoIds, setSelectedTodoIds] = useState([]);

  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos);
  const handelCreateTodo = () => {
    if (!todoName.trim()) {
      alert('값이 없습니다');
      return;
    }
    setTodoName('');
    dispatch(createTodo({ id: uuidv4(), name: todoName }));
  };
  const handelTodoDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };
  const handleSelectedTodoDelete = () => {
    dispatch(deleteSelectedTodos(seletedTodoIds));
  };
  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      dispatch(setTodos(parseTodos));
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      localStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <SearchInput
        onChange={value => {
          setSearchValue(value);
        }}
      />
      <CreateItemBox value={todoName} onChange={setTodoName} createTodo={handelCreateTodo} />
      <S.Button classname='buttond' onClick={handleSelectedTodoDelete}>
        선택된 todo삭제
      </S.Button>

      <ItemList
        todos={todos}
        searchvalue={searchvalue}
        deleteTodo={handelTodoDeleteTodo}
        setSelectedTodoIds={setSelectedTodoIds}
      />
    </S.Container>
  );
}
export default Todos;
