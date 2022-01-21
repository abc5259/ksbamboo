import { Form, Input, TextArea } from "./BoardFormStyles";

const BoardForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="제목" spellCheck="false" />
      <TextArea
        placeholder="타인을 향한 욕설 및 비방은 징계 대상입니다."
        initial={{ height: 70 }}
        animate={{}}
        spellCheck="false"
      ></TextArea>
    </Form>
  );
};

export default BoardForm;
