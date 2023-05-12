import Button from '../Button';
import CheckBox from '../CheckBox';
import * as S from './styled';
function Todo(props) {
  const { deleteTodo, handleSelected } = props;
  return (
    <S.Container>
      <CheckBox onChange={handleSelected}></CheckBox>
      <S.Title>{props.children}</S.Title>
      <S.ButtonBox>
        <Button onClick={deleteTodo}>삭제</Button>
      </S.ButtonBox>
    </S.Container>
  );
}
export default Todo;
