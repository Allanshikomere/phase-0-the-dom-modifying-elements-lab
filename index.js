document.addEventListener('DOMContentLoaded', function () {
    // Find the main element with id 'main'
    const mainElement = document.querySelector('main#main');
  
    if (mainElement) {
      mainElement.parentNode.removeChild(mainElement);
    }
  });

  function createNewHeader() {
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.textContent = 'Allan is the champion';
    return newHeader;
  }
  
  const newHeader = createNewHeader();
  
  document.body.appendChild(newHeader);
  newHeader.innerHTML = "ALLAN is the champion";