function closeAlertBox(){
    alertBox = document.getElementById("alertBox");
    alertClose = document.getElementById("alertClose");
    alertBox.style.visibility = "hidden";
    alertClose.style.visibility = "hidden";
}

window.alert = function(msg){
    var id = "alertBox", alertBox, closeId = "alertClose", alertClose;
    alertBox = document.createElement("div");
    document.body.appendChild(alertBox);
    alertBox.id = id;
    alertBox.innerHTML = msg;
    alertClose = document.createElement("div");
    alertClose.id = closeId;
    alertClose.innerHTML = "x";
    alertBox.appendChild(alertClose);
    alertBox.style.visibility = "visible";
    alertClose.style.visibility = "visible";
    alertClose.onclick = closeAlertBox;
};

// chrome.runtime.onStartup.addListener(function() {
    const localHours = (new Date()).getHours();
    console.log(localHours);

    const localMinutes = (new Date()).getMinutes();
    console.log(localMinutes);

    let thismany = localHours * 0.5;

    const timeOnStartup = [localHours, localMinutes];

    // whenever you open a website
    alert(`Hi, by ${localHours}:${localMinutes}, the Mayo Clinic recommends that you have had about ${thismany} cup(s) of water.`)

    // 
    let keepTrack = 0
    let whichPrompt = 0;

    setInterval(function() {

      whichPrompt++;
      keepTrack+= 30;
      if (whichPrompt % 2 === 1) {
          alert(`Hey, you've been sitting in front of your desk for ${keepTrack} seconds already. GO STRETCH!`);
      } else {

        let scale = Number(prompt("From a scale of 1 to 5, how stressed out do you feel right now?"));
        if (scale >= 3) {
          let second = 10;
          alert("Let's start a 5 second meditation session. Take a deep breath in and hold for 5 seconds.");
          setTimeout(function() {
            alert("Now slowly exhale... Good job! Now get back to work!!");
          }, 5 * 1000)
        } else {
          alert("You've got this under control. Keep WORKING!");
        } 
    }
    }, 20 * 1000);


    // ORIGINAL CODE
    // setInterval(function() {
    //     keepTrack+= 1;
    //     (keepTrack === 1 ) 
    //         ? alert(`Hey, you've been sitting in front of your desk for ${keepTrack} hour already. GO STRETCH!`) 
    //         : alert(`Hey, you've been sitting in front of your desk for ${keepTrack} hours already. GO STRETCH!`);
    // }, 20 * 1000); // 15 * 1000 milsec = 15000
    // // for an hour 60*60*1000

    // // prompt() returns a string containing a string entered by the user or null if the user did not enter anything.

    
    // setInterval(function() {
    //     let scale = Number(prompt("From a scale of 1 to 5, how stressed out do you feel right now?"))
    //     if (scale >= 3) {
    //     let second = 10;
    //     alert("Let's start a 10 second meditation session. Take a deep breath in and hold for 10 seconds.");
    //     setTimeout(function() {
    //         alert("Now slowly exhale... Good job! Now get back to work!!");
    //     }, 30 * 1000)
    //     } else {
    //         alert("You've got this under control. Keep WORKING!");
    //     } 
    // }, 20 * 1000)
// })


    // let whichPrompt = 0;
    // setInterval(function() {

    // whichPrompt++;
    // if (whichPrompt % 2 === 1) {
    //     keepTrack+= 1;
    //     (keepTrack === 1 ) 
    //         ? alert(`Hey, you've been sitting in front of your desk for ${keepTrack} hour already. GO STRETCH!`) 
    //         : alert(`Hey, you've been sitting in front of your desk for ${keepTrack} hours already. GO STRETCH!`);
    // } else {

    //     let scale = Number(prompt("From a scale of 1 to 5, how stressed out do you feel right now?"))
    //     if (scale >= 3) {
    //     let second = 10;
    //     alert("Let's start a 10 second meditation session. Take a deep breath in and hold for 10 seconds.");
    //     setTimeout(function() {
    //         alert("Now slowly exhale... Good job! Now get back to work!!");
    //     }, 30 * 1000)
    //     } else {
    //         alert("You've got this under control. Keep WORKING!");
    //     } 
    // }
    // }, 20 * 1000);