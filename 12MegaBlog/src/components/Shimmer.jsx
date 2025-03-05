function Shimmer() {
  return (
    <div className="animate-pulse max-w-7xl mx-auto">
      {/* Header shimmer */}
      <div className="h-16 bg-gray-200 rounded-lg mb-8"></div>
      
      {/* Content shimmer */}
      <div className="space-y-6">
        {/* Title block */}
        <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
        
        {/* Content blocks */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        {/* Image placeholder */}
        <div className="h-64 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}

export default Shimmer;