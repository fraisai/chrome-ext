// 1. Date() Initialize objects (keys: localtime values: suggested cups of water )
// 2. Initialize a variable and assign it the value of "local hour"

// chrome.runtime.onStartup.addListener(function() {
    // alert('hi');
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
    setInterval(function() {
        keepTrack+= 1;
        (keepTrack === 1 ) 
            ? alert(`Hey, you've been sitting in front of your desk for ${keepTrack} hour already. GO STRETCH!`) 
            : alert(`Hey, you've been sitting in front of your desk for ${keepTrack} hours already. GO STRETCH!`);
    }, 60 * 1000); // 15 * 1000 milsec = 15000
    // for an hour 60*60*1000

    // prompt() returns a string containing a string entered by the user or null if the user did not enter anything.

    let scale = Number(prompt("From a scale of 1 to 5, how stressed out do you feel right now?"))
    
    if (scale >= 3) {
        let second = 10;
        alert("Let's start a 10 second meditation session. Take a deep breath in and hold for 10 seconds.");
        setTimeout(function() {
            alert("Now slowly exhale... Good job! Now get back to work!!");
        }, 10 * 1000)
    } else {
        alert("You've got this under control. Keep WORKING!");
    }

// })
// 1. Single Digit Minute Situation
// 2. 1 instance of our interval per window
// 3. 

// What does the user experience upon browser starting 
// Opening up at browser: user gets a prompt that in 1 hour they need to drink x ounces of water
// 12 cups of water per 24 hours 10AM - 10PM
// h* 0.5 
// localHours 
// 

// By 10 AM, you should have drank 5 cups of water
// if (localHours <= 10) {
//     thismany = 5;
// }
// if (localHours > 10 && localHours < 22) {
//     thismany = 5 + ((localHours - 10) / 12) * 7;
// }
// console.log(Math.round(thismany));




    // "content_scripts": [
    //     {
    //         "matches": ["https://www.youtube.com/*"],
    //         "js": ["./main.js"]
    //     }
    // ]


    // "icons": {
    //     "16": "",
    //     "48": "",
    //     "128": ""
    // },
    // "page_action": {
    //     "default-icons": {
    //         "16": "",
    //         "48": "",
    //         "128": "" 
    //     }
    // }


    // hello there hi