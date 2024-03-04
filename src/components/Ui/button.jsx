
function Button({children,textonly,className,...props}){
    let cssClassname=textonly? `text-button${className}`:'button';
    // or cssClassname+=' '+className
    return(

        <button className={cssClassname} {...props}>{children}</button>
    )
}

export default Button; 