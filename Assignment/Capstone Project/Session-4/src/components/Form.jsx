import "./Form.css"

function Form({ fields }) {

  return (

    <form className="signup">

      <h2>IPL Fantasy Sign Up</h2>

      {fields.map((field,index)=>(

        <input
        key={index}
        type={field.type}
        placeholder={field.placeholder}
        />

      ))}

      <button>
        Sign Up
      </button>

    </form>

  )

}

export default Form