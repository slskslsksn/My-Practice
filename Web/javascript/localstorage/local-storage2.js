// 로컬스토리지 데이터 값'들' 출력하기

window.onload = () => {
  // 버튼 가져오기
  localStorage.setItem('test','test');
  localStorage.setItem('test1','test1');
  localStorage.setItem('test2','test2');
  localStorage.setItem('test3','test3');
  localStorage.setItem('test4','test4');

  const btnAllView = document.querySelector('.btn-view-all');
  btnAllView.addEventListener('click', () => {
    let size = localStorage.length;
    for(let i=0; i<size; i++){
      let data = localStorage.getItem(localStorage.key(i));
      console.log(data);
    }
  });

  const table = document.querySelector('.table');
  let row = table.insertRow();
  let cel1 = row.insertCell(0);
  let cel2 = row.insertCell(1);
  let cel3 = row.insertCell(2);

  cel1.innerText = 'key \u00a0 \u00a0 \u00a0 asd';
  cel2.innerText = 'value';
  cel3.innerHTML = '<button class="btn-remove">test3</button>';
  cel1.classList.add('align-middle');
  cel2.classList.add('align-middle');
  console.log(cel1.innerHTML);
}