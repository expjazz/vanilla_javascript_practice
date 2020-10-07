const form = document.querySelector('.form');

form.addEventListener('click', function (e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('.input');

  inputs.forEach((input) => {
    let error = input.parentNode.nextElementSibling;

    if (!input.checkValidity()) {
      input.classList.add('warning');
      error.innerText = `${input.id} cannot be empty `;
    } else {
      input.classList.remove('warning');
    }
  });
  //   inputs.forEach();
});

// function validate(input)
// {
//     if(input.value!=='')
//     {
//         if(input.type==='email')
//         {

//         }

//     }
// }
