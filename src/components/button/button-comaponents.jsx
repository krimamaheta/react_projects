/*
inverted default google button */

import './button-comaponent.scss';

const Button_type_classes={
    google:'google-sign-in',
    inverted:'inverted',

}
const Button=({children,buttontype,...otherprops})=>{
return( 
    <button className={`button-container ${Button_type_classes[buttontype]}`}
    {...otherprops}>{children}</button>
)
}

export default Button