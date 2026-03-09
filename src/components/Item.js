import './Item.css'
const Item = ({image , title , price}) => {
    return (
        <div className="card">
            <img src = {image} alt = {title} className="card-img"/>
            <div className="card-desc">
                <p>{title}</p>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Item