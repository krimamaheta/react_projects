import './directory.style.scss'
import CategoryItem from '../category-item/categories-item.components'

const Directory=({categories})=>{
    
    return(

        
        //all the come in from app js
        <div className='directory-conatiner'>
        {categories.map((category) => {
          return (
            <CategoryItem key={category.id} category={category} />
            )}
          )}
  
      </div>
    )
}

export default Directory;