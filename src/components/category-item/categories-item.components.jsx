import './categories-item.style.scss'

const CategoryItem=({category})=>{
    const {imageurl,title}=category;
    return(
        //html code put here
        <div  className='category-container'>
            <div className='background-image' style={{
              backgroundImage: `url(${imageurl})`,
            }} />
            <div className='category-body-conatiner'>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    )
}

export default CategoryItem;