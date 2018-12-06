var elem = document.body.appendChild (document.createElement('div'))

var p = elem.appendChild (document.createElement('p'))
p.innerHTML = `Hello ${nameElem.value}`
p.style.color = "#33ccff"

var img = document.body.appendChild (document.createElement('img'))
img.src = `${avatarElem.value}`
img.style =
        `
          display: "block";
          width: 100px;
          height: 100px;
         `
elem.appendChild(img)
