
window.onload=function() {
    //alert("scripts are loading");


    var categories = document.getElementsByTagName("c");

    for (var i = 0; i < categories.length; i++) { //prepares all category buttons for later use
        categories[i].id="category_"+i;
        categories[i].className="catoption";
        categories[i].addEventListener('click', function() {HighlightCategory(this)});
    }
    

    document.addEventListener("fullscreenchange", function() { // Handles the user leaving fullscreen, but NOT using the provided button
        //alert(document.fullscreenElement.id);
        if (!document.fullscreenElement) {
            OpenFullscreen(-1);
        }
    });

    //alert("scripts are loaded");
};

/*
document.onkeydown=function(event) {
    alert("keypress: "+event.key);
    if (event.key=="Escape") {
        
    }
};
*/

function HighlightCategory(catelement) { // toggles highlight of the category buttons when pressed 
    var catclass=catelement.className;
    //alert("id: "+catelement.id+" class: "+catclass+" content: "+catelement.textContent);

    if (catclass=="catoption") {
        catelement.className="catselected";
        
        alert("highlight all "+catelement.textContent+" (not functional)");
    } else {
        catelement.className="catoption";
        alert("un-highlight all "+catelement.textContent+" (not functional)");
    }

}



function OpenFullscreen(visbox) { // This magic makes the fullscreen buttons work
    
    if (document.fullscreenElement || visbox==-1) { // this runs if you leave fullscreen

        document.exitFullscreen();
        
        var fullscreenvisframes=document.getElementsByClassName("visframe_fullscreen");
        while (fullscreenvisframes.length > 0) {
            fullscreenvisframes[0].className="visframe";
        }

    } else { // this runs when you go to fullscreen
        var visbox_=document.getElementById("visbox_"+visbox);
        visbox_.requestFullscreen();

        var visframes=document.getElementsByClassName("visframe");
        while (visframes.length > 0) {
            visframes[0].className="visframe_fullscreen";
        }
    } 
}

function selectVis(visbox, vischoice) { // 
    //alert("test_"+visbox+"_"+vischoice);
    var vis=document.getElementById("visbox_"+visbox);

    //document.getElementById("choice_"+visbox+"_"+vischoice).style.backgroundColor="rgb(143, 143, 143)";
    if (vischoice==0) {
        //vis.style.display="none"; //
    } else {
        vis.style.display="inline-block";
    }
    for (var i=0; i<=3 ; i++) {
        if (i==vischoice) {
            document.getElementById("choice_"+visbox+"_"+i).className="visselected";
            document.getElementById("visualisation_"+visbox+"_"+i).style.display="inline";
        } else {
            document.getElementById("choice_"+visbox+"_"+i).className="visoption";
            document.getElementById("visualisation_"+visbox+"_"+i).style.display="none";
        }
    }
}


function searchNode(searchboxnum) {
    alert("searchbox: "+searchboxnum+" (does not work yet)");
    var searchbox=document.getElementById("search_"+searchboxnum);
    //window.location="website.php?search=searchbox.value";
    //alert("search node(s) with name: "+searchbox.value+" (not functional)");
}

// settings popup
function OpenSettings() {
    //alert("test123");
    document.getElementById("set_popup").style.display = "block";
};

function CloseSettings() {
    //alert("test456");
    document.getElementById("set_popup").style.display="none";
};

window.onclick=function(event) {
    if (event.target == document.getElementById("set_popup")) {
        CloseSettings();
    }
};

/*
function fit() {
    var iframes = document.querySelectorAll("iframe.gh-fit")

    for(var id = 0; id < iframes.length; id++) {
        var win = iframes[id].contentWindow
        var doc = win.document
        var html = doc.documentElement
        var body = doc.body
        var ifrm = iframes[id] // or win.frameElement

        if(body) {
            body.style.overflowX = "hidden" // scrollbar-jitter fix
            body.style.overflowY = "hidden"
        }
        if(html) {
            html.style.overflowX = "hidden" // scrollbar-jitter fix
            html.style.overflowY = "hidden"
            var style = win.getComputedStyle(html)
            ifrm.width = parseInt(style.getPropertyValue("width")) // round value
            ifrm.height = parseInt(style.getPropertyValue("height"))
        }
    }

    requestAnimationFrame(fit)
}

addEventListener("load", requestAnimationFrame.bind(this, fit))
*/
