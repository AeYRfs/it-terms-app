import React, { useState } from "react";
import TermCard from "./components/TermCard";
import { TERMS } from "./data/terms";

const App = () => {
  const [query, setQuery] = useState("");

  const filtered = TERMS.filter((t) =>
    t.term.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1>IT-Термины</h1>

      <input
        type="text"
        placeholder="Поиск по терминам..."
        className="search-box"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map((t) => (
        <TermCard key={t.term} term={t.term} description={t.description} />
      ))}
    </div>
  );
};

export default App;