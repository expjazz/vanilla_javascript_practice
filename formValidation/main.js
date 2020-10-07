const form = document.querySelector('.form');

form.addEventListener('click', function (e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('.input');

  inputs.forEach((input) => {
    let error = input.parentNode.nextElementSibling;

    if (!input.checkValidity()) {
      console.log(input.validationMessage)
      input.classList.add('warning');
      error.innerText = input.validationMessage
    } else {
      input.classList.remove('warning');
      error.innerText = ''
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
