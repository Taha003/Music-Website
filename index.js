// console.log('Hello spotify')
let librarySongs=document.querySelector('.library-songs');
let listItem=document.querySelector('.list-item');
const getSongs=async()=>{
    try{    let songs=await fetch("http://127.0.0.1:5500/Music/");
    let songsResponse=await songs.text();
    let div=document.createElement('div');
    div.innerHTML=songsResponse;
    let a=div.getElementsByTagName('a');
    console.log(a)
    //Filtering anchor tag with mp3
    let onlySongs=Array.from(a).filter((e)=>{
        if(e.href.endsWith('.mp3')){
            return e;
        }
    })
    let songsTitle=onlySongs.map((e)=>e.title.replace('.mp3',""));
    onlySongs.map((e)=>{
        let songsNames=e.title.replace('.mp3','');
        let songHref=e.href;

        // let listItem=document.createElement('li');
        // listItem.textContent=songsNames;
        // listItem.style.listStyleType='none';
        // listItem.style.padding='7px';
        // listItem.style.fontSize='13px';
        // listItem.addEventListener('click',()=>playSong(songHref))
        // librarySongs.appendChild(listItem);
        // listItem.innerHTML+=songsNames;
        librarySongs.innerHTML+=
        `<li class="list-item">
                  <img src="./Assets/music.svg" alt="">
                  <div class="songname" style=''>${e.title.replace('.mp3','')}</div>
                  <img src="./Assets/play1.svg" class="play-icon1"/>
                  
                </li>`
        
    })
    
    //Mapping through each song to get song link
    let song=onlySongs.map((e)=>{
        return e.href;
    }) 
    return song;
    
}
catch(error){
    return error
}
    
    
}
console.log(getSongs())
const playSong=(href)=>{
    
    
  
  
    
}
// getSongs()
// getSongs().then((e)=>{

//     let audio=new Audio(e[2]);

//     audio.play()
    
// })