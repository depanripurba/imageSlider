const img = document.querySelector(".gambar")
const Prev = document.querySelector(".right")
const Next = document.querySelector(".left")
let angka = 1 

Prev.onclick = function(){
    let cek = img.classList.length
    if(cek >= 2 ){
        if(img.classList[1]=== "tes"){ 
            img.classList.remove("tes")
	        img.classList.add("baru")
            console.log("sekarang kelas yang aktif adalah kelas tes")
        }else if(img.classList[1]=== "baru"){
	        img.classList.remove("baru")
	        img.classList.add("tes")
            console.log("Sekarang kelas yang aktif adalah kelas baru")  
        }
    }else{ 
    img.classList.add("tes")
    }

    if(angka <= 1){
        angka = 3 
    }else{
        angka--
    }
    img.src = "img/"+angka+".jpg"
    console.log(angka)
}
Next.onclick = function(){
    let cek = img.classList.length
    if(cek >= 2 ){
        if(img.classList[1]=== "tes"){
            img.classList.remove("tes")
	        img.classList.add("baru")
            console.log("sekarang kelas yang aktif adalah kelas tes")
        }else if(img.classList[1]=== "baru"){
	        img.classList.remove("baru")
	        img.classList.add("tes")
            console.log("Sekarang kelas yang aktif adalah kelas baru")  
        }
    }else{
    img.classList.add("tes")
    }

    if(angka >= 3){
        angka = 1 
    }else{
        angka++
    }
    img.src = "img/"+angka+".jpg"
    console.log(angka)
}
