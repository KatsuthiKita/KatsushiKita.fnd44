"use strict";

// 役の強さを測る
let oyaPower = 0;
let oyabet = 0;
let koPower = 0;
let kobet = 0;

const dicePowerPosition = [
  { diceItems: [1, 1, 1], bet: 5, doubling: 50, text: "ピンゾロ！掛け金5倍だ！" },

  { diceItems: [2, 2, 2], bet: 3, doubling: 12, text: "アラシ！掛け金3倍だ！" },
  { diceItems: [3, 3, 3], bet: 3, doubling: 13, text: "アラシ！掛け金3倍だ！" },
  { diceItems: [4, 4, 4], bet: 3, doubling: 14, text: "アラシ！掛け金3倍だ！" },
  { diceItems: [5, 5, 5], bet: 3, doubling: 15, text: "アラシ！掛け金3倍だ！" },
  { diceItems: [6, 6, 6], bet: 3, doubling: 16, text: "アラシ！掛け金3倍だ！" },

  { diceItems: [4, 5, 6], bet: 2, doubling: 7, text: "シゴロ！掛け金2倍だ！" },

  { diceItems: [1, 2, 2], bet: 1, doubling: 1, text: "訳成立！！" },
  { diceItems: [1, 3, 3], bet: 1, doubling: 1, text: "訳成立！！" },
  { diceItems: [1, 4, 4], bet: 1, doubling: 1, text: "訳成立！！" },
  { diceItems: [1, 5, 5], bet: 1, doubling: 1, text: "訳成立！！" },
  { diceItems: [1, 6, 6], bet: 1, doubling: 1, text: "訳成立！！" },

  { diceItems: [1, 1, 2], bet: 1, doubling: 2, text: "訳成立！！" },
  { diceItems: [2, 3, 3], bet: 1, doubling: 2, text: "訳成立！！" },
  { diceItems: [2, 4, 4], bet: 1, doubling: 2, text: "訳成立！！" },
  { diceItems: [2, 5, 5], bet: 1, doubling: 2, text: "訳成立！！" },
  { diceItems: [2, 6, 6], bet: 1, doubling: 2, text: "訳成立！！" },

  { diceItems: [1, 1, 3], bet: 1, doubling: 3, text: "訳成立！！" },
  { diceItems: [2, 2, 3], bet: 1, doubling: 3, text: "訳成立！！" },
  { diceItems: [3, 4, 4], bet: 1, doubling: 3, text: "訳成立！！" },
  { diceItems: [3, 5, 5], bet: 1, doubling: 3, text: "訳成立！！" },
  { diceItems: [3, 6, 6], bet: 1, doubling: 3, text: "訳成立！！" },

  { diceItems: [1, 1, 4], bet: 1, doubling: 4, text: "訳成立！！" },
  { diceItems: [2, 2, 4], bet: 1, doubling: 4, text: "訳成立！！" },
  { diceItems: [3, 3, 4], bet: 1, doubling: 4, text: "訳成立！！" },
  { diceItems: [4, 5, 5], bet: 1, doubling: 4, text: "訳成立！！" },
  { diceItems: [4, 6, 6], bet: 1, doubling: 4, text: "訳成立！！" },

  { diceItems: [1, 1, 5], bet: 1, doubling: 5, text: "訳成立！！" },
  { diceItems: [2, 2, 5], bet: 1, doubling: 5, text: "訳成立！！" },
  { diceItems: [3, 3, 5], bet: 1, doubling: 5, text: "訳成立！！" },
  { diceItems: [4, 4, 5], bet: 1, doubling: 5, text: "訳成立！！" },
  { diceItems: [5, 6, 6], bet: 1, doubling: 5, text: "訳成立！！" },

  { diceItems: [1, 1, 6], bet: 1, doubling: 6, text: "訳成立！！" },
  { diceItems: [2, 2, 6], bet: 1, doubling: 6, text: "訳成立！！" },
  { diceItems: [3, 3, 6], bet: 1, doubling: 6, text: "訳成立！！" },
  { diceItems: [4, 4, 6], bet: 1, doubling: 6, text: "訳成立！！" },
  { diceItems: [5, 5, 6], bet: 1, doubling: 6, text: "訳成立！！" },

  { diceItems: [1, 2, 3], bet: 1 / 2, doubling: 1 / 2, text: "ヒフミ、、運がないね～倍払おう" },
];

const diceItemList = new Array();

diceItemList[0] = new Image();
diceItemList[1] = new Image();
diceItemList[1].src = "https://github.com/KatsuthiKita/KatsushiKita.fnd44/blob/main/dice1.png?raw=true"
diceItemList[2] = new Image();
diceItemList[2].src = "https://github.com/KatsuthiKita/KatsushiKita.fnd44/blob/main/dice2.png?raw=true"
diceItemList[3] = new Image();
diceItemList[3].src = "https://github.com/KatsuthiKita/KatsushiKita.fnd44/blob/main/dice3.png?raw=true"
diceItemList[4] = new Image();
diceItemList[4].src = "https://github.com/KatsuthiKita/KatsushiKita.fnd44/blob/main/dice4.png?raw=true"
diceItemList[5] = new Image();
diceItemList[5].src = "https://github.com/KatsuthiKita/KatsushiKita.fnd44/blob/main/dice5.png?raw=true"
diceItemList[6] = new Image();
diceItemList[6].src = "https://github.com/KatsuthiKita/KatsushiKita.fnd44/blob/main/dice6.png?raw=true"


// 掛け金設定
const moneySend = document.getElementById("money-send");
const moneyItem = document.getElementById("money-item");
const startMoney = document.getElementById("start-money");

moneySend.addEventListener("click", zzz());

const moneyEnd = document.getElementById("money-end")
moneyEnd.addEventListener("click", ddd());
function ddd() {
  function end() {
    const main = document.querySelector("#main-title");
    const endResult = document.querySelector("#end-result-title");

    main.classList.toggle("close-winder");
    endResult.classList.toggle("close-winder");
  }
  return end;

}

let betMoneyresult = 0;
function zzz() {
  function bet() {
    const betMoney = document.getElementById("bet-money").value;
    if (betMoney === "") {
      moneyItem.innerText = "掛け金を入力してください";
    } else if (parseInt(startMoney.innerText) >= betMoney) {
      betMoneyresult = betMoney;
      //次の画面へ移動

      const main = document.querySelector("#main-title");
      const ko = document.querySelector("#ko-title");

      main.classList.toggle("close-winder");
      ko.classList.toggle("close-winder");


    } else {
      moneyItem.innerText = "掛け金がたりません";

      const end = document.querySelector("#money-end");
      end.classList.toString("close-winder")
    }
  }
  return bet
}


// 親（oya）子（ko）を先頭につける


//親要素の挙動
const oyaDiceButton = document.getElementById("oya-rendom-dice");
oyaDiceButton.addEventListener("click", aaa(dicePowerPosition));

let oyacounter = 0;
function aaa(obj) {
  let diceResult = [];

  const diceButtonresult = document.getElementById("oya-result1");
  const oyaResult111 = document.getElementById("oya-result2");

  function randomNumber1() {
    diceResult = [];

    const diceItem1 = Math.floor(Math.random() * (7 - 1) + 1);
    const diceItem2 = Math.floor(Math.random() * (7 - 1) + 1);
    const diceItem3 = Math.floor(Math.random() * (7 - 1) + 1);

    document.getElementById("oya-dice-item-1").src = diceItemList[diceItem1].src;
    document.getElementById("oya-dice-item-2").src = diceItemList[diceItem2].src;
    document.getElementById("oya-dice-item-3").src = diceItemList[diceItem3].src;

    diceResult.push(diceItem1);
    diceResult.push(diceItem2);
    diceResult.push(diceItem3);

    diceResult.sort();

    for (const arr of obj) {
      if (arr["diceItems"].toString() === diceResult.toString()) {
        oyacounter = 3;
        oyaDiceButton.disabled = true;
        oyaResult111.innerText = arr["text"];
        oyaPower = arr["doubling"] + 0.5;
        oyabet = arr["bet"];
        return diceButtonresult.innerText = "結果の確認をしましょう";
      } else {
        oyaResult111.innerText = "目無し！もう一度サイコロを振ってね";
      }
    }
    oyacounter++;

    if (oyacounter >= 3) {
      oyaDiceButton.disabled = true;
      return diceButtonresult.innerText = "結果の確認をしましょう";
    }
  }
  return randomNumber1;
}


// 子要素の挙動
const koDiceButton = document.getElementById("ko-rendom-dice");
koDiceButton.addEventListener("click", bbb(dicePowerPosition));

let kocounter = 0;
function bbb(obj) {
  let diceResult = [];

  const diceButtonresult = document.getElementById("ko-result1");
  const koResult111 = document.getElementById("ko-result2");

  function randomNumber1() {
    diceResult = [];

    const diceItem1 = Math.floor(Math.random() * (7 - 1) + 1);
    const diceItem2 = Math.floor(Math.random() * (7 - 1) + 1);
    const diceItem3 = Math.floor(Math.random() * (7 - 1) + 1);

    document.getElementById("ko-dice-item-1").src = diceItemList[diceItem1].src;
    document.getElementById("ko-dice-item-2").src = diceItemList[diceItem2].src;
    document.getElementById("ko-dice-item-3").src = diceItemList[diceItem3].src;

    diceResult.push(diceItem1);
    diceResult.push(diceItem2);
    diceResult.push(diceItem3);

    diceResult.sort();

    for (const arr of obj) {
      if (arr["diceItems"].toString() === diceResult.toString()) {
        kocounter = 3;
        koDiceButton.disabled = true;
        koResult111.innerText = arr["text"];
        koPower = arr["doubling"];
        kobet = arr["bet"];
        return diceButtonresult.innerText = "結果の確認をしましょう";
      } else {
        koResult111.innerText = "目無し！もう一度サイコロを振ってね";
      }
    }
    kocounter++;

    if (kocounter >= 3) {
      koDiceButton.disabled = true;
      return diceButtonresult.innerText = "結果の確認をしましょう";
    }
  }
  return randomNumber1;
}


// win画面結果 
const winRrsult = document.getElementById("win-result");
winRrsult.addEventListener("click", ccc());

function ccc() {
  const winPlayer = document.getElementById("win-Player");
  const winMoney = document.getElementById("win-Money");
  function win() {
    if (oyaPower > koPower) {
      winPlayer.innerText = "親の勝ちです。";
      winMoney.innerText = oyabet * betMoneyresult;
      startMoney.innerText = parseInt(startMoney.innerText) - parseInt(winMoney.innerText);

    } else {

      winPlayer.innerText = "子の勝ちです。";
      winMoney.innerText = kobet * betMoneyresult;
      startMoney.innerText = parseInt(startMoney.innerText) + parseInt(winMoney.innerText);
    }
  }
  return win
}





// 各種リセットのため
const winDisplayResut = document.getElementById("one-change");
winDisplayResut.addEventListener("click", change0);
function change0() {
  const betnum = document.getElementById("bet-money");
  betnum.value = "";


}


// 画面移動関係、各種表示関係

// スタート画面表示
const headerDisplayChange = document.getElementById("start-tintiro");
headerDisplayChange.addEventListener("click", change1);
function change1() {

  const title = document.querySelector("#title");
  const main = document.querySelector("#main-title");
  const ko = document.querySelector("#ko-title");
  const oya = document.querySelector("#oya-title");
  const win = document.querySelector("#win-title");
  const endResult = document.querySelector("#end-result-title");
  const side = document.querySelector("#side-title");
  const last = document.querySelector("#last-title");


  title.classList.toggle("close-winder");
  main.classList.toggle("close-winder");
  side.classList.toggle("close-winder");

  const betnum = document.getElementById("bet-money");
  betnum.value = "";

}
// 子のダイス画面
const koDisplayChange = document.getElementById("ko-change");
koDisplayChange.addEventListener("click", change3);
function change3() {

  const title = document.querySelector("#title");
  const main = document.querySelector("#main-title");
  const ko = document.querySelector("#ko-title");
  const oya = document.querySelector("#oya-title");
  const win = document.querySelector("#win-title");
  const endResult = document.querySelector("#end-result-title");
  const side = document.querySelector("#side-title");
  const last = document.querySelector("#last-title");


  ko.classList.toggle("close-winder");
  oya.classList.toggle("close-winder");

}
// 親のダイス画面
const oyaDisplayChange = document.getElementById("win-result");
oyaDisplayChange.addEventListener("click", change4);
function change4() {

  const title = document.querySelector("#title");
  const main = document.querySelector("#main-title");
  const ko = document.querySelector("#ko-title");
  const oya = document.querySelector("#oya-title");
  const win = document.querySelector("#win-title");
  const endResult = document.querySelector("#end-result-title");
  const side = document.querySelector("#side-title");
  const last = document.querySelector("#last-title");


  oya.classList.toggle("close-winder");
  win.classList.toggle("close-winder");
  side.classList.toggle("close-winder");

}
// winリザルト画面 
const winDisplayChange = document.getElementById("one-change");

winDisplayChange.addEventListener("click", change5);
function change5() {

  const title = document.querySelector("#title");
  const main = document.querySelector("#main-title");
  const ko = document.querySelector("#ko-title");
  const oya = document.querySelector("#oya-title");
  const win = document.querySelector("#win-title");
  const endResult = document.querySelector("#end-result-title");
  const side = document.querySelector("#side-title");
  const last = document.querySelector("#last-title");


  win.classList.toggle("close-winder");
  main.classList.toggle("close-winder");


  const betnum = document.getElementById("bet-money");
  betnum.value = "";

  const koButtonresult = document.getElementById("ko-result1");
  const koResult111 = document.getElementById("ko-result2");

  const oyaButtonresult = document.getElementById("oya-result1");
  const oyaResult111 = document.getElementById("oya-result2");

  koButtonresult.innerText = "";
  oyaButtonresult.innerText = "";
  koResult111.innerText = "";
  oyaResult111.innerText = "";

  kocounter = 0;
  oyacounter = 0;

  oyaDiceButton.disabled = false;
  koDiceButton.disabled = false;

}
// 最終画面
const endDisplayChange = document.getElementById("end-change");
endDisplayChange.addEventListener("click", change6);
function change6() {

  const title = document.querySelector("#title");
  const main = document.querySelector("#main-title");
  const ko = document.querySelector("#ko-title");
  const oya = document.querySelector("#oya-title");
  const win = document.querySelector("#win-title");
  const endResult = document.querySelector("#end-result-title");
  const side = document.querySelector("#side-title");
  const last = document.querySelector("#last-title");


  endResult.classList.toggle("close-winder");
  win.classList.toggle("close-winder");


  //最終画面反映用
  const endOyako = document.getElementById("end-oya-ko");
  const endMoney = document.getElementById("end-money");

  if (parseInt(startMoney.innerText) > 10000) {
    endOyako.innerText = "子"
    return endMoney.innerText = Number(startMoney.innerText) - 10000 + "；の勝ちだよ！";
  } else {
    endOyako.innerText = "子"
    return endMoney.innerText = 10000 - Number(startMoney.innerText) + ";の負けだよ…残念";
  }


}
// タイトル画面
const startDisplayChange = document.getElementById("start-title-change");
startDisplayChange.addEventListener("click", change7);
function change7() {

  const title = document.querySelector("#title");
  const endResult = document.querySelector("#end-result-title");
  const side = document.querySelector("#side-title");


  endResult.classList.toggle("close-winder");
  title.classList.toggle("close-winder");
  side.classList.toggle("close-winder");

  const betnum = document.getElementById("bet-money");
  const betMoney = document.getElementById("start-money");
  betnum.value = "";
  betMoney = 10000;

  const koButtonresult = document.getElementById("ko-result1");
  const koResult111 = document.getElementById("ko-result2");

  const oyaButtonresult = document.getElementById("oya-result1");
  const oyaResult111 = document.getElementById("oya-result2");

  koButtonresult.innerText = "";
  oyaButtonresult.innerText = "";
  koResult111.innerText = "";
  oyaResult111.innerText = "";

  kocounter = 0;
  oyacounter = 0;

  oyaDiceButton.disabled = false;
  koDiceButton.disabled = false;

}
// foorerの画面で完了
const lastDisplayChange = document.getElementById("last-tintiro");
lastDisplayChange.addEventListener("click", change8);
function change8() {

  const title = document.querySelector("#title");
  const main = document.querySelector("#main-title");
  const ko = document.querySelector("#ko-title");
  const oya = document.querySelector("#oya-title");
  const win = document.querySelector("#win-title");
  const endResult = document.querySelector("#end-result-title");
  const side = document.querySelector("#side-title");
  const last = document.querySelector("#last-title");


  title.classList.toggle("close-winder");
  last.classList.toggle("close-winder");

}
