function addingEventListener() {
    const button = document.querySelector("#button"); // select the button element by ID
    button.addEventListener("click", function(event) {
      alert("I was clicked!");
    });
  }
  
  