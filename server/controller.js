const taskList = [];
let globalId = 1;

module.exports = {
  displayText: (req, res) => {
    const { text } = req.body;

    const newTask = {
      text,
      id: globalId
    }

    taskList.push(newTask);
    
    res.status(200).send(taskList)
  },

  deleteTask: (req, res) => {
    const {id} = req.params;

    const index = taskList.findIndex(e => e.id === +id)

    taskList.splice(index, 1)
    
    res.status(200).send(taskList)
  }
}