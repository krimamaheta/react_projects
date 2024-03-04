

//import './App.css';

//import Directory from './components/directory/directory.component';
//import CategoryItem from './components/category-item/categories-item.components';
import { Outlet } from 'react-router-dom';
import Directory from '../../directory/directory.component';


const Home=()=> {
  const categories = [
    { id: 1, title: 'hats', imageurl: 'https://i.ibb.co/cvpntL1/hats.png' },
    { id: 2, title: 'jackets', imageurl: 'https://i.ibb.co/px2tCc3/jackets.png' },
    { id: 3, title: 'sneakers', imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
    { id: 4, title: 'womens', imageurl: 'https://i.ibb.co/GCCdy8t/womens.png' },
    { id: 5, title: 'mens', imageurl: 'https://rukminim2.flixcart.com/image/832/832/kfyasnk0-0/shirt/d/c/g/l-uh-half-sleeve-5-urban-hub-original-imafwazqfzkzvyrv.jpeg?q=70&crop=false' },

  ]
  return (
    // <div className='categories-conatiner'>
    //   {categories.map((category) => {
    //     return (
    //       <CategoryItem key={category.id} category={category} />
    //       )}
    //     )}
    // </div>
    <div>
      <Outlet />
      <Directory categories={categories} />
 
    </div>
   
  );
}

export default Home;
