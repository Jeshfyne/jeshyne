function changeTab(tabName) {
    // Get all elements with class "tab-content" and hide them
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    
    // Get all elements with class "tab" and remove the "active" class
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');
  
    // Add "active" class to the clicked tab
    event.target.classList.add('active');
  }
  