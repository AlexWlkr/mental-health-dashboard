const programList = document.getElementById('program-list');

//add program cards to the program list
programs.forEach(program => {
const card = document.createElement('div');
  card.classList.add('program-card');

card.innerHTML = `
  <h2>${program.name}</h2>
  <p><strong>Type:</strong> ${program.type}</p>
  <p><strong>Audience:</strong> ${program.audience}</p>
  <p><strong>Accessibility:</strong> ${program.accessibility}</p>
`;
programList.appendChild(card);
 });