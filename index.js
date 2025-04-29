document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission (add.html)
    const form = document.getElementById('add-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const place = document.getElementById('place').value.trim();
        const country = document.getElementById('country').value.trim();
        const landmarks = document.getElementById('landmarks').value.trim();
        const season = document.getElementById('season').value.trim();
        const notes = document.getElementById('notes').value.trim();
  
        if (!place || !country) {
          alert("Please fill in both the place and country.");
          return;
        }
  
        const newDestination = {
          place,
          country,
          landmarks,
          season,
          notes
        };
  
        const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
        destinations.push(newDestination);
        localStorage.setItem('destinations', JSON.stringify(destinations));
  
        alert("Destination added successfully!");
        form.reset();
      });
    }
  
    // Display wishlist (home.html)
    const wishlistContainer = document.getElementById('wishlist-container');
    if (wishlistContainer) {
      const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
  
      if (destinations.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty. Add some destinations!</p>";
      } else {
        destinations.forEach((dest) => {
          const card = document.createElement('div');
          card.className = 'destination-card';
  
          card.innerHTML = `
            <h2>${dest.place}, ${dest.country}</h2>
            <p><strong>Landmarks:</strong> ${dest.landmarks || 'N/A'}</p>
            <p><strong>Best Season:</strong> ${dest.season || 'Any time'}</p>
            <p><strong>Notes:</strong> ${dest.notes || 'None'}</p>
          `;
  
          wishlistContainer.appendChild(card);
        });
      }
    }
  });
  