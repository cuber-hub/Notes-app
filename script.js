const container = document.querySelector('.con');
const button = document.querySelector('.red');

function local() {
  localStorage.setItem('data', container.innerHTML);
}

function load() {
  container.innerHTML = localStorage.getItem('data') || '';
  restore();
}

button.addEventListener('click', () => {
  const note = document.createElement('p');
  note.classList.add('para');
  note.setAttribute('contenteditable', true);

  const img = document.createElement('img');
  img.src = 'redd.png';
  img.classList.add('dust');

  const copy = document.createElement('img');
  copy.src = 'copy.png';
  copy.classList.add('copy');

  img.addEventListener('click', () => {
    note.remove();
    local();
  });

  copy.addEventListener('click', () => {
    const text = note.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch(() => alert('Failed to copy!'));
  });

  note.onkeyup = function () {
    local();
  };

  note.append(img);
  note.append(copy);
  container.appendChild(note);

  local();
});

function restore() {
  const paras = document.querySelectorAll('.para');
  paras.forEach((note) => {
    note.setAttribute('contenteditable', true);

    const img = note.querySelector('.dust');
    const copy = note.querySelector('.copy');

    img?.addEventListener('click', () => {
      note.remove();
      local();
    });

    copy?.addEventListener('click', () => {
      const text = note.innerText;
      navigator.clipboard
        .writeText(text)
        .then(() => alert('Copied to clipboard!'))
        .catch(() => alert('Failed to copy!'));
    });

    note.onkeyup = function () {
      local();
    };
  });
}

load();

