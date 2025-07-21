const programList = document.getElementById('program-list');
const firstProgram = programs[0];
const card = document.createElement('div');
card.classList.add('program-card');

card.innerHTML = `
  <h2>${firstProgram.name}</h2>
  <p><strong>Type:</strong> ${firstProgram.type}</p>
  <p><strong>Audience:</strong> ${firstProgram.audience}</p>
  <p><strong>Accessibility:</strong> ${firstProgram.accessibility}</p>
`;
programList.appendChild(card);