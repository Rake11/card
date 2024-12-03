document.getElementById("box1").innerHTML=`
<img src='https://m.economictimes.com/thumb/msid-61166379,width-1200,height-900,resizemode-4,imgsize-126503/why-after-13-years-mahendra-singh-dhoni-is-still-not-out.jpg' width=400px/>
<h2>Nature</h2>`

document.getElementById("box2").innerHTML=`
<img src='https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg' width=400px/>
<h2>Nature</h2>`

let card1=document.createElement("div")
card1.innerHTML=`<img src='https://static.toiimg.com/thumb/msid-111741230,width-1070,height-580,imgsize-37996,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' width=400px/>
<h2>Nature</h2>`
card1.className="card1"
document.body.appendChild(card1)

let card2=document.createElement("div")
card2.innerHTML=`<img src='https://wallpapers.com/images/featured/jadeja-pictures-9idqtlrdq16fbokn.jpg' width=400px/>
<h2>Nature</h2>`
card2.className="card1"
document.body.appendChild(card2)
