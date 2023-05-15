import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import * as S from './styled';
import CreateItemBox from './CreateItembox';
import ItemList from './ItemList';
import SearchInput from '../../components/SearchInput/';
import Button from '../../components/Button';
function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);
  const [searchvalue, setSearchValue] = useState('');
  //선택한 todos들을 저장하는 state
  const [seletedTodoIds, setSelectedTodoIds] = useState([]);
  const createTodo = () => {
    console.log('asdfdasf');
    if (!todoName.trim()) {
      alert('값이 없습니다');
      return;
    }
    setTodoName('');
    setTodos(prevState => [...prevState, { id: uuidv4(), name: todoName }]);
  };
  const deleteTodo = id => {
    const findIndex = todos.findIndex(v => v.id === id);
    setTodos(prevState => {
      const tempArr = [...prevState];
      tempArr.splice(findIndex, 1);
      return tempArr;
    });
  };
  const deleteSelectedTodos = () => {
    setTodos(prevState => {
      return prevState.filter(todo => !seletedTodoIds.includes(todo.id));
    });
  };
  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(parseTodos);
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
      <searchInput
        onChange={value => {
          setSearchValue(value);
        }}
      />
      <CreateItemBox value={todoName} onChange={setTodoName} createTodo={createTodo} />
      <S.Button classname='buttond' onClick={deleteSelectedTodos}>
        선택된 todo삭제
      </S.Button>

      <ItemList
        todos={todos}
        searchvalue={searchvalue}
        deleteTodo={deleteTodo}
        setSelectedTodoIds={setSelectedTodoIds}
      />
    </S.Container>
  );
}
export default Todos;
