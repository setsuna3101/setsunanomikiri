/* ==========================================
   Setsuna no Mikiri
   Official Website Script
========================================== */

// -------------------------
// ページ読み込み
// -------------------------

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// -------------------------
// スクロールアニメーション
// -------------------------

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(section => {

    observer.observe(section);

});

// -------------------------
// パララックス
// -------------------------

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    hero.style.transform =
        `translateY(${y*0.18}px)`;

});

// -------------------------
// マウスライト
// -------------------------

const light = document.createElement("div");

light.style.position="fixed";
light.style.width="400px";
light.style.height="400px";
light.style.borderRadius="50%";
light.style.pointerEvents="none";
light.style.zIndex="-1";

light.style.background=
"radial-gradient(circle, rgba(0,216,255,.12), transparent 70%)";

light.style.filter="blur(20px)";

document.body.appendChild(light);

document.addEventListener("mousemove",(e)=>{

    light.style.left=(e.clientX-200)+"px";
    light.style.top=(e.clientY-200)+"px";

});

// -------------------------
// Topへ戻るボタン
// -------------------------

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.cursor="pointer";
topBtn.style.background="#7d5cff";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.opacity="0";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.opacity="1";

    }else{

        topBtn.style.opacity="0";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// -------------------------
// カードホバー
// -------------------------

//document.querySelectorAll(".card").forEach(card=>{

//    card.addEventListener("mousemove",(e)=>{

//        const rect=card.getBoundingClientRect();

//        const x=e.clientX-rect.left;
//        const y=e.clientY-rect.top;

//        card.style.background=
//        `radial-gradient(circle at ${x}px ${y}px,
//        rgba(0,216,255,.18),
//        rgba(255,255,255,.05))`;

//    });

//    card.addEventListener("mouseleave",()=>{

//        card.style.background=
//        "rgba(255,255,255,.05)";

//    });

//});

// -------------------------
// タイトルを少し浮かせる
// -------------------------

window.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*15;
    const y=(e.clientY/window.innerHeight-.5)*15;

    const title=document.querySelector(".hero h1");

    title.style.transform=
    `translate(${x}px,${y}px)`;

});

// -------------------------
// ロゴクリックでトップへ
// -------------------------

const logo = document.querySelector(".logo");

logo.addEventListener("click", (e) => {

    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});