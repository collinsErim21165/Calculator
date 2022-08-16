let display = document.getElementById("display");
let button = Array.from(document.getElementsByClassName("button"));

button.map( button => {
  button.addEventListener("click", (e) => {
     switch(e.target.innerHTML){

      // the all delete key
      case 'AC':
        display.innerHTML = '';
        break;

        // delete each text key
        case '←':
          // if(display.innerHtml){
          // }
          display.innerHTML = display.innerHTML.slice(0, -1);
          break;

          // calculate the numbers and give the sum
          case '=':
            try {
              display.innerHTML = eval(display.innerText);
            } catch {
              display.innerHTML = "Error!";
            }
            break;

            // display the buttons
      default:
        display.innerHTML += e.target.innerHTML;
     }
  })
})