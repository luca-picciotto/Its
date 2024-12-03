function round(label = "roud", delay = 500) {
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

async function executeRounds() {
  const results = [];
  const rounds = [
    { label: "Round 1", delay: 500 },
    { label: "Round 2", delay: 1000 },
    { label: "Round 3", delay: 1500 },
  ];

  for (const { label, delay } of rounds) {
    try {
      const result = await round(label, delay);
      console.log(`Success: ${result}`);
      results.push({ status: "fulfilled", value: result });
    } catch (error) {
      console.error(`Erroe: ${error.message}`);
      results.push({ status: "rejected", reason: error.message });
    }
  }

  console.log("Final Results; ", results);
}

executeRounds();
