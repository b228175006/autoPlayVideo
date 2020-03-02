console.log('plugnin is load!')
var inteval = setInterval(function(){
    var box = document.getElementsByClassName('nextware')[0];
    if(box&&box.style.cssText == 'display: block;'){
        box.children[1].click()
    }else{
        console.log('视频还未播放完毕');
    }
},20000)
