import ButtonOutlined from '../../components/Button/ButtonOutlined'
import ButtonContained from '../../components/Button/ButtonContained'
import ButtonMuted from '../../components/Button/ButtonMuted'
import ButtonIcon from '../../components/Button/ButtonIcon';

const Boton = () => {
    return (
        <div className='h-screen bg-blue-900 text-white'>
            <h1>BUTTON</h1>
            <ButtonMuted margin='1' color='red'>Botón</ButtonMuted>
            <ButtonMuted margin='1' color='green'>Botón</ButtonMuted>
            <ButtonMuted margin='1' color='yellow'>Botón</ButtonMuted>
            <br />
            <ButtonOutlined margin='1' color='danger'>Botón</ButtonOutlined>
            <ButtonOutlined margin='1' color='success'>Botón</ButtonOutlined>
            <ButtonOutlined margin='1' color='warning'>Botón</ButtonOutlined>
            <br />
            <ButtonContained margin='1' color='red'>Botón</ButtonContained>
            <ButtonContained margin='1' color='green'>Botón</ButtonContained>
            <ButtonContained margin='1' color='yellow'>Botón</ButtonContained>
            <br />
            <ButtonIcon tipo='add' enlace='/' titulo='Agregar'></ButtonIcon>
            <ButtonIcon tipo='delete' enlace='/' titulo='Eliminar'></ButtonIcon>
            <ButtonIcon tipo='edit' enlace='/' titulo='Editar'></ButtonIcon>
            <ButtonIcon tipo='info' enlace='/' titulo='Información'></ButtonIcon>

        </div>);
}

export default Boton;