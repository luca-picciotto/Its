import "core-js/stable"; // Aggiungi il supporto per le funzionalità moderne (come Promise, async/await)
import "regenerator-runtime/runtime"; // Necessario per async/await nei vecchi browser

function round(label = "round", delay = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.5;
      if (isSuccess) {
        resolve(`${label} succeeded`);
      } else {
        reject(new Error(`${label} failed`));
      }
    }, delay);
  });
}

const round1 = round("Round 1", 500);
const round2 = round("Round 2", 1000);
const round3 = round("Round 3", 1500);

Promise.allSettled([round1, round2, round3])
  .then((results) => {
    console.log("All results: ");
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Success: ${result.value}`);
      } else {
        console.error(`Error: ${result.reason.message}`);
      }
    });
  })
  .catch((error) => {
    console.error("Unexpected error: ", error);
  });
