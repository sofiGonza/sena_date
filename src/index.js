function getTimeStamp(){
return Date.now();}

function getLongTime(locale ='es-ES'){
const options = {
weekday:'long',
year: 'numerico',
month: 'long',
day: 'numerico',
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
timeZoneName: 'short'
}
return new Date().toLocaleString(locale,options)}

module.exports={
    getLongTime,
    getTimeStamp
}