

// Add your JavaScript code here

window.addEventListener('load', function() {
  var splashScreen = document.getElementById('splash-screen');
  var appContent = document.getElementById('app-content');

  // Hide the splash screen after 2 seconds
  setTimeout(function() {
    splashScreen.classList.add('hidden');
    appContent.classList.remove('hidden');
  }, 1000);
});

document.querySelectorAll('.accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
  
  document.querySelectorAll('.btn-show-lyrics').forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.parentNode.querySelector('.lyrics-window').classList.remove('hidden');
    });
  });
  
  document.querySelectorAll('.btn-close-lyrics').forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.parentNode.classList.add('hidden');
    });
  });


  // Accordions

  const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  item.querySelector('h2').addEventListener('click', () => {
    const content = item.querySelector('.accordion-content');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});


  