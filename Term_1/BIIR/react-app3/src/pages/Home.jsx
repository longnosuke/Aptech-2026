import heroImage from "../assets/hero.png";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <p>Welcome to the home page!</p>

      <img src={heroImage} alt="" />
    </div>
  );
}
