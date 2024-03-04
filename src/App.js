//import './categories.styles.scss'
//import './App.css';
// import Directory from './components/directory/directory.component';
// //import CategoryItem from './components/category-item/categories-item.components';

// function App() {
//   const categories = [
//     { id: 1, title: 'hats', imageurl: 'https://i.ibb.co/cvpntL1/hats.png' },
//     { id: 2, title: 'jackets', imageurl: 'https://i.ibb.co/px2tCc3/jackets.png' },
//     { id: 3, title: 'sneakers', imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
//     { id: 4, title: 'womens', imageurl: 'https://i.ibb.co/GCCdy8t/womens.png' },
//     { id: 5, title: 'mens', imageurl: 'https://rukminim2.flixcart.com/image/832/832/kfyasnk0-0/shirt/d/c/g/l-uh-half-sleeve-5-urban-hub-original-imafwazqfzkzvyrv.jpeg?q=70&crop=false' },

//   ]
//   return (
//     // <div className='categories-conatiner'>
//     //   {categories.map((category) => {
//     //     return (
//     //       <CategoryItem key={category.id} category={category} />
//     //       )}
//     //     )}
//     // </div>
//     <Directory categories={categories} />
//   );
// }
import Home from "./components/routes/home/home.components";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/routes/Navigation/Navigation.component";
import Authentication from "./components/routes/Authentication/Authentication-component";
//import SignIn from "./components/routes/sign-in/sign-in.component";
// const Navigation = () => {
//   return (
//     <div>
//       <div><h1>i am navigation bar</h1></div>
//       <Outlet />
//     </div>
//   )
// }
const Shop = () => {
  return (
    <h1>it is new shop</h1>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication/>} />
      </Route>
    </Routes>
  )

}
export default App;

// <div key={id} className='category-container'>
//   <div className='background-image' style={{
//     backgroundImage: `url(${imageurl})`,
//   }} />
//   <div className='category-body-conatiner'>
//     <h2>{title}</h2>
//     <p>Shop Now</p>
//   </div>
// </div>

{/* 
<div className='category-container'>
<div className='category-body-conatiner'>
          <h2>men</h2>
          <p>Shop Now</p>
        </div>
      </div>

      <div className='category-container'>
        <div className='category-body-conatiner'>
          <h2>womens</h2>
          <p>Shop Now</p>
        </div>
      </div>

      <div className='category-container'>
        <div className='category-body-conatiner'>
          <h2>childs</h2>
          <p>Shop Now</p>
        </div>
      </div> */}

