const NewRobotForm = () => {
  return (
    <form className="form">
      <div className="form-control">
        <label htmlFor="name" className="form__label">
          Name:
        </label>
        <input type="text" id="name" maxLength={45} className="form__input" />
      </div>
      <div className="form-control">
        <label htmlFor="image" className="form__label">
          Image:
        </label>
        <input type="text" id="image" maxLength={200} className="form__input" />
      </div>
      <div className="form-control">
        <label htmlFor="resistance">Resistance (1-10):</label>
        <input
          type="number"
          id="resistance"
          min="1"
          max="10"
          className="form__input"
        />
      </div>
      <div className="form-control">
        <label htmlFor="speed">Speed (1-10):</label>
        <input
          type="number"
          id="speed"
          min="1"
          max="10"
          className="form__input"
        />
      </div>
      <div className="form__button-container">
        <button type="submit" className="button form__button">
          Create Robot
        </button>
      </div>
    </form>
  );
};
export default NewRobotForm;
