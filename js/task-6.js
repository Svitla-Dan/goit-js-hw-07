function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.getElementById('boxes'),
};

controls.createBtn.addEventListener('click', () => {
  const amount = parseInt(controls.input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    controls.input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

controls.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxSize = 30;
  const boxesFragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesFragment.appendChild(box);
  }

  controls.boxes.innerHTML = '';
  controls.boxes.appendChild(boxesFragment);
}

function destroyBoxes() {
  controls.boxes.innerHTML = '';
}
