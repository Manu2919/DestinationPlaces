import "./index.css";

const DestinationItem = (props) => {
  const { imageItem } = props;
  const { name, imgUrl } = imageItem;
  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="image-item" />
      <p className="destination-name">{name}</p>
    </li>
  );
};

export default DestinationItem;
