var elem = document.body.appendChild (document.createElement('div'))

var p = elem.appendChild (document.createElement('p'))
p.innerHTML = `Hello ${users.filter( x => x.name === nameElem.value)[0].name}`
p.style.color = "#33ccff"

var img = document.body.appendChild (document.createElement('img'))
img.src = `${users.filter( x => x.avatar === avatarElem.value)[0].avatar}`
img.style =
        `
          display: "block";
          width: 100px;
          height: 100px;
         `
elem.appendChild(img)

var buttonBack = elem.appendChild (document.createElement('button'))
buttonBack.innerText = "Вернуться назад"
buttonBack.style.display = "block"

buttonBack.onclick = function (event){
     document.body.removeChild ( elem )
     title.innerHTML = ""
}
