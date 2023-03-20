export function toTitleCase(string) {
  return string
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function extractYTVideoId(url) {
  let index = url.indexOf("=");
  let countStart = 1;
  if (index < 0) {
    index = url.indexOf(".be/");
    countStart = 4;
  }
  const id = url.slice(index + countStart);
  return id;
}
