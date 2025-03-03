import{S as p,$ as a,A as f,N as y,P as v}from"./vendor-DsWrhFg-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".button-prev"),e=document.querySelector(".button-next");let i;function r(){i&&(i.isBeginning?t.setAttribute("disabled","true"):t.removeAttribute("disabled"),i.isEnd?e.setAttribute("disabled","true"):e.removeAttribute("disabled"))}i=new p(".swiper-hero",{watchOverflow:!1,loop:!0,direction:"horizontal",simulateTouch:!0,grabCursor:!0,slidesPerView:1,speed:1e3,keyboard:{enabled:!0,onlyInViewport:!0},autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".button-next",prevEl:".button-prev"},on:{slideChange:r,init:r}})});function h(){{let t=function(e){var i=parseInt(e.html(),10);i=i+10,e.html(++i),i>e.data("count")?e.html(e.data("count")):setTimeout(function(){t(e)},50)};a(".stat-count").each(function(){a(this).data("count",parseInt(a(this).html(),10)),a(this).html("0"),t(a(this))})}}a(document).ready(function(){var t=document.getElementById("counter"),e,i=0;window.onscroll=function(){e=g(t),e==!0&&i==0&&(h(),i=1)}});function g(t){var e=t.getBoundingClientRect(),i=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(e.bottom<0||e.top-i>=0)}new f(".mod-list",{duration:500,showMultiple:!1});const w=document.querySelectorAll(".mod-button");w.forEach(t=>{t.addEventListener("click",()=>{const i=t.closest(".mod-item").querySelector(".mod-answer"),r=t.classList.contains("active");document.querySelectorAll(".mod-answer").forEach(n=>{n.style.maxHeight=null,n.style.opacity="0",n.style.transition="opacity 0.3s ease, max-height 0.5s ease"}),document.querySelectorAll(".mod-button").forEach(n=>{n.classList.remove("active")}),r||(i.style.maxHeight=i.scrollHeight+"px",i.style.opacity="1",i.style.transition="opacity 0.5s ease, max-height 0.5s ease",t.classList.add("active"))})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".accordion-item");t.forEach((e,i)=>{const r=e.querySelector(".accordion-trigger"),n=e.querySelector(".accordion-content");i===0&&(e.classList.add("open"),n.style.maxHeight=n.scrollHeight+"px"),r.addEventListener("click",()=>{const o=e.classList.contains("open");t.forEach(s=>{s.classList.remove("open"),s.querySelector(".accordion-content").style.maxHeight=0}),o?n.style.maxHeight=0:(e.classList.add("open"),n.style.maxHeight=n.scrollHeight+"px")})})});document.addEventListener("DOMContentLoaded",()=>{new p(".swiper-about",{slidesPerView:2,modules:[y,v],navigation:{nextEl:".swiper-button-next-2"},loop:!0,watchOverflow:!1,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,loopFillGroupWithBlank:!0,breakpoints:{640:{slidesPerView:3},768:{slidesPerView:3},1440:{slidesPerView:4}}})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".button-prev"),e=document.querySelector(".button-next");let i;function r(){i&&(i.isBeginning?t.setAttribute("disabled","true"):t.removeAttribute("disabled"),i.isEnd?e.setAttribute("disabled","true"):e.removeAttribute("disabled"))}i=new p(".slider-wrapper",{watchOverflow:!0,centeredSlides:!0,loop:!0,direction:"horizontal",simulateTouch:!0,grabCursor:!0,spaceBetween:16,slidesPerView:1,speed:1e3,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},on:{slideChange:r,init:r},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3},1440:{slidesPerView:4}}})});new Swiper(".slider-wrapper",{loop:!0,grabCursor:!0,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1024:{slidesPerView:1},1200:{slidesPerView:2},1440:{slidesPerView:2}}});let b=document.querySelector(".iconCart"),l=document.querySelector(".cart"),d=document.querySelector(".container"),L=document.querySelector(".close");b.addEventListener("click",function(){l.style.right=="-100%"?(l.style.right="0",d.style.transform="translateX(-400px)"):(l.style.right="-100%",d.style.transform="translateX(0)")});L.addEventListener("click",function(){l.style.right="-100%",d.style.transform="translateX(0)"});let u=null;fetch("/src/products.json").then(t=>t.json()).then(t=>{u=t,q()});function q(){let t=document.querySelector(".listProduct");t.innerHTML="",u!=null&&u.forEach(e=>{let i=document.createElement("div");i.classList.add("item"),i.innerHTML=`<img src="${e.image}" alt="">
            <h2>${e.name}</h2>
            <div class="price">$${e.price}</div>
            <button onclick="addCart(${e.id})">Add To Cart</button>`,t.appendChild(i)})}let c=[];function C(){var t=document.cookie.split("; ").find(e=>e.startsWith("listCart="));t?c=JSON.parse(t.split("=")[1]):c=[]}C();E();function E(){let t=document.querySelector(".listCart");t.innerHTML="";let e=document.querySelector(".totalQuantity"),i=0;c&&c.forEach(r=>{if(r){let n=document.createElement("div");n.classList.add("item"),n.innerHTML=`<img src="${r.image}">
                    <div class="content">
                        <div class="name">${r.name}</div>
                        <div class="price">$${r.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${r.id}, '-')">-</button>
                        <span class="value">${r.quantity}</span>
                        <button onclick="changeQuantity(${r.id}, '+')">+</button>
                    </div>`,t.appendChild(n),i=i+r.quantity}}),e.innerText=i}let m=[];function S(){var t=document.cookie.split("; ").find(e=>e.startsWith("listCart="));t&&(m=JSON.parse(t.split("=")[1]))}S();x();function x(){let t=document.querySelector(".returnCart .list");t.innerHTML="";let e=document.querySelector(".totalQuantity"),i=document.querySelector(".totalPrice"),r=0,n=0;m&&m.forEach(o=>{if(o){let s=document.createElement("div");s.classList.add("item"),s.innerHTML=`<img src="${o.image}">
                    <div class="info">
                        <div class="name">${o.name}</div>
                        <div class="price">$${o.price}/1 product</div>
                    </div>
                    <div class="quantity">${o.quantity}</div>
                    <div class="returnPrice">$${o.price*o.quantity}</div>`,t.appendChild(s),r=r+o.quantity,n=n+o.price*o.quantity}}),e.innerText=r,i.innerText="$"+n}
//# sourceMappingURL=main-Bq8pHgKZ.js.map
