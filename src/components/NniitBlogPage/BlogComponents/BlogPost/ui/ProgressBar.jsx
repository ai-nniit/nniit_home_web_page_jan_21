function ProgressBar({ progress }) {
    return (
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-red-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  
  export default ProgressBar;