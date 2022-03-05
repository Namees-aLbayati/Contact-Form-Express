const namee = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const myform = document.getElementById('myform');
const myfetch = async (e) => {
  e.preventDefault();
const body={
  name:namee.value.trim(),
  email:email.value.trim(),
  subject:subject.value.trim(),
  message:message.value.trim()

}
  const one = await fetch('/api', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });
  const two = await one.json().then((data)=>{
console.log(data.info.info)
window.confirm(`Thank you for ur submission we will contact with you soon at these info if its correct press OK \n=====\n
name :${data.info.info.name}\n Email address:${data.info.info.email}\n your Id:${data.info.id}`)
  })




}

myform.addEventListener('submit',myfetch)


