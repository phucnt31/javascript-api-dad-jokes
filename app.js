const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  const resp = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  });
  const data = await resp.json();
  result.textContent = data.joke;
};
fetchDadJoke();
