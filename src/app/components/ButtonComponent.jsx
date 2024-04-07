import '../assets/css/Button.css';

function Button({children, className, link})
 {
    return (
        <a href={link} className={className}>
            <button className={className}>{children}</button>
        </a>
    );
};

export default Button;