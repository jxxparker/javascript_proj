export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>📈 Far Away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">list</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X Items in your list, and you already picked X (X%)</em>
    </footer>
  );
}
