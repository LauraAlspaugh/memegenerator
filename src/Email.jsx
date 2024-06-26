import React from "react"
export default function Email(){
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        secondPassword: "",
        joinedNewsletter: true
    })
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    function handleSubmit(event) {
        event.preventDefault()
    }
    return(
        <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="secondPassword"
                onChange={handleChange}
                value={formData.secondPassword}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="joinedNewsletter"
                    onChange={handleChange}
                    checked={formData.joinedNewsletter}
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
    )
}