// 로컬스토리지 데이터 값'들' 출력하기
let r=0;
window.onload = () => {
  const btnCreate = document.querySelector('.btn-create');
  const table = document.querySelector('.tbody');
  btnCreate.addEventListener('click', () => {
    let row = table.insertRow();
    
    for(let i=0; i<3; i++){
      let cell = row.insertCell(i);
      cell.innerText = `[${r}][${i}]`;
      cell.classList.add('align-middle');
    }
    let cell4 = row.insertCell(3);
    cell4.innerHTML = `<button class="btn-remove" id="btn-remove-${r}">Remove</button>`;
    // remove 버튼에 삭제 추가
    let btnRemove = document.querySelector(`#btn-remove-${r}`);
    btnRemove.addEventListener('click', () => {
      table.deleteRow(row);
    });
    // r증가
    r++;
  });

}

