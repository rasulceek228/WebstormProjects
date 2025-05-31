export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to the list! 🚀</em>
      </p>
    );
  }

  const numOfItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `you got everything! Ready to go ✈️`
          : `💼 you have ${numOfItems} items on your list, and you already packed ${numOfPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
