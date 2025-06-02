export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return (
        <span
            onClick={onClick}
            className={`inline-block mt-4 ml-2 rounded-md text-4xl px-32 py-8 cursor-pointer ${disabled ? "text-white bg-gray-400" : "bg-green-400"}`}
        >
            {children}
        </span>
    );
};
