(() => {
  let plusIcons = Array.from(document.querySelectorAll('#collapse-icon'));

  function toggleSign(event) {
    event.preventDefault();

    const toggleIcon = event.target;
    toggleIcon.classList.toggle('fa-plus-square');
    toggleIcon.classList.toggle('fa-minus-square');
  }

  plusIcons.forEach((icon) => {
    icon.addEventListener('click', toggleSign);
  });
  
})();