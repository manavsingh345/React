export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return <span onClick={onClick} className={`rounded-2xl text-4xl px-2 py-2  cursor-pointer  bg-gray-400`}>
        <input type={type} placeholder={placeholder} className="bg-gray-400 outline-none"></input>
    </span>
}