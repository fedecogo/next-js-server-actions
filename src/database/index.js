import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
  "mongodb+srv://federicocapiz02:GJJoFhWK7dRCdlKN@cluster0.pclxggg.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log("dio porco " + e));
};

export default connectToDB;