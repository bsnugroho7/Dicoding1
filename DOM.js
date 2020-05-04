let gambarbg = document.querySelector(".top-side");
let counter=0;

gambarbg.addEventListener('click',function(event){
    counter++;
    console.log(counter);
    if (counter%2===1){
        console.log("Putih");
        document.getElementById("edit").style.backgroundImage="url(https://wallpapercave.com/wp/wp2234539.jpg)";
    }
    else{
        console.log("Hitam");
        document.getElementById("edit").style.backgroundImage="url(https://i.pinimg.com/originals/70/d6/b3/70d6b3aaf2857dce05601505b8ca7db0.jpg)";
    }
})
;
