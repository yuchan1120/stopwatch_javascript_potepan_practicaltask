let numberD = 0;
let numberC = 0;
let numberB = 0;
let numberA = 0;

// 繰り返し処理の中身
function showPassage() {
  numberD++;   // カウントアップ
  document.getElementById("AreaD").innerHTML = numberD;   // 表示更新
   if(numberD >= 99){
    numberD = -1
   }
   if(numberD === 0){
    numberC++;
     document.getElementById("AreaC").innerHTML = numberC;
     if(numberC >= 59){
      numberC = -1
     }
     if(numberC === 0){
      numberB++;
       document.getElementById("AreaB").innerHTML = numberB;
       if(numberB >= 59){
        numberB = -1
       }
       if(numberB === 0){
        numberA++;
         document.getElementById("AreaA").innerHTML = numberA;
       }
     }
   }
}
 
// 繰り返し処理の開始
function startShowing() {
   TimerID = setInterval('showPassage()',10);   // タイマーをセット(1000ms間隔)
   document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
}
 
// 繰り返し処理の停止
function stopShowing() {
   clearInterval( TimerID );   // タイマーのクリア
   document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}

//リセット
function resetShowing() {
   numberD = 0;
   numberC = 0;
   numberB = 0;
   numberA = 0;
   document.getElementById("AreaD").innerHTML = numberD;
   document.getElementById("AreaC").innerHTML = numberC;
   document.getElementById("AreaB").innerHTML = numberB;
   document.getElementById("AreaA").innerHTML = numberA;
}
