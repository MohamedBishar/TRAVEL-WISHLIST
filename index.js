document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('destination-form');
   if (form) {
     form.addEventListener('submit', function (e) {
       e.preventDefault();
 
       const name = document.getElementById('name').value.trim();
       const description = document.getElementById('description').value.trim();
 
       if (!name || !description) {
         alert("Please fill in both the name and description.");
         return;
       }
 
       const newDestination = {
         name,
         description
       };

       const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
       destinations.push(newDestination);
       localStorage.setItem('destinations', JSON.stringify(destinations));
 
       alert("Destination added successfully!");
       form.reset();
     });
   }
 
   const destinationList = document.getElementById('destination-list');
   if (destinationList) {
     const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
 
     if (destinations.length === 0) {
       destinationList.innerHTML = "<p>Your wishlist is empty. Add some destinations!</p>";
     } else {
       destinations.forEach((dest) => {
         const card = document.createElement('div');
         card.className = 'destination-card';
 
         card.innerHTML = `
           <h2>${dest.name}</h2>
           <p>${dest.description}</p>
         `;
 
         destinationList.appendChild(card);
       });
     }
   }
});