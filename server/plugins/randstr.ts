export default function main(
  length: number,
  toUpperCase?: boolean,
  charSet?: string
) {
  var result = [];

  length = length || 12;
  charSet =
    charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (length--) {
    result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
  }

  if (toUpperCase) {
    return result.join("").toUpperCase();
  } else {
    return result.join("");
  }
}
