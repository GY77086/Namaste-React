const ContactUs = () => 
{
    return (
        <div>
        <h1 className = "text-3xl font-bold">Contact Us</h1>
        <form>
            <input 
                type = "text" 
                placeholder = "Name" 
                className = "border-2 border-gray-300 p-2 m-2 rounded-lg" 
            />
            <input 
                type = "email" 
                placeholder = "Email"
                className = "border-2 border-gray-300 p-2 m-2 rounded-md"
            />
            <button 
                type = "submit"
                className = "bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Submit
            </button>
        </form>
        </div>
    );
}

export default ContactUs;
