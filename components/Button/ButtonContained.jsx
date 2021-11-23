
const ButtonContained = ({ children, color, margin }) => {

    let estilo = '';

    switch (color) {
        case 'red':
            estilo = 'bg-red-600 hover:bg-red-700 '
            break;
        case 'green':
            estilo = 'bg-green-600 hover:bg-green-700'
            break;
        case 'yellow':
            estilo = 'bg-yellow-600 hover:bg-yellow-700'
            break;
    }

    return (
        <button className={`text-white text-sm font-medium rounded py-2 px-3 m-${margin} ${estilo} hover:shadow-inner`}>
            {children}
        </button>
    );
}

export default ButtonContained;