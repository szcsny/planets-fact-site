import './Card.css';

export default function Card(props) {
    const {category, value} = props;

    return (
        <div className='Card'>
            <h2 className='card-category'>{category}</h2>
            <h2 className='card-value'>{value}</h2>
        </div>
    )
}