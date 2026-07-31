import { useAuth } from "../context/AuthContext"

export default function Navbar(){

    const {user}=useAuth()

    return(

        <nav>

            <h2>Spotify</h2>

            {user &&

            <p>

                Logged in :

                {user.email}

            </p>

            }

        </nav>

    )

}