const thumbnail = document.querySelector('.thumbnail');
const besar = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.thumb');
thumbnail.addEventListener('click', function(e){
    if(e.target.clasName = 'thumb') {
        besar.src = e.target.src;
        besar.classList.add('fade');
        setTimeout(function(){
            besar.classList.remove('fade');
        }, 500)
        thumbs.forEach(function(thumb){
            if(thumb.classList.contains('active')){
                thumb.classList.remove('active');
            }
        })
        e.target.classList.add('active');
    }
})