document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('destination-form');
    
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const place = document.getElementById('place').value.trim();
        const country = document.getElementById('country').value.trim();
        const landmarks = document.getElementById('landmarks').value.trim();
        const season = document.getElementById('season').value.trim();
        const notes = document.getElementById('notes').value.trim();
  
        const destination = {
          place,
          country,
          landmarks,
          season,
          notes
        };
        let destinations = JSON.parse(localStorage.getItem('destinations')) || [];
  
        destinations.push(destination);
  
        localStorage.setItem('destinations', JSON.stringify(destinations));
  
        alert('Destination added!');
        form.reset();
      });
    }
  });