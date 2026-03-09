import './Home.css' 
import Item from './Item'
const Arrival = () => {
    return (
            <div className='a-container'>
                <p className='arrival-txt'>New Arrivals</p>
                <div className='a-items'>
                    {items.map((item) =>(
                        <Item
                            key = {item.id}
                            image = {item.image}
                            title = {item.title}
                            price = {item.price}
                        />
                    ))}
                </div>
            </div>
    )
}

const items = [
    {
        id : 1 , 
        title : "Baby Blue Scarf",
        price : "$100" ,
        image : "/images/scarf.jpg"
    },

    {
        id : 2 , 
        title : "Baby Swaddle" ,
        price : "$150",
        image : "/images/swaddle.jpg"
    },

    {
        id : 3 , 
        title : "Crochet Coasters" ,
        price : "$40",
        image : "/images/coaster.jpg"
    },

    {
        id : 4 , 
        title : "Baby Yoda Plushie" ,
        price : "$20",
        image : "/images/babyYoda.jpg"
    },

    {
        id : 5 , 
        title : "Wall Hanging Mat" ,
        price : "$50",
        image : "/images/wallHangling.jpg"
    },

    {
        id : 6 , 
        title : "Mixed Color Yarn" ,
        price : "$5",
        image : "/images/wool.jpg"
    },

        {
        id : 7 , 
        title : "Crochet Dish Cloth" ,
        price : "$10",
        image : "/images/DishCloth.jpg"
    },

        {
        id : 8 , 
        title : "Capybara Plushie" ,
        price : "$50",
        image : "/images/capybara.jpg"
    },

    {
        id : 9 , 
        title : "Green Tote Bag" ,
        price : "$60",
        image : "/images/greenbag.jpg"
    },
    
]
export default Arrival