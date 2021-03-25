const Miscellaneous = (props) => {
  return (
    <ul className="miscellaneous-data">
      {Object.keys(props).map((data, index) => {
        return <li key={index}>{props[data]}</li>;
      })}
    </ul>
  );
};
export default Miscellaneous;
