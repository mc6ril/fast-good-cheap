const Icone = (props) => {
    return (
        <a href={props.href}>
            <i className={props.className}></i>
        </a>
    );
};

export default Icone;
