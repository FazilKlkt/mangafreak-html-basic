
let searchButton = document.getElementById('search-click');
function doSomething(){
	let mangaToSearch = document.getElementById('manga-search').value;
	console.log(mangaToSearch);
}

searchButton.addEventListener('click',()=>{
	doSomething();
})

//  Fucntion to get images from "www.mangafreak.net"
//	function getImageLinks(){
//  	let imgs = document.querySelectorAll("#gohere")
//		imgs.forEach(img =>{
//			console.log(img.currentSrc);
//		})
//	}
//  getImageLinks()

