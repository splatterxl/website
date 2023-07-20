export const Tooltip: React.FC<{
  message: string;
  className?: string;
  classNameContainer?: string;
}> = ({ message, children, className, classNameContainer }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div
        className={`absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex ${classNameContainer}`}
      >
        <span
          className={`relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md ${className}`}
        >
          {message}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
};
