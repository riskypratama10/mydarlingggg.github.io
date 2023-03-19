var list = document.getElementsByClassName('data-bg-image');

for(var i =0; i < list.length; i++ ){
    var bgimg = list[i].getAttribute('data-bg-image');
    list[i].style.backgroundImage = "url('" + bgimg + "')";
}