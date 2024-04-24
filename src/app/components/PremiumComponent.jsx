import '../assets/css/PremiumComponent.css';
import GreyCheck from '../assets/images/grey-check.svg';
import BlueCheck from '../assets/images/blue-check.svg';

function PremiumComponent({ PremiumTitle, PremiumPrice, listContents, onClick, selected }) {
    return (
        <div className={`premium-comp ${selected ? 'selected' : ''}`} onClick={onClick}>
            <h3>{PremiumTitle}</h3>
            <p>{PremiumPrice}</p>
            <ul>
                {listContents.map((content, index) => (
                    <li key={index}>
                        <img src={selected ? BlueCheck : GreyCheck} alt="Check Icon" />
                        <span>{content}</span>
                    </li>
                ))}
            </ul>
            <div className={`select ${selected ? 'selected' : ''}`}>
                <p>{selected ? 'Selected' : 'Select'}</p>
            </div>
        </div>
    )
}

export default PremiumComponent;