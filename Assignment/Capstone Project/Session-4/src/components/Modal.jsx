import "./Modal.css"

function Modal({ closeModal }) {

  return (
    <div className="overlay" onClick={closeModal}>

      <div
        className="modal"
        onClick={(e)=>e.stopPropagation()}
      >

        <button
        className="close"
        onClick={closeModal}
        >
          X
        </button>

        <h2>Book Ticket</h2>

        <form>

          <input
          type="text"
          placeholder="Movie Name"
          />

          <input
          type="text"
          placeholder="Your Name"
          />

          <input
          type="number"
          placeholder="Seats"
          />

          <button>
            Book
          </button>

        </form>

      </div>

    </div>
  )
}

export default Modal