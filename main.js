/*global
 document
 window
*/
var art = {
    "d1": [
        "<figure><img id=d01 class='radius html-size' src=img/big-data-1.png height=300px width=555px title='DJIA API.'><figure><figcaption>Screenshot of DJIA Api design</figcaption></figure>",
        "<figure><img id=d12 class='radius html-size' src=img/api-1.png height=300px width=317px title='Data from the DJIA API.'><figure><figcaption>Screenshot of DJIA Api data</figcaption></figure>"
    ],
    "d2": [
        "<figure><img id=d21 class='radius html-size' src=img/testables-1.png height=300px width=475px title='HTML slide set for presentation at testables LA meetup'><figure><figcaption>HTML slide set at test Meetup</figcaption></figure>",
        "<figure><img id=d22 class='radius html-size' src=img/vue-1.png height=300px width=475px title='HTML slide set for presentation at Vue.JS meetup.'><figure><figcaption>HTML slide set at Vue JS Meetup</figcaption></figure>",
        "<figure><img id=d23 class='radius html-size' src=img/testables-1.png height=300px width=475px title='HTML slide set for presentation at testables LA meetup.'><figure><figcaption>HTML slide set at test Meetup</figcaption></figure>",
        "<figure><img id=d24 class='radius html-size' src=img/data-con-1.png height=300px width=475px title='HTML slide set for presentation at Data Con 2020 (not selected).'><figure><figcaption>HTML slide set for Data Con</figcaption></figure>"
    ],
    "d3": [
        "<figure><img id=d312 class='radius html-size' src=img/foodApp-1.png height=400px width=232px title='App for quick go or no-go on food consumption.'><figure><figcaption>Cell phone food APP</figcaption></figure>",
        "<figure><img id=d32 class='radius html-size' src=img/shoe-1.png height=400px width=297px title='App design for shoe repair shop.'><figure><figcaption>Cell APP for shoe repair</figcaption></figure>",
        "<figure><img id=d33 class='radius html-size' src=img/social.png height=400px width=219px title='App design for local social events.'><figure><figcaption>App for social events</figcaption></figure>",
        "<figure><img id=d34 class='radius html-size' src=img/sports-chat-1.png height=400px width=325px title='Page design for sports chat App.'><figure><figcaption>APP design for sports chat</figcaption></figure>"
    ],
    "d4": [
        "<figure><img id=d41 class='radius html-size' src=img/github-1.png height=400px width=429px title='schlezes GitHub repositories for Meetup presentations.'><figure><figcaption>schlezes GitHub page</figcaption></figure>"
    ],
    "d5": [
        "<figure><img id=d51 class='radius html-size' src=img/allergy-1.png height=300px width=431px title='Page design for allergy business.'><figure><figcaption>Page design for allergy</figcaption></figure>",
        "<figure><img id=d52 class='radius html-size' src=img/sch-tech-1.png height=300px width=395px title='Schlezes.tech was my design for showcase of JavaScript coding, about 2700 lines of JavaScript.'><figure><figcaption>schlezes.tech</figcaption></figure>",
        "<figure><img id=d53 class='radius html-size' src=img/sch-com-1.png height=300px width=472px title='Schlezes.com was my the very first website. Yes, a WordPress platform. It was fast, easy and became a placeholder. I learned SEO from this design.'><figure><figcaption>old schlezes.com</figcaption></figure>"
    ],
    "d6": [
        "<figure><img id=d61 class=radius src=img/beer.png height=100px width=200px title='Simple and original artwork. In this case beer gives headache.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>beer headache</figcaption></figure>",
        "<figure><img id=d62 class=radius src=img/dev-test.png height=100px width=200px title='Simple and original artwork. In this case diagram for testing code.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Test relaease process</figcaption></figure>",
        "<figure><img id=d63 class=radius src=img/face.png height=100px width=200px title='Simple and original artwork. In this case a nice shining face of approval.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Smile of approval</figcaption></figure>",
        "<figure><img id=d64 class=radius src=img/fast-foods.png height=100px width=200px title='Simple and original artwork. In this case drive by the fast food places.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Drive by fast foods</figcaption></figure>",
        "<figure><img id=d65 class=radius src=img/go-around.png height=100px width=200px alt=Freeway Data. Pass on the inside lane.  Title='Simple and original artwork. In this case freeway data shows okay to pass on the left.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Freeway data -ok to pass</figcaption></figure>",
        "<figure><img id=d66 class=radius src=img/sick.png height=100px width=200px title='Simple and original artwork. In this case two diverse food digesting differently causing upset stomach.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>fish and beef don't mix</figcaption></figure>",
        "<figure><img id=d67 class=radius src=img/test-code.png height=100px width=200px title='Simple and original artwork. In this case two flow diagrams for code test.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Test release process</figcaption></figure>",
        "<figure><img id=d68 class=radius src=img/small-allergy.png height=100px width=200px title='Simple and original artwork. In this case an allergy symptom container.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Allergy symptoms</figcaption></figure>",
        "<figure><img id=d69 class=radius src=img/headache.png height=100px width=200px title='Simple and original artwork. In this case a visual for headache symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Headache</figcaption></figure>",
        "<figure><img id=d691 class=radius src=img/miserable.png height=100px width=200px title='Simple and original artwork. In this case visual for being miserable symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - misearble</figcaption></figure>",
        "<figure><img id=d692 class=radius src=img/pollen.png height=100px width=200px title='Simple and original artwork. In this case two a visual for pollen symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - pollen</figcaption></figure>",
        "<figure><img id=d693 class=radius src=img/runny-nose.png height=100px width=200px title='Simple and original artwork. In this case a visual for runny nose symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - runny nose</figcaption></figure>",
        "<figure><img id=d694 class=radius src=img/my-code.png height=100px width=200px title='Simple and original artwork. In this case a visual for slide set good code for testing'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Code is for testing</figcaption></figure>"
    ],
    "d7": [
        "<figure><img id=d71 class='radius html-size' src=img/lotto-1.png height=300px width=512px title='Simple lotto game.  38 numbers and 5 random picks.'><figure><figcaption>Game design for lotto</figcaption></figure>",
        "<figure><img id=d72 class='radius html-size' src=img/tic-tac-1.png height=300px width=475px title='Tic-tac-toe game. Pick either an x or o and play against yourself.'><figure><figcaption>Game design for tic tac toe</figcaption></figure>"
    ],
    "d8": [
        "<figure><img id=d81 class='radius html-size' src=img/2.png height=300px width=350px title='A photo of a spot in Marina del Rey, CA. I used this photo as one of the images to demo an image gallery on a web page.'><figure><figcaption>Marina del Rey, CA</figcaption></figure>",
        "<figure><img id=d82 class='radius html-size' src=img/3.png height=300px width=350px title='A photo of a spot at Truman Lake, MO during a summer sunset. I used this photo as one of the images to demo an image gallery on a web page.'><figure><figcaption>Truman Lake, MO</figcaption></figure>",
        "<figure><img id=d83 class='radius html-size' src=img/4.png height=300px width=350px title='A photo of a spot at Lake Tahoe, CA during a cold winter day. I used this photo as one of the images to demo an image gallery on a web page.'><figure><figcaption>Lake Tahoe, CA</figcaption></figure>"
    ],
    "d9": [
        "<figure><img id=d91 class='radius html-size' src=img/tech.png height=300px width=500px title='Blog to showcase JavaScript skill sets.'><figure><figcaption>Blog to introduce Schlezes.tech</figcaption></figure>",
        "<figure><img id=d92 class='radius html-size' src=img/seo.png height=300px width=500px title='Skill sets in SEO for website ranking.'><figure><figcaption>Blog to show skill sets in SEO</figcaption></figure>",
        "<figure><img id=d93 class='radius html-size' src=img/light.png height=300px width=500px title='Skill sets in marketing with the concept of web page design'><figure><figcaption>Blog to show skill sets in design</figcaption></figure>"
    ],
    "d10": [
        "<figure><img id=d101 class='radius html-size' src=img/crawl-1.png height=300px width=490px title='In SEO, it is good to project yourself as the web crawler so that you can structure your code for the best outcome. For me that means flow.'><figure><figcaption>Artwork to emphasize page crawl</figcaption></figure>",
        "<figure><img id=d102 class='radius html-size' src=img/happy-client-1.png height=300px width=554px title='In SEO, one of the factors in ranking outcome is dependent upon delivery of valid and relevant information to the query.'><figure><figcaption>Artwork to emphasize client expectations</figcaption></figure>",
        "<figure><img id=d103 class='radius html-size' src=img/ul-li-pairs-1.png height=300px width=570px title='In SEO, in my opinion UL - LI pairs are a good practice for website structure, regardless of ranking or not.'><figure><figcaption>Artwork to emphasize UL LI pairs</figcaption></figure>"
    ],
    "d11": [
        "<figure><img id=d104 class='radius html-size' src=img/speed-1.png height=300px width=771px title='As part of SEO, in my opinion, as good practice speed of load is valuable for website ranking. Speed on load gets the client engaged quickly. A 97 score is valuable.'><figure><figcaption>Speed test of schlezes.com</figcaption></figure>",
        "<figure><img id=d105 class='radius html-size' src=img/speed1.png height=300px width=706px title='As part of SEO, in my opinion, as good practice speed of load is valuable for website ranking. Speed on load gets the client engaged quickly. A 99 score is valuable'><figure><figcaption>Speed test of schlezes.tech</figcaption></figure>",
        "<figure><img id=d106 class='radius html-size' src=img/time-on-page-1.png height=300px width=524px title='As part of SEO, in my opinion, as a good practice time on the page is valuable for website ranking. More time on page indicates value for the client.'><figure><figcaption>Artwork to emphasize time on page</figcaption></figure>"
    ],
    "d12": [
        // '<a href="https://schlezes.com/schlezes" target=_"blank" title="schlezes.tech webpage" id="d200" class="link-css" style="background-color: rgb(255, 128, 0)">schlezes (dot) tech <br /><br />webpage</a>',
        // '<a href="https://schlezes.com/vince" target="_blank" title="about Vince Schlezes" id="d201" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 255, 0);">Vince Schlezes about page</a>',
        '<a href="https://github.com/schlezes" target="_blank" title="Github schlezes home page" id="d202" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(128, 255, 0);">GitHub<br /><br />Repositories</a>',
        '<a href="https://schlezes.github.io/test_food/" target="_blank" title="Food Combining APP" id="d203" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 255, 0);">Food Combining<br /><br />APP</a>',
        '<a href="https://schlezes.github.io/shoe/" target="_blank" title="Shoe Repair Shop APP" id="d204" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 255, 128);">Shoe Shop Repair<br /><br /> APP</a>',
        '<a href="https://schlezes.github.io/social/" target="_blank" title="Social Events APP" id="d205" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 255, 255);">Social Events<br /><br /> APP</a>',
        // '<a href="https://schlezes.com/sports" target="_blank" title="Sports Chat" id="d206" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 128, 255);">Sports Chat<br /><br /> APP</a>',
        '<a href="https://schlezes.github.io/lotto/" target="_black" title="lotto" id="d206" style="height: 90px; width: 90px; color: silver; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 0, 255);">lotto<br /><br />Game</a>',
        '<a href="https://schlezes.github.io/tic-tac/" target="_blank" title="tic tac" id="d207" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(128, 0, 255);">tic tac<br /><br />Game</a>',
        '<a href="https://schlezes.github.io/section/" target="_blank" title="section" id="d208" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color:  rgb(255, 0, 255);">section<br /><br />html page</a>',
        '<a href="https://schlezes.github.io/opacity/" target="_blank" title="opacity" id="d209" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 0, 128);">rotation<br /><br />Opacity</a>',
        '<a href="https://schlezes.github.io/sun/" target="_blank" title="sun" id="d210" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color:  rgb(255, 255, 0);">sun<br /><br />Motion</a>',
        // '<a href="https://schlezes.com/allergy" target="_blank" title="Allergy Solutions Locations" id="d209" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 0, 255);">Allergy Solutions</a>',
        // '<a href="https://schlezes.com/page-speed-load" target="_blank" title="blog - page speed load" id="d210" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 0, 128);">page speed load</a>',
        '<a href="https://schlezes.github.io/love-seo/" target="_blank" title="blog for Wordpress SEO" id="d211" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 0, 0);">love seo<br /><br />Transitions</a>'
    ]

};

var getId = function (id) {
    "use strict";
    return document.getElementById(id);
};                                                                                                                           

var expand = function (e) {
    "use strict";
    var d = e.target.id;
    var dd = getId(d);
    dd.style.borderRadius = 10 + "px";
    // dd.className = "size";
    // dd.classList.add = "size";
    dd.style.height = dd.clientHeight * 1.25 + "px";
    dd.style.width = dd.clientWidth * 1.25 + "px";
    dd.style.transition = "all 1s ease-in";
};

var demo = function (e) {
    "use strict";
    var t = e.target.id;
    var op = document.getElementById("dem");
    var zz = document.querySelectorAll("section");

    zz.forEach(function(value) {
        value.style.display = "none";
    });

    // correct header section visibility
    getId("see-me").style.display = "block";
    // correct header section visibility

    // clear last render first
    op.innerHTML = "";
    art[t].forEach(function (value) {
        var li = document.createElement("li");
        li.innerHTML = value;
        li.addEventListener("click", expand, false);
        op.appendChild(li);
    });
    window.scrollTo(0, 0);
};

var resize = function () {
    "use strict";
    var a = getId("nav-w");
    var b = getId("aside-w").clientWidth;
    a.style.width = b + "px";
};

var vis = [
    {"a1": "off"},
    {"a2": "off"},
    {"a3": "off"}
];
// show header text on click
var show = function (e) {
    "use Strict";
    var any;
    var y = e.target.id;
    var chg = document.getElementById("a" + y);

    if (vis.includes("on")) {
        any = vis.indexOf("on");
    } else {
        any = -1;
    }

    if (any === -1 ) {
        chg.classList.remove("off");
        chg.classList.add("on");
        e.target.style.backgroundColor = "lightblue";
        e.target.style.border = "1px lightblue solid";
        e.target.style.borderRadius = 3 + "px";
        vis[(y - 1)] = "on";
        resize();
        return;
    }
    chg.classList.remove("on");
    chg.classList.add("off");
    e.target.style.backgroundColor = "transparent";
    e.target.style.border = "none";
    vis[(y - 1)] = "off";
    resize();
};
    //  getId to remove button element
var son = getId("dn7");
var doc = getId("doc");
    // has to be here otherwise not working
var action = function (e) {
    "use strict";
    var getEl = e.target.tagName;
    var y = e.target.id;
    // var h = window.innerHeight;
    if (getEl !== "LI" || getEl === undefined) {
        return;
    } else if (y.length > 1) {
        son.style.display = "none";
        doc.style.display = "none";
        demo(e);
    } else {
        show(e);
    }
};

// need to get the parent section id for collapse of element
// use inside function - - > up

var obj = {
    "up1": "main",
    "up2": "two",
    "up3": "third",
    "up4": "fourth",
    "up5": "fifth",
    "up6": "sixth",
    // "dn1": "main",
    "dn2": "main",
    "dn3": "two",
    "dn4": "third",
    "dn5": "fourth",
    "dn6": "fifth",
    "dn7": "sixth"
};

// set page scroll

var up = function (e) {
    "use strict";
    var height;
    var id = e.target.id;
    var u = document.getElementById(obj[id]);
    u.style.opacity = 0;
    u.style.visibility = "collapse";
    u.style.height = 0;
    u.style.padding = 0;
    u.style.transition = "all 1s ease-in";
};

function dn(ev) {
    "use strict";
    var id = ev.target.id;
    var d = document.getElementById(obj[id]);
    d.style.opacity = 1;
    d.style.visibility = "visible";
    d.style.height = "auto";
    d.style.paddingTop = 4 + "%";
    // d.style.margin = 10 + "%";
    d.style.transition = "all 1s ease-in";
}

var addEv = function () {
    return document.addEventListener("click", action, false);
};
function to() {
    "use strict";
    location.reload();
    window.scrollTo(0, 0);
}
function tw() {
    "use strict";
    window.scrollTo(0, 0);
}

var listeners = function () {
    addEv();
    getId("up1").addEventListener("click", up, false);
    getId("up2").addEventListener("click", up, false);
    getId("up3").addEventListener("click", up, false);
    getId("up4").addEventListener("click", up, false);
    getId("up5").addEventListener("click", up, false);
    getId("up6").addEventListener("click", up, false);
    // getId("dn1").addEventListener("click", dn, false);
    getId("dn2").addEventListener("click", dn, false);
    getId("dn3").addEventListener("click", dn, false);
    getId("dn4").addEventListener("click", dn, false);
    getId("dn5").addEventListener("click", dn, false);
    getId("dn6").addEventListener("click", dn, false);
    getId("dn7").addEventListener("click", dn, false);
    getId("top").addEventListener("click", to, false);
    getId("doc").addEventListener("click", tw, false);
    getId("aside-w").addEventListener("load", resize, false);
    // getId("d1").addEventListener("click", demo, false);
};
window.onload = listeners;

resize();

window.onresize = resize;
