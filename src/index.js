document.addEventListener("DOMContentLoaded", () => 
{
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>
  {
    e.preventDefault();
    mkDo(e.target.newTaskDescription.value)
    form.reset()
  })

  function mkDo(item)
  {
    console.log(item)
    let p = document.createElement('p');
    let btn = document.createElement('button');

    btn.addEventListener('click', del);
    btn.textContent = 'x'

    p.textContent = `${item}`;
    p.appendChild(btn);

    document.querySelector('ul').appendChild(p);

  }

  function del(event)
  {
    event.target.parentNode.remove()
  }
  
});
