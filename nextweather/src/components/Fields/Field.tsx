interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({ Icon, ...props }) => {
  return (
    <div className="relative flex items-center text-black">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          {Icon}
        </div>
      )}
      <input
        type="text"
        className={`w-full py-2 pl-10 pr-4 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        {...props}
      />
    </div>
  );
};
