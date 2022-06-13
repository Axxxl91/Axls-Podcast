$(document).ready(function () {

    function searchVideo(q, maxResults) {

        var data = {
            maxResults: maxResults,
            key: "AIzaSyA4Y7hTE0q_b84ontkDgVtls__GXUHDZU0",
            part: "snippet",
            q: q,
            type: "video",
            channelId: "UCI4isajinqI7voWVMB8uzVw"
            
        }

        $.getJSON("https://www.googleapis.com/youtube/v3/search", data,
            function (res) {
                $("#video-list .video").remove();
                $(res.items).each(function () {
                    console.log(this)
                    var thumbnails = this.snippet.thumbnails.medium.url;
                    var title = this.snippet.title;
                    var description = this.snippet.description;
                    var id = this.id.videoId;

                    var video = $('<div class="video row" data-video-id="' + id + '"> <div class="thumbnail col-lg-5 col-md-5 col-sm-5 col-12"> <img src="' + thumbnails + '" alt="Thumbail"> </div><div class="video-info col-lg-7 col-md-7 col-sm-7 col-12"> <h3>' + title + '</h3> <div class="description"> <p>' + description + '</p></div></div></div>');
                    $("#video-list").append(video)

                });
            });
    }

    $("#formSearch2").on("submit", function (e) {
        e.preventDefault();

        var q = $("#Search").val();

        if (q == "") {
            alert("Escribe algo para buscar");
        } else {
            searchVideo(q, 3);
            $("#Search").val("");
        }
    });

$(document).on("click",".video", function(){
var urlbase="https://www.youtube.com/embed/";
var videoid= $(this).attr("data-video-id");
var video= urlbase+videoid;
$("#bus").attr("src",video);


});


});