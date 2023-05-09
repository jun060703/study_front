import * as S from './styled';
function Todos() {
  return (
    <S.Container>
      <S.Title>ToDoList</S.Title>
      <S.InputBox>
        <S.Input placeholder='입력'></S.Input>
      </S.InputBox>
    </S.Container>
  );
}
export default Todos;
