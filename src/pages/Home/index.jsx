import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";

export const Home = ({ user }) => {
  return (
    <section>
      <Header user={user} />
      <Form />
      <Posts />
    </section>
  );
};
