export const changeColorTypes = (type, key) => {
  let classText =
    "mx-2 mt-2 border border-gray-300 text-white text-lg py-1 px-3 rounded-md ";
  if (type === "bug") {
    classText += " bg-green-500 ";
  } else if (type === "poison") {
    classText += " bg-purple-500 ";
  } else if (type === "water") {
    classText += " bg-blue-300 ";
  } else if (type === "grass") {
    classText += " bg-green-700 ";
  } else if (type === "fire") {
    classText += " bg-orange-500 ";
  } else if (type === "flying") {
    classText += " bg-pink-300 ";
  } else if (type === "fairy") {
    classText += " bg-pink-500 ";
  } else if (type === "ground") {
    classText += " bg-amber-900 ";
  } else if (type === "fighting") {
    classText += " bg-red-700 ";
  } else if (type === "psychic") {
    classText += " bg-pink-600 ";
  } else if (type === "rock") {
    classText += " bg-gray-900 ";
  } else if (type === "electric") {
    classText += " bg-yellow-500 ";
  } else if (type === "steel") {
    classText += " bg-gray-400 ";
  } else if (type === "ice") {
    classText += " bg-blue-600 ";
  } else if (type === "ghost") {
    classText += " bg-gray-800 ";
  } else {
    classText += " bg-gray-400 ";
  }
  return (
    <div key={key} className={classText}>
      {" "}
      {type}{" "}
    </div>
  );
};
