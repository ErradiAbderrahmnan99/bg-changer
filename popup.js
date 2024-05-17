document.getElementById('colorPicker').addEventListener('input', (event) => {
    const color = event.target.value;
    changeColor(color);
  });
  
  function changeColor(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: setBackgroundColor,
        args: [color]
      });
    });
  }
  
  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  