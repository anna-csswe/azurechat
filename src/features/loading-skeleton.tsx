export const LoadingSkeleton = () => {
  return (
    <div className="h-full flex items-center justify-center bg-card flex-1">
      <img
        width={150}
        height={150}
        alt=""
        src="/cs-logo.png"
        className="animate-bounce"
      />
    </div>
  );
};
