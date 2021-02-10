

$("#hide_btn").hide();

// 関数化スタート
function get_name(){
  let name1 = $("#name1").val();
  let name2 = $("#name2").val();
  return [name1, name2];
}

function remove1_last (hand) {
  if(hand=="グー"){
    $("#hand1_gu img:last").detach();
  }else if(hand=="チョキ"){
    $("#hand1_choki img:last").detach();
  }else if(hand=="パー"){
    $("#hand1_pa img:last").detach();
  }
}

function remove2_last (hand) {
  if(hand=="グー"){
    $("#hand2_gu img:last").detach();
  }else if(hand=="チョキ"){
    $("#hand2_choki img:last").detach();
  }else if(hand=="パー"){
    $("#hand2_pa img:last").detach();
  }
}

function plus1 (number) {
  let a = parseInt(localStorage.getItem(number), 10);
  a = a + 1;
  localStorage[number] = String(a);
}

// 関数化終了

// 名前入力完了ボタンを押すと、localstrageに情報を保存する
$("#name_btn").on("click", function(){
  let name1 = get_name()[0];
  let name2 = get_name()[1];
  localStorage.setItem('name1', name1)
  localStorage.setItem('name2', name2)
  localStorage.setItem('gu_1', '0')
  localStorage.setItem('choki_1', '0')
  localStorage.setItem('pa_1', '0')
  localStorage.setItem('gu_2', '0')
  localStorage.setItem('choki_2', '0')
  localStorage.setItem('pa_2', '0')
  localStorage.setItem('win1', '0')
  localStorage.setItem('win2', '0')
  localStorage.setItem('sum_battle', '1')
  localStorage.setItem('グー', "img/gu.jpg")
  localStorage.setItem('チョキ',"img/choki.jpg")
  localStorage.setItem('パー', "img/pa.jpg")
  $("#hide_btn").fadeIn(1000);
})


// 各選択カードを押すと発火する関数
$("#play1_gu").on("click", function(){
  hand1 = 'グー';
  localStorage['hand1'] = hand1;
  plus1('gu_1');
})
$("#play1_choki").on("click", function(){
  hand1 = 'チョキ';
  localStorage['hand1'] = hand1;
  plus1('choki_1');
})
$("#play1_pa").on("click", function(){
  hand1 = 'パー';
  localStorage['hand1'] = hand1;
  plus1('pa_1');
})
$("#play2_gu").on("click", function(){
  hand2 = 'グー';
  localStorage['hand2'] = hand2;
  plus1('gu_2');
})
$("#play2_choki").on("click", function(){
  hand2 = 'チョキ';
  localStorage['hand2'] = hand2;
  plus1('choki_2');
})
$("#play2_pa").on("click", function(){
  hand2 = 'パー';
  localStorage['hand2'] = hand2;
  plus1('pa_2');
})


// localstrageのオールクリア
$(".end").on("click", function(){
  localStorage.clear()
})


// スクロールアクション
var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 10;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);