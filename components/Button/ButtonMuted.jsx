const ButtonMuted = ({ children, color, margin }) => {

    return (
        <button className={`text-white text-sm font-medium rounded py-2 px-3 m-${margin} hover:bg-${color}-600 hover:shadow-inner`}>
            {children}
        </button>
    );
}

export default ButtonMuted;