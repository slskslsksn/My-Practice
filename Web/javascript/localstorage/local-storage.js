// 브라우저 로컬 데이터에 저장하기

// 주요 메서드
// 값 저장하기: localStorage.setItem('key', value);
// 값 가져오기: localStorage.getItem('key');
// 값 삭제하기: localStorage.removeItem('key');
// key값을 통해 데이터 수정 가능

window.onload = () => {
  const btnSetData = document.getElementById('btnSetData');
  const btnGetData = document.getElementById('btnGetData');
  const btnRemove = document.getElementById('btnRemove');

  const input = document.querySelector('input');

  btnSetData.onclick = () => {  // 비추 방식
    if(input.value == ''){
      alert('입력하세요');
      console.log('입력하셈');
    }else{
      localStorage.setItem('userId', input.value);
      input.value = '';
    }
  };

  btnGetData.addEventListener('click', () => {
    // if(localStorage.getItem('userId') == null){
    const data = localStorage.getItem('userId');
    if(!data){
      alert('데이터 없음')
      console.log('userid 없음');
    }else{
      input.value = localStorage.getItem('userId');
    }
  });

  btnRemove.addEventListener('click', () => {
    localStorage.removeItem('userId');
  });
}