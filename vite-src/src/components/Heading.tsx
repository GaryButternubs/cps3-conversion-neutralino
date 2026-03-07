function Heading({ title, type }: { title: string; type: string }) {
  return (
    <header className="text-center mb-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-md">
        Converting from {type === "combined" ? "Combined" : "Split"} ROM to{" "}
        {type === "combined" ? "Split" : "Combined"} ROM
      </h2>
    </header>
  );
}

export default Heading;
