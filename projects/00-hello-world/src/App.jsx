import './App.css'
import { TwitterFollowCard } from "./Components/TwitterFollowCard"
export default function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="hectorsevillani"
        name="Hector Sevilla"
        isFollowing
      />

      <TwitterFollowCard
        userName="Becky_GuerreroM"
        name="Rebeca Guerrero"
      />
    </section>
  )
}