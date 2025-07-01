var date = new Date();

var mounths = ['января', 'февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
var dayMounthPart = date.getDate() + ' ' + mounths[date.getMonth()];
var yearPart = ' ' + date.getFullYear() + ' года, ';

var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

if ([1,21].includes(h)){
    var hoursePart = h + ' час ';}
else if ([2,3,4,22,23,24].includes(h)){
    var hoursePart = h + ' часа ';}
else var hoursePart = h + ' часов ';

if([1,21,31,41,51].includes(m)){
    var minutePart = m + ' минута ';}
else if ([2,3,4,22,23,24,32,33,34,42,43,44,52,53,54].includes(m)){
    var minutePart = m + ' минуты ';}
else var minutePart = m + ' минут ';

if([1,21,31,41,51].includes(m)){
    var secondPart = m + ' секунда ';}
else if ([2,3,4,22,23,24,32,33,34,42,43,44,52,53,54].includes(m)){
    var secondPart = m + ' секунды ';}
else var secondPart = m + ' секунд ';

function dd(date){ 
    var construction = 'Сегодня ' + dayMounthPart + yearPart + hoursePart + minutePart + secondPart;
    console.log(construction);
}
dd();
setInterval(dd, 1000);
