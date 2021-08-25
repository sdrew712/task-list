const taskList = [];
let globalId = 1;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A good friendship is often more important than a passionate romance.",
      "A fresh start will put you on your way.",
      "Advice, when most needed, is least heeded.",
      "Believe it can be done.",
      "Do you know that the busiest person has the largest amount of time?",
      "Help! I’m being held prisoner in a chinese bakery!"
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

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