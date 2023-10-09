const getAllTasks = (req, res) => {
  res.send("all items from file");
};

const getTask = (req, res) => {
  res.json({id:req.params.id});
};

const createTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTasks = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTasks,
  getTask,
  updateTask,
};
