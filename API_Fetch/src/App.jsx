import { useState ,useEffect } from "react"
import getRandomUser from "./api"
import { UserCard } from "./components/UserCard";

function App() {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, [])
  
  
  
  return (
    <>
      {userData && <UserCard data={userData} />}
    </>
  )
}

export default App
