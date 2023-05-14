// 쿠키 저장방법
// 기본: document.cookie = 'name=???; name2=???; expires=???; path=???';

function getCookie(){
  const allCookies = document.cookie; // 하나의 문자열로 리턴

  if(allCookies == '')
    alert(`저장된 쿠키가 없습니다. \n(첫 방문을 환엽합니다.)`);
  else
    alert(`저장된 쿠키의 값은: ${allCookies} 입니다.\n(다시 방문해주셔서 환영합니다.)`);
}


const setCookie = function(ev){
  ev.preventDefault();
  let values = [];
  for(const tmp of ev.target){
    if(tmp instanceof HTMLInputElement)
      values.push(tmp);
  }
  addCookie(values[0].value, values[1].value, values[2].value);
  for(const tmp of values){
    tmp.value = '';
  }
}

function addCookie(cname, cvalue, cexpire){
  let exp = new Date();
  exp.setDate(exp.getDate() + Number(cexpire));
  let cookie = `${cname}=${cvalue};`;
  if(cexpire != 0) cookie +=  `expires=${exp.toUTCString()};`;
  document.cookie = cookie; 
}

const changeCookie = function(ev){
  ev.preventDefault();
  cname = ev.target[0].value;
  cvalue = ev.target[1].value;
  cexpire = ev.target[2].value;
  if(checkName(cname)){
    addCookie(cname, cvalue, cexpire);
    alert(`'${cname}'의 값이 '${cvalue}'으로 변경되었습니다.`);
  }
  else{
    alert(`'${cname}'(으)로 등록된 쿠키가 없습니다.`);
  }
}

const deleteCookie = function(ev){
  ev.preventDefault();
  cname = ev.target[0].value
  if(checkName(cname)){
    addCookie(cname,'',-1);
    alert(`'${cname}'(으)로 등록된 쿠키가 삭제되었습니다.`);
    document.querySelector('#cname-del').value = '';
  }else{
    alert(`'${cname}'(으)로 등록된 쿠키가 없습니다.`);
  }
}

const test = function(i, j){
  console.log(i*j);
}

const frmSet = document.querySelector('#frm-set');
const frmChange = document.querySelector('#frm-change');
const frmDel = document.querySelector('#frm-del');

console.log(frmDel);

frmSet.addEventListener('submit', setCookie);
frmChange.addEventListener('submit', changeCookie);
frmDel.addEventListener('submit', deleteCookie);



function checkName(cookieName) {
  var cookies = document.cookie.split(";"); // Split the cookie string into an array
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim(); // Remove any leading/trailing whitespace
    if (cookie.indexOf(cookieName + "=") === 0) {
      // If the cookie name matches, return true
      return true;
    }
  }
  // If the cookie name is not found, return false
  return false;
}