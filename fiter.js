const players = [75, 67, 40, 36, 10, 99];
// const selected = players.filter(p => p > 60);
const selected = players.find(p => p % 3 === 1);
// const selected = players.filter(p => p % 3 === 1);
console.log(selected);

const friends = ['tom', 'jhon', 'micheal', 'oliver'];
const myFriends = friends.find(friend => friend.length > 4);
console.log(myFriends);