function Game() { 
  const [score, setScore] = React.useState(0); 
 
  return ( 
    <div> 
      <h1>Score: {score}</h1> 
      <button onClick={() => setScore(score + 1)}> 
        Click Me 
      </button> 
    </div> 
  );
