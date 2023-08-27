import { Robot } from "../../types";
import "./RobotCard.css";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: { name, image, resistance, speed },
}: RobotCardProps): React.ReactElement => {
  return (
    <article className="robot">
      <h2 className="robot__name">{name}</h2>
      <div className="robot__container">
        <img
          className="robot__image"
          src={`${image}`}
          alt={`${name} destroying a robot`}
        />
      </div>
      <ul>
        <li className="robot__data-container">
          <span className="robot__data-label">Resistance: </span>
          {resistance}
        </li>
        <li className="robot__data-container">
          <span className="robot__data-label">Speed: </span> {speed}
        </li>
      </ul>
    </article>
  );
};

export default RobotCard;
