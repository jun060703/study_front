import Button from '../Button';

import * as S from './styled';
function Todo(props) {
  const { deleteTodo } = props;
  return (
    <S.Container>
      <S.Title>{props.children}</S.Title>
      <S.ButtonBox>
        <Button>중요</Button>
        <Button onClick={deleteTodo}>삭제</Button>
      </S.ButtonBox>
    </S.Container>
  );
}
export default Todo;
