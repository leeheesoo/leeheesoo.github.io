(function () {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}());

var player;

function onYouTubeIframeAPIReady() {
  exteriorPlayer = new YT.Player('exteriorPlayer', {
    height: '100%',
    width: '100%',
    videoId: 'ExPqGxzdwJ0',
    playerVars: {
      showinfo: 0,
      controls: 1,
      autohide: 0,
      rel: 0,
      // mute: 1,
      // playsinline: 1,
    },
    events: {
      'onStateChange': videoEndExterior
    }
  });
  interiorPlayer = new YT.Player('interiorPlayer', {
    height: '100%',
    width: '100%',
    videoId: '-h-YlVJSScA',
    playerVars: {
      showinfo: 0,
      controls: 1,
      autohide: 1,
      rel: 0,
      // mute: 1,
      // playsinline: 1
    },
    events: {
      'onStateChange': videoEndInterior
    }
  });
}



function onPlayerReady(sectionName) {
  // console.log(sectionName)
  if (sectionName == 'exterior') {
    app.exteriorCover = false;
    exteriorPlayer.playVideo();
    app.exteriorPlayer = true;
  } else if (sectionName == 'interior') {
    app.interiorCover = false;
    interiorPlayer.playVideo();
    app.interiorPlayer = true;
  }


}

function videoEndExterior(event) {
  var currentState = event.data;
  if (currentState === YT.PlayerState.ENDED) {
    app.exteriorCover = true;
    stopVideo();
    app.exteriorPlayer = false;
  }
}


function videoEndInterior(event) {
  var currentState = event.data;
  if (currentState === YT.PlayerState.ENDED) {
    app.interiorCover = true;
    stopVideo();
    app.interiorPlayer = false;
  }
}

function stopVideo(sectionName) {
  if (sectionName == 'exterior') {
    app.exteriorCover = true;
    exteriorPlayer.stopVideo();
  } else if (sectionName == 'interior') {
    app.interiorCover = true;
    interiorPlayer.stopVideo();
  }
}