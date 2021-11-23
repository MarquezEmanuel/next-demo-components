
const AccordionHeader = ({ id, titulo, descripcion, handleClick, children }) => {
    return (
        <div className='flex flex-row'>
            <div onClick={handleClick} className='flex w-16 p-1 font-bold items-center hover:text-black'>
                {id}
            </div>
            <div className='px-2 w-full mt-2'>
                <div className='uppercase font-bold'>
                    {titulo}
                </div>
                <div className='uppercase text-xs mb-2'>
                    {descripcion}
                </div>
            </div>
            <div className='w-60'>
                <div className='flex w-full h-full px-2 items-center justify-end'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AccordionHeader;