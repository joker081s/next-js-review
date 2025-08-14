const URL =
  "https://script.google.com/macros/s/AKfycbzFIfHBmX0a8_3X_40akF2gucuGInnfVHES7ncZwNLz-69ytdAXOEo6ZiuWgU5yFbegJQ/exec";
export async function getReviews() {
  const response = await fetch(`${URL}`);
  const result = await response.json();

  if (result.status === "ok") {
    return result.data;
  }

  throw new Error("not able to get the data");
}
