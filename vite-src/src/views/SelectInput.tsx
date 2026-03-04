import { useParams } from "react-router";

function SelectInput() {
  const { type, game } = useParams();

  return (
    <>
      <header className="text-center mb-20">
        <h1 className="text-3xl font-bold">{game}</h1>
        <h2 className="text-md">
          Converting from {type === "combined" ? "Combined" : "Split"} to{" "}
          {type === "combined" ? "Split" : "Combined"}
        </h2>
      </header>
    </>
  );
}

export default SelectInput;
