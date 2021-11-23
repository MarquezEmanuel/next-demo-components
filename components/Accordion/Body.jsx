
const AccordionBody = ({ children, visible }) => {
    const hidden = (visible) ? '' : 'hidden';
    return (<div className={'flex-1 p-2 bg-blue-900 ' + hidden}>{children}</div>);
}

export default AccordionBody;