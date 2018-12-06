function getCookies () {
        var res = document.cookie.split ( "; " ).map ( x =>  {
                var tmp = x.split ( "=" )
                var elem = {}
                elem [ tmp [0] ] = tmp [1]
                return elem
        })
        return Object.assign ( {}, ...res )
}
var cookieInfo = getCookies ()

var formReg = document.querySelector ( ".reg-container" )
var formSign = document.querySelector ( ".sign-container" )
var btnReg = document.querySelector ( "#registration" )
var btnSignIn = document.querySelector ( "#sign-in" )
var nameElem = document.querySelector ( "#name-field" )
var passElem = document.querySelector ( "#pass-field" )
var emailElem = document.querySelector ( "#email-field" )
var avatarElem = document.querySelector ( "#avatar-field" )
var emailElemsign = document.querySelector ( "#email" )
var title = document.querySelector ( "#title" )
var users = []


var user_Key =""
hideButtons ( false )
hideButtonsSignIn (false)

function hideButtons ( param ) {
    var dspl = param ? "none" : "inline-block"
    btnReg.style.display = dspl
    btnSignIn.style.display = dspl
    formReg.style.display = !param ? "none" : "block"
}

function hideButtonsSignIn (param ) {
  formSign.style.display = !param ? "none" : "block"
}

function regPage () {
  var elem = document.body.appendChild (document.createElement('div'))
  var p = elem.appendChild (document.createElement('p'))
  p.innerHTML = `Hello ${cookieInfo.name}`
  p.style.color = "#33ccff"
  var img = document.body.appendChild (document.createElement('img'))
  img.src = `${cookieInfo.avatar}`
  img.style =
          `
            display: "block";
            width: 100px;
            height: 100px;
           `
  elem.appendChild(img)
}


if(!cookieInfo.email) {

function reg ( event ) {
    hideButtons ( true )
    formReg.regim = 0
    title.innerHTML = "Регистрация"
}

function testUserData () {
    if ( !nameElem.value || !passElem.value || !emailElem.value || !avatarElem.value ) return
    var userKey = Sha256.hash ( passElem.value + emailElem.value)
    var key = users.some ( x => x.key=== userKey )
      document.cookie = `email=${emailElem.value}`
      document.cookie = `name=${nameElem.value}`
      document.cookie = `avatar=${avatarElem.value}`
      if (!key){
          users.push ({key:`${userKey}`,name:`${nameElem.value}`,email:`${emailElem.value}`,avatar:`${avatarElem.value}`})
          title.innerHTML = `Регистрация ${nameElem.value} прошла успешно`
      } else title.innerHTML = `Пользователь ${nameElem.value} уже зарегистрирован`
     hideButtons ( false )
}


function enterPage (event) {
  var userEmailtrue = users.some ( x => x.email=== event.target.value )
  if (userEmailtrue) {
       var userEmail = users.filter( function (x) {if (x.email=== event.target.value) return x})[0].email
          if (userEmail) {
              var pass = prompt ("Введите пароль")}
              user_Key = Sha256.hash(pass+userEmail)
              getRegPage ()
    } else title.innerHTML = `Пользователь c таким e--mail не зарегистрирован`
}

function getRegPage () {
if (user_Key === users.filter( function (x) {if (x.key=== user_Key) return x})[0].key) {
    hideButtonsSignIn (false)
    var script = document.createElement( 'script' )
    script.id = "hello"
    script.src = 'hello.js'
    document.head.appendChild( script )
    title.innerHTML = nameElem.value
   }
}

function signIn ( event ) {
   hideButtonsSignIn (true)
   title.innerHTML = "Вход"
   emailElemsign.onchange = enterPage
}

} else regPage()
