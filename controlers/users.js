const dbConnection = require("../mongoConfig");
const getUsers = async (req, res) => {
  const result = await dbConnection();
  const data = await result.collection("documents").find().toArray();
  res.send(data);
};

const addUsers = async (req, res) => {
  const result = await dbConnection();
  const data = await result.collection("documents").insertOne(req.body);
  res.send({ ...data, ...req.body });
};

const deleteUsers = async (req, res) => {
  const result = await dbConnection();
  const data = await result
    .collection("documents")
    .deleteOne({ name: req.params.name });
  res.send("deleted successfully");
};

const updateUsers = async (req, res) => {
  const result = await dbConnection();
  const data = await result
    .collection("documents")
    .updateOne({ name: req.params.name }, { $set: { ...req.body } });
  res.send("updated successfully");
};

module.exports = {
  getUsers,
  addUsers,
  deleteUsers,
  updateUsers,
};
