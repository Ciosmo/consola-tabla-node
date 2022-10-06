let friend = "Jennifer";

function getFriend() {
  console.log(friend);
  
  let enemy = "Peter";
  return function getEnemy() {
    console.log(enemy);
  };
}

getFriend();