var niceNames = {
  "classic": "Classic",
  "reverse": "ReVerse"
}

var versionsDict = {
  "classic": "classic",
  "144": "1.4.4",
  "14": "1.4",
  "141": "1.4.1",
  "142": "1.4.2",
  "143": "1.4.3",
}


window.onload = function () {
  if(localStorage.getItem("lastLaunchedVersion") === null) {
    document.getElementsByClassName("lastLaunchedBtn")[0].innerHTML = "None"
    document.getElementsByClassName("lastLaunchedBtn")[0].id = "none"
    
  } else {
    document.getElementsByClassName("lastLaunchedBtn")[0].innerHTML = "Launch " + niceNames[localStorage.getItem("lastLaunchedVersion")];
    document.getElementsByClassName("lastLaunchedBtn")[0].id = localStorage.getItem("lastLaunchedVersion");
  }
  
}



var styles = `
    .swal-text {
      background-color: #fff;
      padding: 17px;
      border: 1px solid #000;
      display: block;
      margin: 22px;
      text-align: center;
      color: #000;
    }
    .swal-modal {
      background-color: #000;
      border: 2px solid white;
    }
    .swal-title {
      color: white;
    }
   
    
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll('.home').forEach(element => {
   element.onclick = function() { 
       window.open("https://reversegenesis.org/","_self");
   }
});

document.querySelectorAll('.twitter').forEach(element => {
   element.onclick = function() { 
      window.open("https://x.com/ReVerseGenesis/", "_blank");
   }
});





document.querySelectorAll('.launch').forEach(element => {

  element.onclick = function() {
    if(element.id !== "none") {
      localStorage.setItem("lastLaunchedVersion", element.id)
      document.getElementsByClassName("lastLaunchedBtn")[0].innerHTML = "Launch " + niceNames[element.id];
      document.getElementsByClassName("lastLaunchedBtn")[0].id = element.id
  
      if(element.id in versionsDict) {
        window.open(`./${versionsDict[element.id]}/`,'_blank')
      } else {
        window.open(`./${element.id}/`,'_blank')
      }
    }
    
  };

});
