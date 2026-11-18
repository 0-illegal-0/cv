import preloading from "./data/preloading.json";

function Preloading() {
  let foo = preloading["logo-name"].split("");
  console.log(foo[0]);

  return (
    <div className="preload">
      <div className="preload-logo-name">
        {foo.map((value, index) => {
          return <span>{value}</span>;
        })}
      </div>
    </div>
  );
}

export default Preloading;
