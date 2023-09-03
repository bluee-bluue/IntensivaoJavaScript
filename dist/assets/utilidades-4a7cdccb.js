(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c=[{id:"1",marca:"Onbongo",nome:"Camiseta Onbongo Journey Staff Branca",preco:70,imagem:"product-1.jpg",feminino:!1,tamanho:"M"},{id:"2",marca:"Onbongo",nome:"Camiseta Onbongo Emba Preta",preco:65,imagem:"product-2.jpg",feminino:!1,tamanho:"GG"},{id:"3",marca:"Onbongo",nome:"Camiseta Onbongo Estampada Preta",preco:75,imagem:"product-3.jpg",feminino:!1,tamanho:"M"},{id:"4",marca:"Onbongo",nome:"Bolsa Onbongo Shoulder Bag Staff Preta",preco:245,imagem:"product-4.jpg",feminino:!1,tamanho:"GG"},{id:"5",marca:"Onbongo",nome:"Camiseta Onbongo Team Staff Branca",preco:75,imagem:"product-5.jpg",feminino:!1,tamanho:"P"},{id:"6",marca:"Onbongo",nome:"Camiseta Onbongo Feminina Slices Preta",preco:50,imagem:"product-6.jpg",feminino:!0,tamanho:"P"},{id:"7",marca:"Onbongo",nome:"Camiseta Onbongo Feminina Flag Rosa",preco:50,imagem:"product-7.jpg",feminino:!0,tamanho:"G"},{id:"8",marca:"Onbongo",nome:"Camiseta Onbongo Feminina Rain Preta",preco:50,imagem:"product-8.jpg",feminino:!0,tamanho:"G"},{id:"9",marca:"Onbongo",nome:"Camiseta Onbongo Feminina Estampada Preta",preco:60,imagem:"product-9.jpg",feminino:!0,tamanho:"G"},{id:"10",marca:"Onbongo",nome:"Camiseta Onbongo Feminina Estampada Azul Claro",preco:60,imagem:"product-10.jpg",feminino:!0,tamanho:"G"}];function l(t,n){localStorage.setItem(t,JSON.stringify(n))}function d(t){return JSON.parse(localStorage.getItem(t))}function g(t){localStorage.removeItem(t)}function p(t,n,i){const a=c.find(m=>m.id===t),e=document.getElementById(n),o=document.createElement("article"),r=["flex","bg-stone-200","rounded-lg","p-1","relative","mb-2","w-96"];for(const m of r)o.classList.add(m);const s=`
    <img
      src="./assets/img/${a.imagem}"
      alt="Carrinho: ${a.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${a.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: ${a.tamanho}</p>
      <p class="text-green-700 text-lg">$${a.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${a.id}' class='ml-2'>${i}</p>
    </div>`;o.innerHTML=s,e.appendChild(o)}export{g as a,c,p as d,d as l,l as s};
