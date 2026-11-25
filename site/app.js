/* UPI payment: put your UPI ID between the quotes, for example "yourname@okbank". Leave empty to turn UPI payment off. */
const UPI={id:"",name:"Revathi Homemade Pickles"};let pend=null;
const NUM=["919121763182","919133991807"];
const P=[];let n=0;
const add=(nm,c,s,d)=>P.push({id:n++,nm,c,s,d});
"Tomato,Gongura,Kakarakaya,Pandumirchi,Kothimeera,Podhina,Amla (Usirikaya),Onion,Carrot,Chikkudukaya,Cauliflower,Drumstick,Lemon".split(",").forEach(x=>add(x,"veg",{"500g":375,"1Kg":750},"Homemade veg pickle"));
add("Allam (Ginger) Pickle","veg",{"500g":400,"1Kg":800},"Homemade ginger pickle");
add("Mamidi Allam","veg",{"500g":440,"1Kg":880},"Homemade mango-ginger pickle");
[["Chicken Pickle (with Bone)",{"500g":600,"1Kg":1200}],["Chicken Boneless",{"500g":750,"1Kg":1499}],["Prawns",{"500g":999,"1Kg":1999}],["Mutton Boneless",{"500g":1200,"1Kg":2400}],["Mutton Keema Pickle",{"250g":650,"500g":1300}],["Gongura Chicken",{"250g":440,"500g":880}],["Gongura Prawns",{"250g":600,"500g":1200}]].forEach(x=>add(x[0],"nonveg",x[1],"Homemade non-veg pickle"));
["Special Karivepaku Podi (Curry Leaves)","Kakarakaya Podi (Bitter Gourd)","Pudhina Podi (Mint)","Velluli Karam (Garlic Powder)","Nalla Karam","Kandhi Karam","Kobbari Karam (Coconut Powder)","Nuvvullo Podi (Sesame Powder)","Flaxseed Podi","Idly Karam","Putnala Podi"].forEach(x=>add(x,"podi",{"250g":250},"Traditional podi, ₹250 per 250g"));
add("Chilli Powder","other",{"500g":300},"Chilli powder");add("Masala Karam","other",{"500g":350},"Masala karam");add("Pasupu (Turmeric)","other",{"250g":130},"Turmeric powder");
add("Moringa Powder","podi",{"250g":250},"Traditional moringa leaf podi");
add("Mango","veg",{"500g":375,"1Kg":750},"Homemade mango pickle");
const CAT={all:"All",veg:"Veg Pickles",nonveg:"Non-Veg Pickles",podi:"Podilu",other:"Other Powders & Masalas"};
const ICON={veg:"🥒",nonveg:"🍗",podi:"🌶️",other:"🧂"},CL={veg:"cv",nonveg:"cn",podi:"cp",other:"cp"};
const $=s=>document.querySelector(s),R=n=>"Rs. "+Number(n).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2});
let cat="all",q="",sort="d",sel={},qty={},cart=[];try{cart=(JSON.parse(localStorage.getItem("rv_cart"))||[]).filter(c=>P[c.id]&&P[c.id].s[c.z]&&c.u>0)}catch(e){}
const P0=p=>Math.min(...Object.values(p.s));
function toast(t){const e=$("#toast");e.textContent=t;e.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.display="none",1800)}
const COL=["#d9381e","#5f7a1c","#3a6b2a","#c0271b","#4f8f2f","#2f7d3a","#8aa63a","#b0457a","#e8811f","#7a9a34","#d9c58a","#6f8f2a","#e6c21a","#c9923a","#d9a62b","#b8561f","#c9662b","#d9682e","#8b2f1a","#7a2a18","#9a3a1c","#a8552a","#4a6b1f","#5a7a2a","#3f8f4a","#e3d3a8","#3a2a22","#d9a03a","#efe2c4","#c9a66b","#8a5a2e","#c43a1f","#e0b25a","#c0271b","#a8481f","#f2b705"];
const lf=f=>`<path d="M0-8C8-6 8 4 0 8-8 4-8-6 0-8z" fill="${f}"/><path d="M0-8V9" stroke="#b03a2e" stroke-width="1.2"/>`,
chi=f=>`<path d="M-8-3Q0-8 6 0 9 4 8 6 0 4-8-1z" fill="${f}"/><path d="M-8-3l-2-2" stroke="#2f7d3a" stroke-width="2"/>`,
gin=f=>`<path d="M-8 2Q-8-2-4-2-4-6 0-5 2-8 5-4 9-4 8 1 5 3 7 6 2 6-2 8-5 5-8 5z" fill="${f}" stroke="#8a6a2a" stroke-width=".8"/>`,
mnt=`<g transform="rotate(30)"><ellipse rx="5" ry="8" fill="#2f9d4a"/><path d="M0-8V8" stroke="#1f6a30"/></g>`,
chk=`<path d="M-7-2L-3-6 4-5 7 0 3 6-4 5z" fill="#c9662b" stroke="#7a3410"/><path d="M-2-1l3 1" stroke="#e8a070"/>`,
prn=`<path d="M-7 4Q-9-6 0-7 8-6 6 2 4 6 0 5" fill="none" stroke="#e8774a" stroke-width="4.5" stroke-linecap="round"/><path d="M-5-4Q0-2 5 0M-2-6Q2-2 4 4" stroke="#b94a22" fill="none" stroke-width=".7"/><circle cx="-7" cy="2" r="1" fill="#222"/><path d="M-8 3l-4-3" stroke="#e8774a"/>`,
sl=`<g transform="translate(5 5) scale(.7)">${lf("#5f7a1c")}</g>`;
const M=[
`<circle r="7" fill="#d9381e"/><path d="M-4-6l4 2 4-2-2 3 2 2-4-1-4 1 2-2z" fill="#2f7d3a"/>`,
lf("#5f7a1c"),
`<ellipse rx="9" ry="4.5" fill="#3a6b2a"/><g fill="#7fb05a"><circle cx="-5" cy="-1" r="1.2"/><circle cy="1" r="1.2"/><circle cx="5" cy="-1" r="1.2"/></g>`,
chi("#c0271b"),
`<g fill="#4f8f2f"><circle cx="-4" cy="-2" r="4"/><circle cx="4" cy="-2" r="4"/><circle cy="3" r="4"/></g><path d="M0 3V9" stroke="#2f6a1f" stroke-width="1.5"/>`,
mnt,
`<circle r="6" fill="#9dbf4a"/><path d="M0-6Q-3 0 0 6M0-6Q3 0 0 6" stroke="#6f8f2a" fill="none" stroke-width=".8"/>`,
`<path d="M0-8Q8-2 6 4 4 8 0 8-4 8-6 4-8-2 0-8z" fill="#b0457a"/><path d="M0-8Q-3 0 0 8M0-8Q3 0 0 8" stroke="#e8a0c4" fill="none" stroke-width=".8"/>`,
`<path d="M-8-3L8 0-8 3z" fill="#e8811f"/><path d="M-8 0l-3-3M-8 0l-3 3" stroke="#3a8f2a" stroke-width="1.5"/>`,
`<path d="M-9 0Q0-6 9 0 0 6-9 0z" fill="#7a9a34"/><g fill="#b4d05a"><circle cx="-4" r="1.6"/><circle r="1.6"/><circle cx="4" r="1.6"/></g>`,
`<g fill="#efe3b5" stroke="#c9b87a" stroke-width=".6"><circle cx="-4" cy="-2" r="4"/><circle cx="4" cy="-2" r="4"/><circle cy="-5" r="4"/><circle cy="1" r="4"/></g><path d="M-3 6h6" stroke="#8fae4a" stroke-width="3"/>`,
`<rect x="-10" y="-1.5" width="20" height="3" rx="1.5" fill="#6f8f2a"/><path d="M-3-1.5v3M3-1.5v3" stroke="#4a6a1a" stroke-width=".8"/>`,
`<ellipse rx="8" ry="6" fill="#f0d11a"/><path d="M-8 0h-2M8 0h2" stroke="#d1b00f" stroke-width="2"/>`,
gin("#d1a15a"),gin("#e3d77a"),
`<ellipse cx="-2" cy="-1" rx="7" ry="5.5" fill="#b8561f" stroke="#7a3410"/><path d="M4 2L11 7" stroke="#f3e9d0" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="7" r="2" fill="#f3e9d0"/>`,
chk,prn,
`<path d="M-7-3L-2-6 6-4 7 2 1 6-6 4z" fill="#8b2f1a" stroke="#4d1408"/><path d="M-3-2l5 1" stroke="#f1d9c4" stroke-width="1.5"/>`,
`<g fill="#7a2a18"><circle cx="-4" cy="-3" r="2.2"/><circle cx="2" cy="-4" r="2.2"/><circle cx="5" cy="1" r="2.2"/><circle cx="-2" cy="2" r="2.2"/><circle cx="-6" cy="4" r="1.8"/><circle cx="3" cy="5" r="2"/></g>`,
chk+sl,prn+sl,
lf("#4a6b1f"),
`<circle r="7" fill="#6aa04a"/><circle r="4" fill="#d9ecb0"/><g fill="#8a7a2a"><circle cx="-1.5" cy="-1" r="1"/><circle cx="1.5" cy="1" r="1"/></g>`,
mnt,
`<path d="M0-8Q7-3 6 3 4 8 0 8-4 8-6 3-7-3 0-8z" fill="#f1e8cf" stroke="#c9b98a"/><path d="M0-8Q-2 0 0 8" stroke="#c9b98a" fill="none"/>`,
chi("#5a1a10"),
`<g fill="#e0a82e"><ellipse cx="-4" cy="-2" rx="3" ry="2.2"/><ellipse cx="3" cy="-3" rx="3" ry="2.2"/><ellipse cy="3" rx="3" ry="2.2"/><ellipse cx="6" cy="3" rx="3" ry="2.2"/></g>`,
`<circle r="7.5" fill="#6b4a2a"/><circle r="5.5" fill="#fffaf0"/><circle r="2" fill="#e8dfc8"/>`,
`<g fill="#f3e6c4" stroke="#b89a5a" stroke-width=".4"><ellipse cx="-4" cy="-3" rx="2" ry="1.2"/><ellipse cx="2" cy="-4" rx="2" ry="1.2"/><ellipse cx="5" cy="1" rx="2" ry="1.2"/><ellipse cx="-1" cy="1" rx="2" ry="1.2"/><ellipse cx="-5" cy="4" rx="2" ry="1.2"/><ellipse cx="2" cy="5" rx="2" ry="1.2"/></g>`,
`<g fill="#7a4a22" stroke="#4a2a10" stroke-width=".4"><ellipse cx="-4" cy="-2" rx="2.6" ry="1.6" transform="rotate(30)"/><ellipse cx="3" cy="-3" rx="2.6" ry="1.6" transform="rotate(-20)"/><ellipse cx="1" cy="3" rx="2.6" ry="1.6"/><ellipse cx="6" cy="2" rx="2.6" ry="1.6" transform="rotate(40)"/></g>`,
chi("#c43a1f"),
`<g fill="#d9a85a" stroke="#a97a35" stroke-width=".7"><circle cx="-3" cy="-2" r="4.5"/><circle cx="4" cy="2" r="4.5"/></g>`,
chi("#c0271b"),
`<path d="M0-8L2-2 8-3 3 1 5 7 0 3-5 7-3 1-8-3-2-2z" fill="#7a3a1a"/>`,
gin("#e8a30a")];
function art(p){
 const c=COL[p.id],m=M[p.id],r=k=>{const x=Math.sin(p.id*97+k*13.7)*1e4;return x-Math.floor(x)};
 const nm=p.nm.split(" (")[0],fs=nm.length>16?9:nm.length>11?10.5:12,pw=p.c=="podi"||p.c=="other";
 const at=(i,x,y,s)=>`<g transform="translate(${x} ${y}) rotate(${r(i+50)*360}) scale(${s})">${m}</g>`;
 let o=`<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg"><ellipse cx="66" cy="122" rx="50" ry="6" fill="#0003"/><g transform="translate(-14 4) scale(.9)">`;
 if(pw){
  o+=`<path d="M26 78h108a54 40 0 0 1-108 0z" fill="#b5651d"/><path d="M34 78Q80 22 126 78z" fill="${c}"/><path d="M26 78h108" stroke="#8a4a12" stroke-width="3"/>`;
  for(let i=0;i<5;i++)o+=at(i,54+r(i)*52,60+r(i+20)*12,.9);
 }else{
  o+=`<rect x="44" y="30" width="72" height="88" rx="14" fill="#7a3512"/>`;
  for(let i=0;i<10;i++)o+=at(i,52+r(i)*56,44+r(i+40)*64,1.05);
  o+=`<rect x="40" y="26" width="80" height="96" rx="16" fill="#fff2" stroke="#6a8a7a" stroke-width="2"/><rect x="47" y="36" width="5" height="72" rx="2.5" fill="#fff6"/><rect x="46" y="12" width="68" height="17" rx="4" fill="#FACC15" stroke="#a87f00" stroke-width="1.5"/>`;
 }
 const y=pw?100:86;
 o+=`<rect x="${pw?42:50}" y="${y-14}" width="${pw?76:60}" height="26" rx="4" fill="#FFF8E7" stroke="#a81717"/><text x="80" y="${y-1}" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-weight="700" font-size="${fs>11?fs-1.5:fs-1}" fill="#14532D">${nm.replace(/&/g,"&amp;")}</text><text x="80" y="${y+8}" text-anchor="middle" font-family="Inter,sans-serif" font-size="6.5" fill="#a81717">Revathi Homemade</text></g>`;
 o+=`<ellipse cx="130" cy="114" rx="20" ry="4" fill="#0003"/><g transform="translate(130 96) rotate(-15) scale(2.2)">${m}</g></svg>`;
 return o}
function artOld(p){
 const c=COL[p.id],r=k=>{const x=Math.sin(p.id*97+k*13.7)*1e4;return x-Math.floor(x)};
 const nm=p.nm.split(" (")[0],fs=nm.length>16?9:nm.length>11?10.5:12,pw=p.c=="podi"||p.c=="other";
 let o=`<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg"><ellipse cx="80" cy="122" rx="56" ry="6" fill="#0003"/>`;
 if(pw){
  o+=`<path d="M26 78h108a54 40 0 0 1-108 0z" fill="#b5651d"/><path d="M34 78Q80 22 126 78z" fill="${c}"/><path d="M26 78h108" stroke="#8a4a12" stroke-width="3"/>`;
  for(let i=0;i<16;i++)o+=`<circle cx="${48+r(i)*64}" cy="${56+r(i+30)*18}" r="1.5" fill="#fff6"/>`;
 }else{
  o+=`<rect x="44" y="30" width="72" height="88" rx="14" fill="${c}" opacity=".88"/>`;
  const nv=p.c=="nonveg";
  for(let i=0;i<18;i++)o+=`<ellipse cx="${52+r(i)*56}" cy="${40+r(i+40)*70}" rx="${nv?7:5+r(i+9)*4}" ry="${nv?5:4}" transform="rotate(${r(i+70)*180} 80 80)" fill="${c}" stroke="#0004"/>`;
  o+=`<rect x="40" y="26" width="80" height="96" rx="16" fill="#fff2" stroke="#6a8a7a" stroke-width="2"/><rect x="47" y="36" width="5" height="72" rx="2.5" fill="#fff6"/><rect x="46" y="12" width="68" height="17" rx="4" fill="#FACC15" stroke="#a87f00" stroke-width="1.5"/>`;
 }
 const y=pw?100:86;
 o+=`<rect x="${pw?42:50}" y="${y-14}" width="${pw?76:60}" height="26" rx="4" fill="#FFF8E7" stroke="#a81717" stroke-width="1"/><text x="80" y="${y-1}" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-weight="700" font-size="${fs>11?fs-1.5:fs-1}" fill="#14532D">${nm.replace(/&/g,"&amp;")}</text><text x="80" y="${y+8}" text-anchor="middle" font-family="Inter,sans-serif" font-size="6.5" fill="#a81717">Revathi Homemade</text></svg>`;
 return o}
const BEST=[];const badge=p=>`<span class="vd ${p.c=="nonveg"?"nv":"v"}" role="img" aria-label="${p.c=="nonveg"?"Non-vegetarian":"Vegetarian"}"><i></i></span>${BEST.includes(p.id)?'<span class="bs">Bestseller</span>':""}`;const POS={24:"center 20%"};const PH={14:"images/products/14-mamidi-allam.jpg",22:"images/products/22-karivepaku-podi.jpg",26:"images/products/26-nalla-karam.jpg",27:"images/products/27-kandhi-karam.jpg",29:"images/products/29-nuvvullo-podi.jpg",28:"images/products/28-kobbari-karam.jpg",23:"images/products/23-kakarakaya-podi.jpg",24:"images/products/24-pudhina-podi.jpg",25:"images/products/25-velluli-karam.jpg",30:"images/products/30-flaxseed-podi.jpg",31:"images/products/31-idly-karam.jpg",32:"images/products/32-putnala-podi.jpg",33:"images/products/33-chilli-powder.jpg",35:"images/products/35-turmeric.jpg",34:"images/products/34-masala-karam.jpg",36:"images/products/36-moringa-powder.jpg",37:"images/products/37-mango.jpg",16:"images/products/16-chicken-boneless.jpg",17:"images/products/17-prawns.jpg",18:"images/products/18-mutton-boneless.jpg",19:"images/products/19-mutton-keema.jpg",20:"images/products/20-gongura-chicken.jpg",21:"images/products/21-gongura-prawns.jpg",15:"images/products/15-chicken-with-bone.jpg",12:"images/products/12-lemon.jpg",13:"images/products/13-allam-ginger.jpg",5:"images/products/05-podhina.jpg",6:"images/products/06-amla.jpg",7:"images/products/07-onion.jpg",8:"images/products/08-carrot.jpg",9:"images/products/09-chikkudukaya.jpg",10:"images/products/10-cauliflower.jpg",11:"images/products/11-drumstick.jpg",4:"images/products/04-kothimeera.jpg",3:"images/products/03-pandumirchi.jpg",2:"images/products/02-kakarakaya.jpg",1:"images/products/01-gongura.jpg",0:"images/products/00-tomato.jpg"};
const ING=["Tomato", "Gongura leaves", "Bitter gourd", "Red chilli (pandumirchi)", "Coriander leaves", "Mint leaves", "Amla (Indian gooseberry)", "Onion", "Carrot", "Broad beans (chikkudukaya)", "Cauliflower", "Drumstick", "Lemon", "Ginger", "Mango ginger", "Chicken, with bone", "Boneless chicken", "Prawns", "Boneless mutton", "Mutton keema", "Gongura leaves and chicken", "Gongura leaves and prawns", "Curry leaves", "Bitter gourd", "Mint leaves", "Garlic", "", "Toor dal", "Dry coconut", "Sesame seeds", "Flaxseeds", "", "Roasted chana", "Red chilli", "", "Turmeric", "Moringa leaves", "Mango"];
function ingArt(p){const m=M[p.id],r=k=>{const x=Math.sin(p.id*53+k*9.1)*1e4;return x-Math.floor(x)};let o='<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">';for(let i=0;i<9;i++)o+=`<g opacity=".55" transform="translate(${15+r(i)*210} ${15+r(i+9)*130}) rotate(${r(i+20)*360}) scale(1.7)">${m}</g>`;return o+`<ellipse cx="120" cy="142" rx="50" ry="7" fill="#0002"/><g transform="translate(120 78) rotate(-12) scale(5.6)">${m}</g></svg>`}
function chips(){$("#chips").innerHTML=Object.entries(CAT).map(([k,v])=>`<button class="chip" data-c="${k}" aria-pressed="${k==cat}">${v} <small>(${k=="all"?P.length:P.filter(p=>p.c==k).length})</small></button>`).join("");const total=$("#productTotal");if(total)total.textContent=(cat=="all"?P.length:P.filter(p=>p.c==cat).length)+" products"}
function setCat(k){cat=k;chips();grid()}
function grid(){
 let l=P.filter(p=>(cat=="all"||p.c==cat)&&p.nm.toLowerCase().includes(q));
 if(sort=="a")l.sort((a,b)=>P0(a)-P0(b));if(sort=="b")l.sort((a,b)=>P0(b)-P0(a));if(sort=="n")l.sort((a,b)=>a.nm.localeCompare(b.nm));
 $("#notes").textContent=cat=="podi"?"All these podilu are available at ₹250 per 250g.":"";
 $("#grid").innerHTML=l.length?l.map(p=>{const sz=Object.keys(p.s),s=sel[p.id]&&p.s[sel[p.id]]?sel[p.id]:sz[0],u=qty[p.id]||1;
 return `<article class="card"><div class="thumb ${PH[p.id]?'ph1':'ig'}" role="img" aria-label="${p.nm}"${PH[p.id]?` style="background-image:url(${PH[p.id]})${POS[p.id]?`;background-position:${POS[p.id]}`:""}"`:""}>${PH[p.id]?"":ingArt(p)}${badge(p)}</div><div class="cb"><h3>${p.nm}</h3><p>${p.d}</p>${ING[p.id]?`<p class="ing"><b>Main ingredient:</b> ${ING[p.id]}</p>`:""}
 <div class="price-row"><div class="sz" role="group" aria-label="Size">${sz.map(z=>`<button data-sz="${p.id}|${z}" aria-pressed="${z==s}">${z}</button>`).join("")}</div><div class="pr">${R(p.s[s])}</div></div>
 <div class="row"><div class="q"><button data-q="${p.id}|-1" aria-label="Decrease quantity">−</button><span>${u}</span><button data-q="${p.id}|1" aria-label="Increase quantity">+</button></div><button class="btn bg" data-add="${p.id}">Add to Cart</button></div>
 </div></article>`}).join(""):`<div class="empty">No products match your search. Try a different name or category.</div>`}
function wl(t){return "https://wa.me/"+NUM[0]+"?text="+encodeURIComponent(t)}
function sub(){return cart.reduce((a,c)=>a+P[c.id].s[c.z]*c.u,0)}
function count(){$("#cc").textContent=cart.reduce((a,c)=>a+c.u,0);try{localStorage.setItem("rv_cart",JSON.stringify(cart))}catch(e){}}
function drawer(open){$("#dr").classList.toggle("on",open);$("#ov").classList.toggle("on",open)}
function render(step){
 count();const b=$("#cb"),t=$("#tt");
 if(!cart.length&&step!="ok"){b.innerHTML='<div class="empty">Your cart is empty. Add a pickle or podi to start your order.</div>';t.innerHTML='<button class="btn bg" style="width:100%" data-close>Continue shopping</button>';return}
 const s=sub();
 if(step=="co"){$("#dt").textContent="Checkout";
  b.innerHTML=`<form id="cof" novalidate style="display:grid;gap:8px"><label>Name<input id="cn" autocomplete="name"></label><label>Mobile number<input id="cm" inputmode="numeric" maxlength="10" autocomplete="tel-national"></label><label>Full delivery address<textarea id="ca" rows="2" autocomplete="street-address"></textarea></label><label>City<input id="cy"></label><label>State<select id="cs"><option value="">Select state</option><option>Andhra Pradesh</option><option>Telangana</option><option>Other</option></select></label><label>PIN code<input id="cp" inputmode="numeric" maxlength="6"></label><label>Order notes (optional)<textarea id="cnt" rows="2"></textarea></label><label>Send order to<select id="cw"><option value="0">WhatsApp ${NUM[0].slice(2)} (primary)</option><option value="1">WhatsApp ${NUM[1].slice(2)}</option></select></label><div class="err" id="ce" role="alert"></div></form>`;
  t.innerHTML=`<p><b>Subtotal</b><b>${R(s)}</b></p><small>Shipping is confirmed on WhatsApp. No Cash on Delivery.${UPI.id?" Pay securely with any UPI app.":""}</small><p><button class="btn bo" data-back style="color:var(--tx)">Back</button><button class="btn bg" data-send>${UPI.id?"Continue to pay "+R(s):"Place order on WhatsApp"}</button></p>`;return}

 if(step=="pay"){$("#dt").textContent="Pay with UPI";const up=`upi://pay?pa=${encodeURIComponent(UPI.id)}&pn=${encodeURIComponent(UPI.name)}&am=${pend.s}&cu=INR&tn=${encodeURIComponent("Order "+pend.ref)}`;
  b.innerHTML=`<div class="upi"><p class="am">Amount to pay <b>${R(pend.s)}</b></p><a class="btn bg" href="${up}">Pay with UPI app</a><div id="qr" aria-label="UPI QR code"></div><small>On a computer, scan this QR with GPay, PhonePe, Paytm or any UPI app.</small><p class="uid">UPI ID: <b>${UPI.id}</b> <button type="button" class="cpy" data-copy>Copy</button></p><p>Order ref: <b>${pend.ref}</b></p><label>UPI transaction ID (12 digits, optional)<input id="utr" inputmode="numeric" maxlength="12"></label><div class="err" id="ue" role="alert"></div><small>This is your items total. Shipping, if any, is confirmed on WhatsApp. After paying, press the button below to send us your order.</small></div>`;
  t.innerHTML=`<p><button class="btn bo" data-backco style="color:var(--tx)">Back</button><button class="btn bg" data-paid>I have paid, send order</button></p>`;
  setTimeout(()=>{try{new QRCode($("#qr"),{text:up,width:170,height:170})}catch(e){const q=$("#qr");if(q)q.remove()}},0);return}
 if(step=="ok"){b.innerHTML='<div class="ok"><b>Order message ready.</b><br>WhatsApp has opened with your order. Press send there to confirm it with us. If it did not open, tap below.</div>';t.innerHTML=`<a class="btn bg" target="_blank" rel="noopener" href="${render.u}">Open WhatsApp again</a>`;return}
 $("#dt").textContent="Your cart";
 b.innerHTML=cart.map((c,i)=>{const p=P[c.id];return `<div class="ci"><b>${p.nm}</b><b>${R(p.s[c.z]*c.u)}</b>
 <span><select data-cz="${i}" aria-label="Size for ${p.nm}">${Object.keys(p.s).map(z=>`<option ${z==c.z?"selected":""}>${z}</option>`).join("")}</select> <span class="q" style="display:inline-flex"><button data-cq="${i}|-1" aria-label="Decrease">−</button><span>${c.u}</span><button data-cq="${i}|1" aria-label="Increase">+</button></span></span><button class="rm" data-rm="${i}">Remove</button></div>`}).join("");
 t.innerHTML=`<p><b>Subtotal</b><b>${R(s)}</b></p><div class="fb"><i style="width:${Math.min(100,s/10)}%"></i></div><small>${s>1000?"You have unlocked free shipping in Andhra Pradesh and Telangana.":"Add more than "+R(1000-s)+" to unlock free shipping in AP & Telangana. Other charges are confirmed before payment."}</small><p><button class="btn bo" data-close style="color:var(--tx)">Continue shopping</button><button class="btn bg" data-co>Place order</button></p>`}
function validate(){
 const v=id=>$(id).value.trim(),e=[];
 if(v("#cn").length<2)e.push("Enter your name.");if(!/^[6-9]\d{9}$/.test(v("#cm")))e.push("Enter a valid 10-digit mobile number.");
 if(v("#ca").length<8)e.push("Enter your full delivery address.");if(!v("#cy"))e.push("Enter your city.");if(!v("#cs"))e.push("Select your state.");if(!/^\d{6}$/.test(v("#cp")))e.push("Enter a 6-digit PIN code.");
 $("#ce").textContent=e.join(" ");return !e.length}
function fv(){const v=id=>$(id).value.trim();return{cn:v("#cn"),cm:v("#cm"),ca:v("#ca"),cy:v("#cy"),cs:v("#cs"),cp:v("#cp"),cnt:v("#cnt"),cw:$("#cw").value}}
function mkMsg(f,s,pay){
 const free=s>1000&&f.cs!="Other";
 const lines=cart.map((c,i)=>{const p=P[c.id];return `${i+1}. ${p.nm} (${c.z}) x ${c.u} @ ${R(p.s[c.z])} = ${R(p.s[c.z]*c.u)}`}).join("\n");
 let m=`*New Order – Revathi Homemade Pickles*\n\n*Customer*\nName: ${f.cn}\nMobile: ${f.cm}\n\n*Items*\n${lines}\n\n*Total: ${R(s)}*\nShipping: ${free?"Free":"To be confirmed"}\n\n*Delivery address*\n${f.ca}, ${f.cy}, ${f.cs} - ${f.cp}\n${f.cnt?"\nNotes: "+f.cnt:""}`;
 if(pay)m+=`\n\n*Payment*\nMethod: UPI\nAmount paid: ${R(s)}\nOrder ref: ${pay.ref}\nUPI transaction ID: ${pay.utr||"not provided"}\nStatus: customer says paid, please verify in your UPI app`;
 return m}
function finish(m,cw){render.u="https://wa.me/"+NUM[cw]+"?text="+encodeURIComponent(m);window.open(render.u,"_blank","noopener");cart=[];pend=null;render("ok")}
function send(){
 if(!validate())return;const f=fv(),s=sub();
 try{localStorage.setItem("rv_u",JSON.stringify({cn:f.cn,cm:f.cm,ca:f.ca,cy:f.cy,cs:f.cs,cp:f.cp}))}catch(e){}
 if(UPI.id){pend={f,s,ref:"RV"+Date.now().toString(36).toUpperCase().slice(-6)};render("pay");return}
 finish(mkMsg(f,s),f.cw)}
function sendPaid(){
 const utr=($("#utr").value||"").trim();
 if(utr&&!/^\d{12}$/.test(utr)){$("#ue").textContent="A UPI transaction ID has 12 digits. Leave it blank if you are not sure.";return}
 pend.utr=utr;finish(mkMsg(pend.f,pend.s,pend),pend.f.cw)}
document.addEventListener("click",e=>{
 const t=e.target.closest("button,a");if(!t)return;const d=t.dataset;const hr=t.tagName=="A"&&t.getAttribute("href");if(hr&&hr.length>1&&hr[0]=="#"){const el=document.getElementById(hr.slice(1));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});try{history.replaceState(null,"",hr)}catch(x){}$("#lk").classList.remove("on")}}
 if(d.c)setCat(d.c);
 if(d.f){setCat(d.f);$("#lk").classList.remove("on")}
 if(d.sz){const[i,z]=d.sz.split("|");sel[i]=z;grid()}
 if(d.q){const[i,k]=d.q.split("|");qty[i]=Math.max(1,(qty[i]||1)+ +k);grid()}
 if(d.add!==undefined){const i=+d.add,z=sel[i]||Object.keys(P[i].s)[0],u=qty[i]||1,f=cart.find(c=>c.id==i&&c.z==z);f?f.u+=u:cart.push({id:i,z,u});qty[i]=1;grid();count();toast(P[i].nm+" added to cart")}
 if(d.wa!==undefined){const i=+d.wa,z=sel[i]||Object.keys(P[i].s)[0],u=qty[i]||1;window.open(wl(`Hello Revathi Homemade Pickles, I would like to order:\n${P[i].nm} (${z}) x ${u} = ${R(P[i].s[z]*u)}`),"_blank","noopener")}
 if(d.cq){const[i,k]=d.cq.split("|");cart[i].u=Math.max(1,cart[i].u+ +k);render()}
 if(d.rm!==undefined){cart.splice(+d.rm,1);render()}
 if(d.co!==undefined){render("co");try{const u=JSON.parse(localStorage.getItem("rv_u")||"{}");for(const k in u){const e=$("#"+k);if(e)e.value=u[k]}}catch(e){}}if(d.back!==undefined)render();if(d.send!==undefined)send();if(d.paid!==undefined)sendPaid();if(d.backco!==undefined){render("co");try{const u=pend?pend.f:{};for(const k in u){const e=$("#"+k);if(e)e.value=u[k]}}catch(e){}}if(d.copy!==undefined){try{navigator.clipboard.writeText(UPI.id);toast("UPI ID copied")}catch(e){toast("Copy not available. Please type the UPI ID.")}}
 if(d.close!==undefined)drawer(false);
 if(t.id=="ct"){render();drawer(true)}
 if(t.id=="cx")drawer(false);
 if(t.id=="sbt"){$("#sb").classList.toggle("on");$("#sq2").focus()}
 if(t.id=="hb"){const o=$("#lk").classList.toggle("on");t.setAttribute("aria-expanded",o)}
});
$("#ov").onclick=()=>drawer(false);
document.addEventListener("change",e=>{if(e.target.dataset.cz!==undefined){const c=cart[+e.target.dataset.cz],z=e.target.value,f=cart.find(x=>x!==c&&x.id==c.id&&x.z==z);if(f){f.u+=c.u;cart.splice(cart.indexOf(c),1)}else c.z=z;render()}if(e.target.dataset.ps!==undefined){sel[e.target.dataset.ps]=e.target.value;grid()}});
$("#so").onchange=e=>{sort=e.target.value;grid()};
const se=v=>{q=v.toLowerCase().trim();const shopSearch=$("#sq");if(shopSearch)shopSearch.value=v;const navSearch=$("#sq2");if(navSearch)navSearch.value=v;grid()};
const shopSearch=$("#sq");if(shopSearch)shopSearch.oninput=e=>se(e.target.value);$("#sq2").oninput=e=>{se(e.target.value);location.hash="shop"};
$("#hwa").href=wl("Hello Revathi Homemade Pickles, I would like to place an order.");
const REVIEW_KEY="rv_reviews";
const escReview=s=>String(s).replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
function getReviews(){try{const r=JSON.parse(localStorage.getItem(REVIEW_KEY)||"[]");return Array.isArray(r)?r:[]}catch(e){return []}}
function renderReviews(){const list=$("#reviewsList"),count=$("#reviewCount");if(!list)return;const reviews=getReviews();count.textContent=reviews.length?reviews.length+" review"+(reviews.length==1?"":"s"):"No reviews yet";if(!reviews.length){list.innerHTML="";return}list.innerHTML=reviews.map(r=>{const rating=Math.max(1,Math.min(5,+r.rating||5)),date=r.date?new Date(r.date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"";return `<article class="review-card"><div class="review-stars" aria-label="${rating} out of 5 stars">${"★".repeat(rating)}${"☆".repeat(5-rating)}</div><p>“${escReview(r.text)}”</p><em>${escReview(r.name)}${date?` · ${date}`:""}</em></article>`}).join("")}
$("#reviewForm").onsubmit=e=>{e.preventDefault();const name=$("#reviewName").value.trim(),text=$("#reviewText").value.trim(),rating=+$("#reviewRating").value,error=$("#reviewError");if(!name||!text||text.length<5){error.textContent="Please enter your name and a review of at least 5 characters.";return}const reviews=getReviews();reviews.unshift({name,text,rating,date:new Date().toISOString()});try{localStorage.setItem(REVIEW_KEY,JSON.stringify(reviews));e.target.reset();error.textContent="";renderReviews();toast("Thank you for your review")}catch(x){error.textContent="Could not save the review on this device."}};renderReviews();
$("#enq").onsubmit=e=>{e.preventDefault();const n=$("#en").value.trim(),p=$("#ep").value.trim(),m=$("#em").value.trim();
 if(!n||!/^[6-9]\d{9}$/.test(p)||!m){$("#ee").textContent="Enter your name, a valid 10-digit mobile number and a message.";return}
 $("#ee").textContent="";const wu=wl(`*${$("#et").value}*\nName: ${n}\nMobile: ${p}\n${m}`);window.open(wu,"_blank","noopener");$("#ee").innerHTML=`<a href="${wu}" target="_blank" rel="noopener">If WhatsApp did not open, tap here to send your message.</a>`};
(function(){const R=[{"t": "Finest ingredients", "a": "Every great pickle starts with the finest ingredients.", "s": "images/recipe/step-1.jpg"}, {"t": "Fresh ingredients, bold flavours", "a": "Fresh ingredients. Bold flavours.", "s": "images/recipe/step-2.jpg"}, {"t": "Ginger and garlic", "a": "Fresh ginger. Fragrant garlic.", "s": "images/recipe/step-3.jpg"}, {"t": "Slow-roasted spices", "a": "Slow-roasted to unlock every flavour.", "s": "images/recipe/step-4.jpg"}, {"t": "Ground the traditional way", "a": "Ground the traditional way.", "s": "images/recipe/step-5.jpg"}, {"t": "Perfectly seasoned chicken", "a": "Tender chicken, perfectly seasoned.", "s": "images/recipe/step-6.jpg"}, {"t": "Slow-cooked", "a": "Slow-cooked for that irresistible taste.", "s": "images/recipe/step-7.jpg"}];let i=0,pz=false,tm;
const S=$("#rcs"),L=$("#rcl"),N=$("#rcn");
S.innerHTML=R.map((r,k)=>`<img src="${r.s}" alt="${r.a}" ${k?'loading="lazy"':""}>`).join("");
L.innerHTML=R.map((r,k)=>`<li><button data-k="${k}">${r.t}</button></li>`).join("");
const im=S.querySelectorAll("img"),bt=L.querySelectorAll("button");
function sh(k){i=(k+R.length)%R.length;im.forEach((e,j)=>e.classList.toggle("on",j==i));bt.forEach((b,j)=>b.setAttribute("aria-current",j==i));N.textContent="Step "+(i+1)+" of "+R.length}
L.onclick=e=>{const b=e.target.closest("button");if(b){sh(+b.dataset.k);rs()}};
$("#rcp").onclick=()=>{sh(i-1);rs()};$("#rcx").onclick=()=>{sh(i+1);rs()};
const V=$(".rcv");let x0=null;V.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
V.addEventListener("touchend",e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){sh(i+(d<0?1:-1));rs()}x0=null});
function rs(){clearInterval(tm);if(!pz)tm=setInterval(()=>{if(!document.hidden)sh(i+1)},4000)}
$("#rcz").onclick=e=>{pz=!pz;e.currentTarget.textContent=pz?"\u25B6 Play":"\u275A\u275A Pause";e.currentTarget.setAttribute("aria-label",pz?"Play slideshow":"Pause slideshow");rs()};
sh(0);rs()})();
BEST.push(15,17,11);chips();grid();count();
