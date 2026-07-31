function Home() {
  return (
    <section className="hero">
      <img
        src="https://picsum.photos/800/400"
        alt="Sample hero banner"
        loading="lazy"
      />

      <h1>Responsive React Homepage</h1>

      <p>
        Resize the browser from 320px to 1200px to test responsiveness.
      </p>

      <button>Get Started</button>
    </section>
  )
}

export default Home