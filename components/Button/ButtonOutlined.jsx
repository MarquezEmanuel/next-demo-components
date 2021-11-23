
const ButtonOutlined = ({ children, color, margin }) => {

    let estilo = '';

    switch (color) {
        case 'danger':
            estilo = 'border-red-600 hover:bg-red-600'
            break;
        case 'success':
            estilo = 'border-green-600 hover:bg-green-600'
            break;
        case 'warning':
            estilo = 'border-yellow-600 hover:bg-yellow-600'
            break;
    }

    return (
        <button className={`text-white text-sm font-medium rounded py-2 px-3 m-${margin} border ${estilo} hover:shadow-inner hover:border-transparent`}>
            {children}
        </button>
    );
}

export default ButtonOutlined;