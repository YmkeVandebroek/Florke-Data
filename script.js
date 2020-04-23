//GRAFIEK 2*/
let graf2Legende1 = document.getElementById("Graf2Legende_1");
let graf2Legende2 = document.getElementById("Graf2Legende_2");
let graf2Legende3 = document.getElementById("Graf2Legende_3");
let graf2Legende4 = document.getElementById("Graf2Legende_4");
let graf2Legende5 = document.getElementById("Graf2Legende_5");
let graf2Legende6 = document.getElementById("Graf2Legende_6");
let living = document.getElementById("Graf2Living");
let terras2 = document.getElementById("Graf2Terras_2");
let keuken = document.getElementById("Graf2Keuken");
let terras1 = document.getElementById("Graf2Terras_1");
let garage = document.getElementById("Graf2Garage");
let moemoe = document.getElementById("Graf2Moemoe");

graf2Legende1.addEventListener("mouseover", toonGrafiek);
graf2Legende2.addEventListener("mouseover", toonGrafiek);
graf2Legende3.addEventListener("mouseover", toonGrafiek);
graf2Legende4.addEventListener("mouseover", toonGrafiek);
graf2Legende5.addEventListener("mouseover", toonGrafiek);
graf2Legende6.addEventListener("mouseover", toonGrafiek);

function toonGrafiek(){
  if (this===graf2Legende1) {
    console.log("Living");
    living.style.opacity="1";
    graf2Legende1.style.opacity="1";
    terras2.style.opacity="0.2";
    graf2Legende2.style.opacity="0.2";
    keuken.style.opacity="0.2";
    graf2Legende3.style.opacity="0.2";
    terras1.style.opacity="0.2";
    graf2Legende4.style.opacity="0.2";
    garage.style.opacity="0.2";
    graf2Legende5.style.opacity="0.2";
    moemoe.style.opacity="0.2";
    graf2Legende6.style.opacity="0.2";
  } else if (this===graf2Legende2) {
    console.log("Terras2");
    living.style.opacity="0.2";
    graf2Legende1.style.opacity="0.2";
    terras2.style.opacity="1";
    graf2Legende2.style.opacity="1";
    keuken.style.opacity="0.2";
    graf2Legende3.style.opacity="0.2";
    terras1.style.opacity="0.2";
    graf2Legende4.style.opacity="0.2";
    garage.style.opacity="0.2";
    graf2Legende5.style.opacity="0.2";
    moemoe.style.opacity="0.2";
    graf2Legende6.style.opacity="0.2";
  } else if (this===graf2Legende3) {
    console.log("Keuken");
    living.style.opacity="0.2";
    graf2Legende1.style.opacity="0.2";
    terras2.style.opacity="0.2";
    graf2Legende2.style.opacity="0.2";
    keuken.style.opacity="1";
    graf2Legende3.style.opacity="1";
    terras1.style.opacity="0.2";
    graf2Legende4.style.opacity="0.2";
    garage.style.opacity="0.2";
    graf2Legende5.style.opacity="0.2";
    moemoe.style.opacity="0.2";
    graf2Legende6.style.opacity="0.2";
  } else if (this===graf2Legende4) {
    console.log("Keuken");
    living.style.opacity="0.2";
    graf2Legende1.style.opacity="0.2";
    terras2.style.opacity="0.2";
    graf2Legende2.style.opacity="0.2";
    keuken.style.opacity="0.2";
    graf2Legende3.style.opacity="0.2";
    terras1.style.opacity="1";
    graf2Legende4.style.opacity="1";
    garage.style.opacity="0.2";
    graf2Legende5.style.opacity="0.2";
    moemoe.style.opacity="0.2";
    graf2Legende6.style.opacity="0.2";
  } else if (this===graf2Legende5) {
    console.log("Keuken");
    living.style.opacity="0.2";
    graf2Legende1.style.opacity="0.2";
    terras2.style.opacity="0.2";
    graf2Legende2.style.opacity="0.2";
    keuken.style.opacity="0.2";
    graf2Legende3.style.opacity="0.2";
    terras1.style.opacity="0.2";
    graf2Legende4.style.opacity="0.2";
    garage.style.opacity="1";
    graf2Legende5.style.opacity="1";
    moemoe.style.opacity="0.2";
    graf2Legende6.style.opacity="0.2";
  } else if (this===graf2Legende6) {
    console.log("Keuken");
    living.style.opacity="0.2";
    graf2Legende1.style.opacity="0.2";
    terras2.style.opacity="0.2";
    graf2Legende2.style.opacity="0.2";
    keuken.style.opacity="0.2";
    graf2Legende3.style.opacity="0.2";
    terras1.style.opacity="0.2";
    graf2Legende4.style.opacity="0.2";
    garage.style.opacity="0.2";
    graf2Legende5.style.opacity="0.2";
    moemoe.style.opacity="1";
    graf2Legende6.style.opacity="1";
  }
}

/*GRAFIEK 3*/
let graf3Legende1 = document.getElementById("Graf3Legende_1");
let graf3Legende2 = document.getElementById("Graf3Legende_2");
let graf3Legende3 = document.getElementById("Graf3Legende_3");
let graf3Legende4 = document.getElementById("Graf3Legende_4");
let graf3Legende5 = document.getElementById("Graf3Legende_5");
let graf3Legende6 = document.getElementById("Graf3Legende_6");
let externGeluid = document.getElementById("Extern_geluid");
let internGeluid = document.getElementById("Intern_geluid");
let actiesGezin = document.getElementById("Acties_gezin");
let begroeten = document.getElementById("Begroeten");
let spelen = document.getElementById("Spelen");
let aandacht = document.getElementById("Aandacht");

graf3Legende1.addEventListener("mouseover", toonGrafiek3);
graf3Legende2.addEventListener("mouseover", toonGrafiek3);
graf3Legende3.addEventListener("mouseover", toonGrafiek3);
graf3Legende4.addEventListener("mouseover", toonGrafiek3);
graf3Legende5.addEventListener("mouseover", toonGrafiek3);
graf3Legende6.addEventListener("mouseover", toonGrafiek3);
externGeluid.addEventListener("mouseover", toonGrafiek3);
internGeluid.addEventListener("mouseover", toonGrafiek3);
actiesGezin.addEventListener("mouseover", toonGrafiek3);
begroeten.addEventListener("mouseover", toonGrafiek3);
spelen.addEventListener("mouseover", toonGrafiek3);
aandacht.addEventListener("mouseover", toonGrafiek3);

function toonGrafiek3(){
  if (this===graf3Legende1) {
    console.log("Extern geluid");
    externGeluid.style.opacity="1";
    graf3Legende1.style.opacity="1";
    internGeluid.style.opacity="0.2";
    graf3Legende2.style.opacity="0.2";
    actiesGezin.style.opacity="0.2";
    graf3Legende3.style.opacity="0.2";
    begroeten.style.opacity="0.2";
    graf3Legende4.style.opacity="0.2";
    spelen.style.opacity="0.2";
    graf3Legende5.style.opacity="0.2";
    aandacht.style.opacity="0.2";
    graf3Legende6.style.opacity="0.2";
  } else if (this===graf3Legende2) {
    console.log("Intern geluid");
    externGeluid.style.opacity="0.2";
    graf3Legende1.style.opacity="0.2";
    internGeluid.style.opacity="1";
    graf3Legende2.style.opacity="1";
    actiesGezin.style.opacity="0.2";
    graf3Legende3.style.opacity="0.2";
    begroeten.style.opacity="0.2";
    graf3Legende4.style.opacity="0.2";
    spelen.style.opacity="0.2";
    graf3Legende5.style.opacity="0.2";
    aandacht.style.opacity="0.2";
    graf3Legende6.style.opacity="0.2";
  } else if (this===graf3Legende3) {
    console.log("Acties gezin");
    externGeluid.style.opacity="0.2";
    graf3Legende1.style.opacity="0.2";
    internGeluid.style.opacity="0.2";
    graf3Legende2.style.opacity="0.2";
    actiesGezin.style.opacity="1";
    graf3Legende3.style.opacity="1";
    begroeten.style.opacity="0.2";
    graf3Legende4.style.opacity="0.2";
    spelen.style.opacity="0.2";
    graf3Legende5.style.opacity="0.2";
    aandacht.style.opacity="0.2";
    graf3Legende6.style.opacity="0.2";
  } else if (this===graf3Legende4) {
    console.log("Begroeten");
    externGeluid.style.opacity="0.2";
    graf3Legende1.style.opacity="0.2";
    internGeluid.style.opacity="0.2";
    graf3Legende2.style.opacity="0.2";
    actiesGezin.style.opacity="0.2";
    graf3Legende3.style.opacity="0.2";
    begroeten.style.opacity="1";
    graf3Legende4.style.opacity="1";
    spelen.style.opacity="0.2";
    graf3Legende5.style.opacity="0.2";
    aandacht.style.opacity="0.2";
    graf3Legende6.style.opacity="0.2";
  } else if (this===graf3Legende5) {
    console.log("Spelen");
    externGeluid.style.opacity="0.2";
    graf3Legende1.style.opacity="0.2";
    internGeluid.style.opacity="0.2";
    graf3Legende2.style.opacity="0.2";
    actiesGezin.style.opacity="0.2";
    graf3Legende3.style.opacity="0.2";
    begroeten.style.opacity="0.2";
    graf3Legende4.style.opacity="0.2";
    spelen.style.opacity="1";
    graf3Legende5.style.opacity="1";
    aandacht.style.opacity="0.2";
    graf3Legende6.style.opacity="0.2";
  } else if (this===graf3Legende6) {
    console.log("Aandacht");
    externGeluid.style.opacity="0.2";
    graf3Legende1.style.opacity="0.2";
    internGeluid.style.opacity="0.2";
    graf3Legende2.style.opacity="0.2";
    actiesGezin.style.opacity="0.2";
    graf3Legende3.style.opacity="0.2";
    begroeten.style.opacity="0.2";
    graf3Legende4.style.opacity="0.2";
    spelen.style.opacity="0.2";
    graf3Legende5.style.opacity="0.2";
    aandacht.style.opacity="1";
    graf3Legende6.style.opacity="1";
  }
}

/*GRAFIEK 4*/
let graf4Legende1 = document.getElementById("Graf4Legende_1");
let graf4Legende2 = document.getElementById("Graf4Legende_2");
let graf4Legende3 = document.getElementById("Graf4Legende_3");
let graf4Legende4 = document.getElementById("Graf4Legende_4");
let graf4Legende5 = document.getElementById("Graf4Legende_5");
let blaffen1 = document.getElementById("Blaffen1");
let blaffen2 = document.getElementById("Blaffen2");
let blaffen3 = document.getElementById("Blaffen3");
let blaffen4 = document.getElementById("Blaffen4");
let blaffen5 = document.getElementById("Blaffen5");

graf4Legende1.addEventListener("mouseover", toonGrafiek4);
graf4Legende2.addEventListener("mouseover", toonGrafiek4);
graf4Legende3.addEventListener("mouseover", toonGrafiek4);
graf4Legende4.addEventListener("mouseover", toonGrafiek4);
graf4Legende5.addEventListener("mouseover", toonGrafiek4);
blaffen1.addEventListener("mouseover", toonGrafiek4);
blaffen2.addEventListener("mouseover", toonGrafiek4);
blaffen3.addEventListener("mouseover", toonGrafiek4);
blaffen4.addEventListener("mouseover", toonGrafiek4);
blaffen5.addEventListener("mouseover", toonGrafiek4);

function toonGrafiek4(){
  if (this===graf4Legende1) {
    console.log("1 blaf");
    blaffen1.style.opacity="1";
    graf4Legende1.style.opacity="1";
    blaffen2.style.opacity="0.2";
    graf4Legende2.style.opacity="0.2";
    blaffen3.style.opacity="0.2";
    graf4Legende3.style.opacity="0.2";
    blaffen4.style.opacity="0.2";
    graf4Legende4.style.opacity="0.2";
    blaffen5.style.opacity="0.2";
    graf4Legende5.style.opacity="0.2";
  } else if (this===graf4Legende2) {
    console.log("meer blaf");
    blaffen1.style.opacity="0.2";
    graf4Legende1.style.opacity="0.2";
    blaffen2.style.opacity="1";
    graf4Legende2.style.opacity="1";
    blaffen3.style.opacity="0.2";
    graf4Legende3.style.opacity="0.2";
    blaffen4.style.opacity="0.2";
    graf4Legende4.style.opacity="0.2";
    blaffen5.style.opacity="0.2";
    graf4Legende5.style.opacity="0.2";
  } else if (this===graf4Legende3) {
    console.log("meer blaf");
    blaffen1.style.opacity="0.2";
    graf4Legende1.style.opacity="0.2";
    blaffen2.style.opacity="0.2";
    graf4Legende2.style.opacity="0.2";
    blaffen3.style.opacity="1";
    graf4Legende3.style.opacity="1";
    blaffen4.style.opacity="0.2";
    graf4Legende4.style.opacity="0.2";
    blaffen5.style.opacity="0.2";
    graf4Legende5.style.opacity="0.2";
  } else if (this===graf4Legende4) {
    console.log("meer blaf");
    blaffen1.style.opacity="0.2";
    graf4Legende1.style.opacity="0.2";
    blaffen2.style.opacity="0.2";
    graf4Legende2.style.opacity="0.2";
    blaffen3.style.opacity="0.2";
    graf4Legende3.style.opacity="0.2";
    blaffen4.style.opacity="1";
    graf4Legende4.style.opacity="1";
    blaffen5.style.opacity="0.2";
    graf4Legende5.style.opacity="0.2";
  } else if (this===graf4Legende5) {
    console.log("meer blaf");
    blaffen1.style.opacity="0.2";
    graf4Legende1.style.opacity="0.2";
    blaffen2.style.opacity="0.2";
    graf4Legende2.style.opacity="0.2";
    blaffen3.style.opacity="0.2";
    graf4Legende3.style.opacity="0.2";
    blaffen4.style.opacity="0.2";
    graf4Legende4.style.opacity="0.2";
    blaffen5.style.opacity="1";
    graf4Legende5.style.opacity="1";
  }
}

/*GRAFIEK 5*/
let graf5Legende1 = document.getElementById("Graf5Legende_1");
let graf5Legende2 = document.getElementById("Graf5Legende_2");
let graf5Legende3 = document.getElementById("Graf5Legende_3");
let v = document.getElementById("V");
let m = document.getElementById("M");
let a = document.getElementById("A");

graf5Legende1.addEventListener("mouseover", toonGrafiek5);
graf5Legende2.addEventListener("mouseover", toonGrafiek5);
graf5Legende3.addEventListener("mouseover", toonGrafiek5);

function toonGrafiek5(){
  if (this===graf5Legende1) {
    console.log("V");
    v.style.opacity="1";
    graf5Legende1.style.opacity="1";
    m.style.opacity="0.2";
    graf5Legende2.style.opacity="0.2";
    a.style.opacity="0.2";
    graf5Legende3.style.opacity="0.2";
  } else if (this===graf5Legende2) {
    console.log("M");
    v.style.opacity="0.2";
    graf5Legende1.style.opacity="0.2";
    m.style.opacity="1";
    graf5Legende2.style.opacity="1";
    a.style.opacity="0.2";
    graf5Legende3.style.opacity="0.2";
  } else if (this===graf5Legende3) {
    console.log("A");
    v.style.opacity="0.2";
    graf5Legende1.style.opacity="0.2";
    m.style.opacity="0.2";
    graf5Legende2.style.opacity="0.2";
    a.style.opacity="1";
    graf5Legende3.style.opacity="1";
  }
}

/*GRAFIEK 6*/
let graf6Legende1 = document.getElementById("Graf6Legende_1");
let graf6Legende2 = document.getElementById("Graf6Legende_2");
let graf6Legende3 = document.getElementById("Graf6Legende_3");
let v2 = document.getElementById("V2");
let m2 = document.getElementById("M2");
let a2 = document.getElementById("A2");

graf6Legende1.addEventListener("mouseover", toonGrafiek6);
graf6Legende2.addEventListener("mouseover", toonGrafiek6);
graf6Legende3.addEventListener("mouseover", toonGrafiek6);

function toonGrafiek6(){
  if (this===graf6Legende1) {
    console.log("V");
    v2.style.opacity="1";
    graf6Legende1.style.opacity="1";
    m2.style.opacity="0.2";
    graf6Legende2.style.opacity="0.2";
    a2.style.opacity="0.2";
    graf6Legende3.style.opacity="0.2";
  } else if (this===graf6Legende2) {
    console.log("M");
    v2.style.opacity="0.2";
    graf6Legende1.style.opacity="0.2";
    m2.style.opacity="1";
    graf6Legende2.style.opacity="1";
    a2.style.opacity="0.2";
    graf6Legende3.style.opacity="0.2";
  } else if (this===graf6Legende3) {
    console.log("A");
    v2.style.opacity="0.2";
    graf6Legende1.style.opacity="0.2";
    m2.style.opacity="0.2";
    graf6Legende2.style.opacity="0.2";
    a2.style.opacity="1";
    graf6Legende3.style.opacity="1";
  }
}
