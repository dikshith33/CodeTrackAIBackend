const express = require("express");
const cors = require("cors");
require("dotenv").config();

const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://codetrack-ai.vercel.app"
    ]
  })
);
app.use(express.json());

app.use("/api/profile", profileRoutes);


app.get("/", (req, res) => {
    res.send("CodeTrack AI Backend Running");
});

const PORT = 5000;

const aiRoutes =
    require(
        "./routes/aiRoutes"
    );

app.use(
    "/api/ai",
    aiRoutes
);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});