function Portfolio() {
  const state = {
    pieces: []
  };
  let i = 1;
  while (i < 17) {
    state.pieces.push(`jigsaw0${i}.png`);
    i++;
  }
  return (
    <div>
      <img src={`assets/Michael_Regular.jpg`} width="40%" height="40%"></img>
      <div style={{verticalAlign: 'center', margin: '25%'}}>{state.pieces.map(piece => <img src={`assets/${piece}`} width="25%" height="25%"></img>)}</div>
    </div>
  );
}

ReactDOM.render(<Portfolio />, document.getElementById('app'));
