const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

loadFacts();

async function loadFacts() {
  //Load Data From Supabase
  const res = await fetch(
    "https://anahozpumymgeypfkvnn.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYWhvenB1bXltZ2V5cGZrdm5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NTg5ODQsImV4cCI6MjA1ODMzNDk4NH0.z4_JQ5MyKdVQBLewyTm20yEMGHUsFOmSqVcsD39eut4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYWhvenB1bXltZ2V5cGZrdm5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NTg5ODQsImV4cCI6MjA1ODMzNDk4NH0.z4_JQ5MyKdVQBLewyTm20yEMGHUsFOmSqVcsD39eut4",
      },
    }
  );
  const data = await res.json();
  //const filteredData = data.filter((fact) => fact.category === "history");

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">${fact.text}
    <p>
        React And Blah Blah here is a paragraph
        <a
            class="source"
            href="${fact.source}"
            target="_blank"
            >(Source)</a
        >
    </p>
    <span class="tag" style="background-color:${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
    <div class="vote-buttons">
        <button>Like</button>
        <button>Love</button>
        <button>Hate</button>
    </div>
    </li>`
  );
  console.log(htmlArray);
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

const calcFactAge2 = (year) => 2022 - year;

const factObj = {
  text: "lisbon is the capital of portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,

  createSummary: function () {
    return this.text;
  },
};

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allcategories = CATEGORIES.map((el) => el.name);
console.log(CATEGORIES.find((cat) => cat.name == "news").color);
