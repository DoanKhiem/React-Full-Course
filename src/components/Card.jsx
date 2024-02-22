import imgProfile from '../assets//img/avt.jpg';

function Card() {

    return (
        <div className="card">
            <img src={imgProfile} alt="profile img" className='card-image' />
            <h2 className='card-title'>Đoàn Khiêm</h2>
            <p className='card-text'>I am a developer web</p>
        </div>
    );
}
export default Card;