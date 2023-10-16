function removeItem(){
    var colors = document.getElementById('color');
    colors.remove(colors.selectedIndex);
}

let remove = document.querySelector('.inp');
remove.addEventListener('click', function(e){
    removeItem();
})