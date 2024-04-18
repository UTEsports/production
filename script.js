document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission
  
    // Get form data
    var c1name = document.getElementById('c1name').value;
    var c1tag = document.getElementById('c1tag').value;
    var c2name = document.getElementById('c2name').value;
    var c2tag = document.getElementById('c2tag').value;
  
    // Store data in localStorage to access on the display page
    localStorage.setItem('c1name', c1name);
    localStorage.setItem('c1tag', c1tag);
    localStorage.setItem('c2name', c2name);
    localStorage.setItem('c2tag', c2tag);
  
    // Redirect to display page
    window.location.href = 'display.html';
  });
  