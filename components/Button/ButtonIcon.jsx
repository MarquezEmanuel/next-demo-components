import Link from 'next/link'
import { TrashIcon, PencilIcon, PlusCircleIcon, InformationCircleIcon } from "@heroicons/react/outline";

const ButtonIcon = ({ tipo, enlace, titulo }) => {

    let estilo = '';
    let icono = <TrashIcon className='w-5 h-5' />;

    switch (tipo) {
        case 'add':
            icono = <PlusCircleIcon className='w-5 h-5' />
            estilo = 'hover:text-green-500'
            break;
        case 'delete':
            icono = <TrashIcon className='w-5 h-5' />
            estilo = 'hover:text-red-500'
            break;
        case 'edit':
            icono = <PencilIcon className='w-5 h-5' />
            estilo = 'hover:text-yellow-500'
            break;
        case 'info':
            icono = <InformationCircleIcon className='w-5 h-5' />
            estilo = 'hover:text-blue-500'
            break;
    }

    return (
        <Link href={enlace} >
            <a title={titulo} className={estilo}>{icono}</a>
        </Link>);
}

export default ButtonIcon;