// 쿠키 저장방법
// 기본: document.cookie = 'name=???; name2=???; expires=???; path=???';

function getCookie(){
  const allCookies = document.cookie; // 하나의 문자열로 리턴

  if(allCookies == '')
    alert(`저장된 쿠키가 없습니다. \n(첫 방문을 환엽합니다.)`);
  else
    alert(`저장된 쿠키의 값은: ${allCookies} 입니다.\n(다시 방문해주셔서 환영합니다.)`);
}


function setCookie(){
  // let nowDate = new Date();
  // console.log(typeof nowDate);
  // let expiration = nowDate.getDate();
  // console.log(typeof expiration);

  let expiration = new Date();
  console.log(expiration.getSeconds());
  expiration.setTime(expiration.getTime() + 5000);
  console.log(expiration);
  // console.log(expiration.toUTCString());
  // document.cookie = `userid=test; max-age=5;`
  document.cookie = `userid=test; expires=${expiration.toUTCString()};`
  // let cookie1 = `userid=slskslsksn; expires=${expiration.toUTCString()};`;
  // document.cookie = cookie1;
}

