export default function App() {
  async function getAdvice() {
    fetch("https:/api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button>Get Advice</button>
    </div>
  );
}
