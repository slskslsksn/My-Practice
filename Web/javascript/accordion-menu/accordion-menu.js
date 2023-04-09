window.onload = () => {
  const panelFaqTitle = document.querySelectorAll('.panel-faq-title');
  const panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');

  // 반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
  for(let i=0; i<panelFaqTitle.length; i++){
    panelFaqTitle[i].addEventListener('click', () => {
      // 클릭시 처리 할 일
      panelFaqAnswer[i].classList.toggle('active');
    })
  }

  document.getElementById('btn-all-close').onclick = () => {
    for(let i=0; i<panelFaqAnswer.length; i++){
      panelFaqAnswer[i].classList.remove('active');
    }
  }

}
