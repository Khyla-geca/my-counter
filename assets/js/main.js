const counterDiv = document.querySelector('[data-counter]');
const operatorsDiv = document.querySelector('[data-operators]');

const output = document.createElement('h2');
output.textContent = '0';
output.setAttribute('class', 'output');
counterDiv.insertBefore(output, counterDiv.childNodes['2']); 

function createButton(className, textContent, elementToAppendTo) {
    const button = document.createElement('button');
    button.setAttribute('type', className);
    button.setAttribute('class', '');
    button.textContent = textContent;
    elementToAppendTo.appendChild(button);
  }

  createButton(className='subtraction', textContent='-', elementToAppendTo=operatorsDiv);

  createButton(className='sum', textContent='+',  elementToAppendTo=operatorsDiv);
  
  let subtractionButton= document.querySelector('[data-operators]').firstElementChild;
  let sumButton= document.querySelector('[data-operators]').lastElementChild;

  subtractionButton.addEventListener("click", function (){
  output.textContent = +(output.textContent) - 1; 
  outputTextColor();
  });

  sumButton.addEventListener("click", function (){
  output.textContent = +(output.textContent) + 1; 
  outputTextColor();
  });

  function outputTextColor() {
    if (output.textContent < 0) {
    output.style.color = 'blue';
    } else if (output.textContent > 0) {
      output.style.color = 'green';
    };
  };

