const pushBtn = document.querySelector(".push");
const input = document.querySelector("input");

pushBtn.addEventListener("click", function () {
  if (input.value == 0) {
    alert("Напиши задачу!");
  } else {
    let tasks = document.querySelector(".tasks");

    tasks.innerHTML += `
        <div class="task">
            <span id="taskname">
                ${input.value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>`;

    let deleteBtn = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }
  }

  if (pushBtn) {
    input.value = "";
  }
});

const delAll = document.querySelector(".delAll");

delAll.addEventListener("click", function () {
  if (delAll) {
    let tasks = document.querySelector(".tasks");
    tasks.innerHTML = "";
  }
});
