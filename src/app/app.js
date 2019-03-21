/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs-jetpack");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"name":"production","description":"Add here any environment specific stuff you like."}

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

__webpack_require__(9);

var _electron = __webpack_require__(0);

var _fsJetpack = _interopRequireDefault(__webpack_require__(1));

var _env = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const clipboardy = __webpack_require__(10);

const app = _electron.remote.app;

const appDir = _fsJetpack.default.cwd(app.getAppPath());

const init = function () {
  $('.ui.checkbox').checkbox();
  $('.dropdown').dropdown();
  $('#regInnkommende .ui.checkbox').checkbox({
    onChecked: function () {
      $('#regInnkommende .datepicker').addClass('dont-show');
    },
    onUnchecked: function () {
      $('#regInnkommende .datepicker').removeClass('dont-show');
    }
  });
  $('#linkmsg').keyup(function (event) {
    if ($('#linkmsg').val().length > 0) {
      $('#textmsg').parent().addClass('disabled');
    } else {
      $('#textmsg').parent().removeClass('disabled');
    }
  });
  $('#textmsg').keyup(function (event) {
    if ($('#textmsg').val().length > 0) {
      $('#linkmsg').parent().addClass('disabled');
    } else {
      $('#linkmsg').parent().removeClass('disabled');
    }
  });
  $('#smsconnect').on('click', function () {
    $('#smsconnect').addClass('loading');
    setTimeout(function () {
      $('#smsconnect').removeClass('loading');
      addLog(`Подключены к сервису SMS активации`);
      $('#smsbalance').removeClass('disabled');
      $('#trsmscount').html("32");
    }, 2000);
  });
  $('#smsbalance').on('click', function () {
    $('#smsbalance').addClass('loading');
    setTimeout(function () {
      $('#smsbalance').removeClass('loading');
      addLog(`Баланс: 325 рублей`);
      $('#trbalance').html("325");
    }, 1000);
  });
  $('#start').on('click', function () {
    addLog('Получаем прокси...');
    setTimeout(function () {
      addLog('Получено <span class="ui red mini label circular">2 000</span> прокси адресов');
      $('#start').addClass('loading');
      $('#smsbalance').addClass('disabled');
      $('#smsconnect').addClass('disabled');
      $('#smsbalance').addClass('disabled');
      $('#linkmsg').parent().addClass('disabled');
      $('#textmsg').parent().addClass('disabled');
      $('#usernames').get(0).disabled = true;
      setTimeout(process, 4500);
    }, 5000);
  });
  $('#mod').modal({
    onDeny: function () {
      $('#mod2').modal({
        onApprove: function () {
          if ($('#key').val() == 'a17xd260sld77ag46100-aty66-yiopf-032') {
            setTimeout(function () {
              $('#mod4').modal('show');
            }, 2000);
            setTimeout(activate, 3000);
          } else {
            $('#mod3').modal('show');
          }
        }
      }).modal('show');
    }
  }).modal('show');
  $("#activ").on('click', function () {
    $('#mod2').modal({
      onApprove: function () {
        if ($('#key').val() == 'a17xd260sld77ag46100-aty66-yiopf-032') {
          setTimeout(function () {
            $('#mod4').modal('show');
          }, 2000);
          setTimeout(activate, 3000);
        } else {
          $('#mod3').modal('show');
        }
      }
    }).modal('show');
  });
  $('#upd').on('click', function () {
    $('#upd').addClass('loading');
    setTimeout(function () {
      addLog('Установлена последняя версия!');
      $('#upd').removeClass('loading');
    }, 2500);
  });
  $("#activno").on('click', function () {
    $('#mod2').modal({
      onApprove: function () {
        if ($('#key').val() == 'a17xd260sld77ag46100-aty66-yiopf-032') {
          setTimeout(function () {
            $('#mod4').modal('show');
          }, 2000);
          setTimeout(activate, 3000);
        } else {
          $('#mod3').modal('show');
        }
      }
    }).modal('show');
  });
  $('#parse_start').on('click', function () {
    $('#parse_start').addClass('loading');
    setTimeout(() => {
      addLog2('Подключение');
    }, 500);
    setTimeout(() => {
      addLog2('Авторизация');
    }, 1000);
    setTimeout(() => {
      addLog2('Проверено <span class="percent">10%</span>');
      setTimeout(percentUp, 800);
    }, 2000);
  });
  $('#w').on('click', function () {
    $('#q').removeClass('active');
    $('#w').addClass('active');
    $('#win1').hide();
    $('#win2').show();
    $('.log').html("");
  });
  $('#q').on('click', function () {
    $('#w').removeClass('active');
    $('#q').addClass('active');
    $('#win1').show();
    $('#win2').hide();
    $('.log').html("");
  });
  $('#copy-buf').on("click", function () {
    addLog2('Скопировано в буфер обмена!');
    clipboardy.writeSync('+79678558369 +79095377327 +79289066462 +79282967630 +79511292698 +79128576936 +79833505377 +79049496889 +79828305216 +79087157391 +79610493831 +79883242191 +79080229024 +79841458087 +79500765608 +79098115498 +79649590392 +79520717195 +79308721613 +79614628956 +79638599536 +79993712256 +79613978002 +79782113989 +79826504925 +79533866121 +79200762174 +79181748924 +79525836586 +79628792082 +79082635561 +79518759267 +79684793073 +79263563362 +79132971244 +79048402709 +79042824372 +79208843006 +79858292848 +79623150818 +79243036217 +79851097853 +79004856946 +79003765076 +79200855646 +79142150824 +79217324545 +79133673941 +79262261555 +79139477993 +79065552487 +79135961015 +79123871203 +79046483238 +79610401463 +79080558764 +79822292144 +79095140409 +79375807698 +79625410643 +79158677675 +79166072419 +79842961305 +79284868642 +79213750598 +79659205412 +79627102449 +79277318004 +79221342589 +79050422287 +79626129268 +79064891297 +79238280018 +79609878156 +79145022339 +79648551438 +79210127173 +79262388520 +79177620371 +79780564476 +79272324497 +79112230700 +79640341721 +79123195748 +79655272761 +79065028949 +79685591752 +79781413034 +79514029455 +79519306211 +79536237842 +79297790010 +79831042782 +79237566857 +79127426881 +79530310630 +79102980381 +79381548862 +79531886827 +79066547767 +79056290541 +79990102778 +79502179950 +79043119266 +79209890058 +79208941954 +79253595322 +79247264090 +79031063617 +79244825820 +79097197017 +79021609764 +79524823293 +79021863128 +79636613033 +79213432996 +79514538400 +79117457450 +79189762772 +79894835389 +79178077319 +79378590225 +79876997013 +79371744195 +79208152191 +79245314730 +79788328731 +79207182543 +79251906145 +79009912135 +79198284596 +79519981402 +79501446246 +79245241575 +79511803256 +79642004914 +79142408040 +79193832603 +79020635403 +79513666816 +79659561880 +79612381139 +79155905565 +79841625229 +79153503185 +79677945174 +79110743532 +79229195710 +79027442025 +79833365382 +79087257847 +79535549988 +79147432560 +79372361073 +79185467178 +79283123991 +79080402567 +79175487732 +79028357070 +79061534571 +79081300683 +79523908463 +79523627317 +79834401652 +79273022013 +79655450693 +79231953798 +79208359461 +79192965429 +79600368434 +79273298704 +79218022874 +79826127797 +79279309178 +79610620042 +79689940780 +79520971650 +79530893287 +79106974841 +79245696239 +79382040099 +79061647385 +79533903439 +79046448751 +79624873565 +79877228575 +79375284659 +79651637018 +79113570536 +79299250267 +79134418400 +79516538916 +79266383194 +79164360453 +79534178259 +79618723547 +79098672302 +79275072995 +79141045991 +79376142788 +79032770155 +79635634475 +79817591647 +79208749315 +79303432366 +79994768453 +79872985087 +79507128796 +79520550410 +79635396357 +79160215007 +79086367158 +79283899066 +79233287565 +79872926279 +79048962062 +79851543996 +79236686175 +79511303164 +79511777539 +79857241529 +79033940319 +79021973690 +79006558952 +79005762293 +79144361212 +79287743312 +79173198707 +79216524197 +79293651112 +79033598899 +79613663253 +79539591486 +79535111294 +79605281532 +79655195741 +79503994026 +79870849054 +79242666764 +79650176344 +79188045832 +79376919004 +79370923714 +79125624129 +79201775769 +79629682409 +79143256300 +79121497961 +79207790620 +79119064480 +79649642175 +79884869072 +79511487500 +79824088706 +79787419313 +79505424983 +79880013870 +79107250610 +79648881452 +79151812867 +79144202753 +79829917348 +79679584695 +79992079169 +79119249844 +79141537392 +79877370443 +79805411449 +79532606909 +79501501605 +79137770600 +79067511469 +79043354285 +79532681988 +79228349629 +79109214329 +79172299520 +79274333333 +79081882063 +79990602965 +79160346156 +79184832033 +79041942453 +79069907700 +79606442802 +79206422748 +79531204194 +79999744624 +79825968078 +79092880059 +79603831348 +79624226809 +79807016822 +79189057770 +79655283375 +79303650562 +79273974105 +79158392917 +79996201521 +79517501491 +79920173629 +79030723511 +79293294554 +79673996167 +79507955830 +79039214452 +79132382299 +79854175249 +79207314000 +79216442008 +79214000000 +79370983321 +79514438791 +79817734054 +79631473194 +79583913413 +79832683716 +79143791889 +79771674061 +79006627683 +79210720456 +79642961387 +79233364243 +79824557139 +79994522094 +79237535670 +79787099572 +79080488476 +79206905782 +79141410243 +79787364294 +79005474364 +79030863969 +79203777083 +79042037223 +79894577265 +79788626417 +79275628300 +79175053701 +79060339639 +79303482954 +79063223249 +79660262707 +79504404193 +79874490638 +79173147107 +79526287825 +79828173409 +79858057781 +79156437365 +79674720990 +79202364015 +79218994258 +79223442465 +79371861071 +79273506684 +79092497996 +79686286748 +79875423504 +79878532374 +79610381854 +79271068413 +79043077408 +79634126980 +79204738671 +79248286091 +79894793185 +79232192839 +79108673306 +79144569173 +79235665026 +79870359950 +79241262215 +79142000539 +79279063111 +79146415284 +79376619126 +79689752786 +79004293742 +79202805582 +79533532080 +79080440333 +79515330372 +79504827344 +79520976159 +79276716939 +79609625045 +79142682134 +79639329526 +79066882294 +79995328956 +79885067383 +79297291322 +79534407781 +79041654803 +79220785127 +79749281157 +79123248904 +79080537680 +79167281712 +79787194621 +79206356818 +79065058775 +79536770133 +79507306187 +79535128274 +79673133398 +79096007899 +79538149715 +79033595509 +79780227475 +79098872745 +79137748782 +79306784478 +79205593656 +79500073827 +79372719780 +79624603635 +79234860245 +79171756920 +79826988396 +79906215630 +79254776748 +79824597089 +79111627344 +79262956433 +79293967719 +79780677791 +79039926488 +79680101847 +79228319855 +79020643051 +79523863054 +79294776110 +79158260837 +79643339997 +79040895112 +79642876561 +79026367615 +79125745313 +79397565593 +79781282917 +79507033533 +79373653207 +79998154035 +79186911305 +79528394996 +79504113165 +79374962481 +79833254908 +79252068611 +79517399300 +79026033679 +79069907700 +79243683570 +79177111354 +79026525958 +79210787632 +79224671005 +79600474655 +79228133398 +79508045518 +79531301322 +79236752872 +79299829356 +79513799772 +79788492225 +79828020049 +79501742004 +79536849647 +79203438229 +79871481057 +79091043399 +79195247403 +79374290965 +79210663091 +79502126554 +79816809537 +79511394763 +79780319215 +79000274028 +79061676210 +79374106495 +79533381179 +79622839039 +79601543421 +79289562232 +79869724656 +79513395401 +79518889670 +79188888888 +79148136400 +79081556611 +79053114669 +79964487917 +79235990853 +79159747100 +79612386111 +79089546894 +79504531053 +79502046176 +79180721692 +79141852552 +79612473309 +79532911174 +79811662155 +79282338389 +79537366706 +79142623064 +79532324939 +79525975111 +79889975545 +79203911840 +79198532988 +79038430935 +79612647794 +79006375994 +79507919955 +79042840534 +79963091418 +79780304840 +79180849214 +79988776655 +79630281983 +79245706026 +79884151549 +79651481235 +79122743801 +79858085347 +79098176048 +79885755442 +79376050089 +79059995595 +79511537305 +79535429998 +79516235676 +79194890515 +79521499989 +79179337459 +79821777839 +79172052207 +79122830824 +79169600016 +79525457234 +79653448416'.split(" ").join("\n"));
  }); //$('#q').addClass('disabled')
  //$('#w').addClass('disabled')

  $('#ccv').addClass('disabled');
  $('#copy-buf').addClass('disabled');
  $('#e').addClass('disabled');
  $('#r').addClass('disabled');
  $('#smsbalance').addClass('disabled');
  $('#smsconnect').addClass('disabled');
  $('#smsbalance').addClass('disabled');
  $('#linkmsg').parent().addClass('disabled');
  $('#textmsg').parent().addClass('disabled');
  $('#usernames').get(0).disabled = true;
  $('#start').addClass('disabled');
  $('#stop').addClass('disabled');
  $("#activ").hide();
  $("#activno").show();
};

function percentUp(idx = 1) {
  if (idx >= 10) return parseEnd();
  $('.percent').html(`${idx * 10}%`);
  $('#users_number').html(`${Math.round(352 - 352 / idx)}`);
  setTimeout(() => percentUp(++idx), 500);
}

function parseEnd() {
  $('#parse_start').removeClass('loading');
  addLog2("Проверка номеров закончена");
  addLog2("Удовлетворяют требованиям 313 из 437");
  addLog2("+79678558369 +79095377327 +79289066462 +79282967630 +79511292698 +79128576936 +79833505377 +79049496889 <span class='more'>...</span>");
}

function activate() {
  $('#q').removeClass('disabled');
  $('#w').removeClass('disabled');
  $('#e').removeClass('disabled');
  $('#r').removeClass('disabled');
  $('#smsbalance').removeClass('disabled');
  $('#smsconnect').removeClass('disabled');
  $('#smsbalance').removeClass('disabled');
  $('#linkmsg').parent().removeClass('disabled');
  $('#textmsg').parent().removeClass('disabled');
  $('#usernames').get(0).disabled = false;
  $('#start').removeClass('disabled');
  $('#stop').removeClass('disabled');
  $('#ccv').removeClass('disabled');
  $('#copy-buf').removeClass('disabled');
  $("#activ").show();
  $("#activno").hide();
}

var send = 0;
var id = 1;

function process() {
  send = 0;
  id += 1;
  $('#trregistred').html(parseInt($('#trregistred').html()) + 1);

  if (parseInt($('#trbalance').html()) - 4 > 0) {
    $('#trbalance').html(parseInt($('#trbalance').html()) - 4);
  } else {
    addLog('Закончился баланс на счете');
    $('#start').removeClass('loading');
    $('#smsbalance').removeClass('disabled');
    $('#smsconnect').removeClass('disabled');
    $('#smsbalance').removeClass('disabled');
    $('#linkmsg').parent().removeClass('disabled');
    $('#textmsg').parent().removeClass('disabled');
    $('#usernames').get(0).disabled = false;
    return;
  }

  $('#trsmscount').html(parseInt($('#trsmscount').html()) - 1);
  addLog(`Зарегистрирован еще один аккаунт`);
  setTimeout(sendmsg, getRandomInt(700, 1500));
}

function sendmsg() {
  if (send >= getRandomInt(40, 50)) {
    addLog(`Аккаунт ограничен. Регистрируем следующий`);
    setTimeout(process, getRandomInt(3500, 8500));
    $(`#trbanned`).html(parseInt($(`#trbanned`).html()) + 1);
    return;
  }

  send += 1;
  let myElem = document.getElementById(`msg${id}`);

  if (myElem === null) {
    addLog(`Отправлено <span class="ui green mini label circular" id='msg${id}'>1</span> сообщений в WhatsApp`);
  } else {
    if (getRandomInt(0, 300) > 250) {
      $(`#trsendedw`).html(parseInt($(`#trsendedw`).html()) + 1);
    } else {
      $(`#msg${id}`).html(parseInt($(`#msg${id}`).html()) + 1);
      $(`#trsended`).html(parseInt($(`#trsended`).html()) + 1);
    }
  }

  setTimeout(sendmsg, getRandomInt(100, 400));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(init);
$(document).ready(activate);

const addLog = text => {
  let data = new Date().toLocaleTimeString();
  let time = `<span class='time'>${data}</span>`;
  let html = `<p class='line'>${time} ${text}</p>`;
  $('.log').append(html);
  $(".log").animate({
    scrollTop: $(".log").get(0).scrollHeight
  }, 300);
};

const addLog2 = text => {
  let data = new Date().toLocaleTimeString();
  let time = `<span class='time'>${data}</span>`;
  let html = `<p class='line'>${time} ${text}</p>`;
  $('.log2').append(html);
  $(".log2").animate({
    scrollTop: $(".log2").get(0).scrollHeight
  }, 300);
};

addLog('Наш сайт: whatsapp-spam.ru');

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _electron = __webpack_require__(0);

const Menu = _electron.remote.Menu;
const MenuItem = _electron.remote.MenuItem;

const isAnyTextSelected = () => {
  return window.getSelection().toString() !== "";
};

const cut = new MenuItem({
  label: "Cut",
  click: () => {
    document.execCommand("cut");
  }
});
const copy = new MenuItem({
  label: "Copy",
  click: () => {
    document.execCommand("copy");
  }
});
const paste = new MenuItem({
  label: "Paste",
  click: () => {
    document.execCommand("paste");
  }
});
const normalMenu = new Menu();
normalMenu.append(copy);
const textEditingMenu = new Menu();
textEditingMenu.append(cut);
textEditingMenu.append(copy);
textEditingMenu.append(paste);
document.addEventListener("contextmenu", event => {
  switch (event.target.nodeName) {
    case "TEXTAREA":
    case "INPUT":
      event.preventDefault();
      textEditingMenu.popup(_electron.remote.getCurrentWindow());
      break;

    default:
      if (isAnyTextSelected()) {
        event.preventDefault();
        normalMenu.popup(_electron.remote.getCurrentWindow());
      }

  }
}, false);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _electron = __webpack_require__(0);

const supportExternalLinks = event => {
  let href;
  let isExternal = false;

  const checkDomElement = element => {
    if (element.nodeName === "A") {
      href = element.getAttribute("href");
    }

    if (element.classList.contains("js-external-link")) {
      isExternal = true;
    }

    if (href && isExternal) {
      _electron.shell.openExternal(href);

      event.preventDefault();
    } else if (element.parentElement) {
      checkDomElement(element.parentElement);
    }
  };

  checkDomElement(event.target);
};

document.addEventListener("click", supportExternalLinks, false);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("clipboardy");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map