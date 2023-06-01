import Form from "@/components/form/Form";
import Header from "@/components/header/Header";
import SubHeader from "@/components/subheader/subheader";

const CreateProfileSeven = () => {
  return (
    <Form>
      <Header
        titleClassName="text-3xl text-center mt-60"
        title="Profile Created"
      />
      <SubHeader
        titleClassName="text-2xl text-center mt-70"
        title="We have sent you an email to setup your password"
      />
    </Form>
  );
};

export default CreateProfileSeven;
