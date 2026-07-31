import { useState } from "react"

import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import Form from "./components/Form"

import {
FaFacebook,
FaInstagram,
FaTwitter
} from "react-icons/fa"

function App() {

  const [showModal,setShowModal]=useState(false)

  const playlists=[
    {
      image:"https://picsum.photos/300?1",
      title:"Top Hits",
      songs:25
    },
    {
      image:"https://picsum.photos/300?2",
      title:"Workout Mix",
      songs:18
    },
    {
      image:"https://picsum.photos/300?3",
      title:"Chill Vibes",
      songs:30
    }
  ]

  const socials=[
    {
      icon:<FaFacebook/>,
      link:"https://facebook.com"
    },
    {
      icon:<FaInstagram/>,
      link:"https://instagram.com"
    },
    {
      icon:<FaTwitter/>,
      link:"https://twitter.com"
    }
  ]

  const fields=[
    {
      type:"text",
      placeholder:"Full Name"
    },
    {
      type:"email",
      placeholder:"Email"
    },
    {
      type:"password",
      placeholder:"Password"
    },
    {
      type:"text",
      placeholder:"Favorite IPL Team"
    }
  ]

  return (

    <>

      <Navbar active="Home"/>

      <h2 style={{textAlign:"center"}}>
        Spotify Playlists
      </h2>

      <div
      style={{
        display:"flex",
        gap:"20px",
        justifyContent:"center"
      }}
      >
        {playlists.map((item,index)=>(
          <Card
            key={index}
            image={item.image}
            title={item.title}
            songs={item.songs}
          />
        ))}
      </div>

      <div
      style={{
        textAlign:"center",
        margin:"30px"
      }}
      >
        <button
        onClick={()=>setShowModal(true)}
        >
          Book Ticket
        </button>
      </div>

      {showModal &&
      <Modal
      closeModal={()=>setShowModal(false)}
      />
      }

      <br/>

      <Form fields={fields}/>

      <Footer socialLinks={socials}/>

    </>

  )

}

export default App