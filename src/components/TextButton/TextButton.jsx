const TextButton = ({classSect, name}) => {
    return (
        <a href="/" className={classSect+'-txtbtn'}>{name}</a>
    );
};

export default TextButton;