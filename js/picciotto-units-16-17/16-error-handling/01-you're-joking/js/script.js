function fetchRandomJoke() {
  let attempt = 0;
  const maxAttempts = 3;
  function attemptFetch() {
    //richiesta
    return fetch("https://official-joke-api.appspot.com/jokes/random").then(
      (response) => {
        if (!response.ok) {
          //genera un errore
          throw new Error("Network response was not ok");
        }
        return response
          .json() //converte la risposta in formato JSON
          .then(({ setup: question, punchline: answer, id }) => {
            console.log(question + " - " + answer + " - " + id);

            return question + " - " + answer + " - " + id;
          })
          .catch((error) => {
            if (attempt < maxAttempts) {
              //imposta i tentativi massimi
              attempt++;
              return attemptFetch;
            } else {
              return Promise.reject("Failed to fetch joke after 3 attempts");
            }
          });
      }
    );
  }

  return attemptFetch();
}

function displayJoke() {
  const jokeP = document.getElementById("joke");
  const errorP = document.getElementById("error");
  jokeP.textContent = ""; //cancella la precedente
  errorP.textContent = ""; // cancella l' precedente

  fetchRandomJoke()
    .then((response) => {
      jokeP.textContent = response;
    })
    .catch((error) => {
      errorP.textContent = `Error: ${error}`;
    });
}
