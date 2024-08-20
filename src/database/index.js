import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://federicocapiz02:federicocapiz02@next-js-server-actions.faxjt.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;