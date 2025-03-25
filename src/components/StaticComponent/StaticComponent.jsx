
const StaticComponent = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <h2>StaticComponent</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default StaticComponent;