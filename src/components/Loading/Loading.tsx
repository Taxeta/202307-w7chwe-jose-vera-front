import "./Loading.css";

const Loading = (): React.ReactElement => {
  return (
    <div className="loading" aria-label="loading">
      <span className="loading_image"></span>
    </div>
  );
};

export default Loading;
