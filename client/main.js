const textForm = document.getElementById("text-form")
const inputText = document.getElementById("input-text")
const taskListContainer = document.getElementById("tasklist-container");
const inspiroBtn = document.getElementById("inspiro-btn")
const inspiroContainer = document.getElementById("inspiro-container")

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment")
    .then(function (res) {
      const data = res.data;
      alert(data);
    });
};
    
document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune")
    .then(function (res) {
      const data = res.data;
      alert(data);
    });
};
    

function displayTaskList(arr){
  while(taskListContainer.firstChild){
    taskListContainer.removeChild(taskListContainer.firstChild)
  }
  
  for (let i = 0; i < arr.length; i++){
    const newTask = document.createElement("div");
    
    newTask.innerHTML = `<p>${arr[i].text}</p><button class="delete-btn" value ="${arr[i].id}">Delete</button>`
    
    taskListContainer.appendChild(newTask);
    
    let deleteBtns = document.getElementsByClassName('delete-btn');
    
    for (let i = 0; i < deleteBtns.length; i++){
      deleteBtns[i].addEventListener('click', deleteTask)
    }
  }
}

const deleteTask = (e) => {
  axios.delete(`http://localhost:4000/api/display/${e.target.value}`)
    .then((res) => {
      displayTaskList(res.data);
    });
};

textForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newDisplayText = {
    text: inputText.value
  }

  axios.post("http://localhost:4000/api/display", newDisplayText)
    .then(res => {
      console.log((res.data));
      displayTaskList(res.data);
    });

  inputText.value = '';
})

inspiroBtn.addEventListener("click", getInspiration)

function getInspiration(){

  let randomNumber = Math.floor(Math.random() * 1643);

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    inspiration = data[randomNumber];

    console.log(inspiration.text);
    
    inspiroContainer.innerHTML = JSON.stringify(inspiration.text);
  });
}