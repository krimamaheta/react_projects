function Input({label ,id,error,...props})
{
    return(
        <><div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input type="email" id={id}
                {...props}
                />
        </div><div className="control-error">{error && <p>{error}</p>}</div></>

    )
}

export default Input;