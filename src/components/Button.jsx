import style from '../assets/Button.module.css'

function Button() {
    const styleButton = {
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }
    return(
    <>
        <button className={style.button}>Click me</button>
        <br />
        <button style={styleButton}>Click me</button>
    </>
    );
}

export default Button;