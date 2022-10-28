const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    slackUsername: "Light",
    backend: true,
    age: 23,
    bio: "I am a software developer, who strives to be the best at what I do. I am a team player and I am always willing to learn new things. I am a fast learner and I am always willing to help others.",
  });
});

app.listen(port, () => {
  console.log(`[stdout]: Server is up on port ${port}`);
});
