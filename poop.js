const poop = (word, emoji) => {
  return `${word} ${emoji} `;
};

poop("you are a", emoji);

const emojis = {
  names: true,
  icons: ["✅", "🍆", "💩", "😀"],
  someProp: "info",
};

const someFun = (array, item) => {
  return array.push(item);
};

function pop(array) {
  const lastElement = array.pop();
  return lastElement;
}
