import Button from '../../../components/Button';

import * as S from './styled';
function CreateItemBox({ value, onChange, createTodo }) {
  const handleInputValue = e => {
    onChange(e.target.value);
  };
  const onKeyPress = e => {
    if (e.key == 'Enter') {
      createTodo();
    }
  };
  return (
    <S.InputBox>
      <S.Input
        value={value}
        placeholder='입력'
        onChange={handleInputValue}
        onKeyDown={onKeyPress}></S.Input>
      <Button onClick={createTodo}>등록</Button>
    </S.InputBox>
  );
}
export default CreateItemBox;
