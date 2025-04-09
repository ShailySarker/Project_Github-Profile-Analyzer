export const SkeletonRepoList = () => {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="animate-pulse border p-3 rounded-xl shadow-sm">
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  };
  