const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch((error) => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: { 'Content-type': 'application/json; charset=utf-8' }
  })
    .then((response) => response.json())
    .then((data) => alertApi.textContent(data))
    .catch((error) => console.error(error))
}

const newUser = {
  name: 'Bruno Santos',
  avatar: 'https://avatars.githubusercontent.com/u/79421511?v=4',
  city: 'Porto Alegre'
}

getUsers()
getUser(2)
addUser(newUser)
