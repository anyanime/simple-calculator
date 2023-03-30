import './Button.css';

// declare the calculator buttons
const Button = (props) => {
    
    return (
        <div className='button-container'>
            <div className='row'>
                <button name="C" onClick={(e) => props.onClick(e.target.name)}>C</button>
                <button name="del" onClick={(e) => props.onClick(e.target.name)}>DEL</button>
                <button name="%" onClick={(e) => props.onClick(e.target.name)}>%</button>
                <button name="/" onClick={(e) => props.onClick(e.target.name)}>/</button>
            </div>
            <div className='row'>
                <button name="7" onClick={(e) => props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={(e) => props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={(e) => props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={(e) => props.onClick(e.target.name)}>X</button>
            </div>
            <div className='row'>
                <button name="4" onClick={(e) => props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={(e) => props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={(e) => props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={(e) => props.onClick(e.target.name)}>-</button>
            </div>
            <div className='row'>
                <button name="1" onClick={(e) => props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={(e) => props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={(e) => props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={(e) => props.onClick(e.target.name)}>+</button>
            </div>
            <div className='row'>
                <button name="00" onClick={(e) => props.onClick(e.target.name)}>00</button>
                <button name="0"  onClick={(e) => props.onClick(e.target.name)}>0</button>
                <button name="."  onClick={(e) => props.onClick(e.target.name)}>.</button>
                <button name="="  onClick={(e) => props.onClick(e.target.name)}>=</button>
            </div>
        </div>
    )
}

export default Button;