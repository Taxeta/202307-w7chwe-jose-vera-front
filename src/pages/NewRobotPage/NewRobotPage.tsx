import NewRobotForm from "../../components/NewRobotForm/NewRobotForm";
import "./NewRobotPage.css";

const NewRobotPage = () => {
  return (
    <section className="section-container">
      <div className="section-title">
        <h2 className="create-title">Create your robot!</h2>
      </div>
      <NewRobotForm />
    </section>
  );
};

export default NewRobotPage;
