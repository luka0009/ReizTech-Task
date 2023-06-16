const LoadingCard = () => {
  return (
    <div
      className="border-2 flex flex-col items-start p-2 px-4
     justify-center bg-green-300 animate-pulse gap-3"
    >
      <div className="h-3 w-72 animate-pulse bg-gray-400" />
      <div className="h-3 w-64 animate-pulse bg-gray-400" />
      <div className="h-3 w-80 animate-pulse bg-gray-400" />
    </div>
  );
};

export default LoadingCard;
