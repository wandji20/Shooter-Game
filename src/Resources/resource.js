const sortPlayers = (arr) =>{
  let result = [];
  arr.forEach((player) => {
    const item = result.find((obj) => obj.user === player.user);
    if (!item) {
      result.push(player);
    } else if (item) {
      item.score = item.score > player.score ? item.score : player.score;
    }
  });
  result = result.sort((a, b) => b.score - a.score);
  return result;

}

export {sortPlayers}