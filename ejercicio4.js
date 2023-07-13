// Envuelve los regalos

function regalosEnvueltos(gifts) {
  if(gifts.length === 0) {
    return [];
  }
  const longitudRegalo = gifts[0].length;
  const envoltorio = "*".repeat(longitudRegalo + 2);
  return [envoltorio, ...gifts.map(regalo => `*${regalo}*`), envoltorio];
  
}
console.log(regalosEnvueltos(["📷", "⚽️"]))