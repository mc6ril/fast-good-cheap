const Input = (props) => {
    return (
        <input
            onClick={props.onClick}
            type={props.type}
            id={props.id}
            checked={props.checked}
        />
    );
};

export default Input;
