//eleman ekleme
const veriEkle = document.querySelector(".ekle");
const liste = document.querySelector(".todos");
const arama = document.querySelector(".ara input"); /* class'ı ara olanın altındaki input*/ 

veriEkle.addEventListener("submit", (e) => {

  e.preventDefault(); //submit oldugunda sayfayı yenileme
  const deger = veriEkle.deger.value.trim(); //trim --> girilen degerin başında ve sonunda boşuk varsa bana boşlukları gösterme

  if(deger.length > 0){ //boşluk veya boş veri eklememek için
    veriyiEkleFonk(deger);
    veriEkle.reset(); //veri submit olduktan sonra form'un içerisindeki yazıyı sil
  }
    
}
);

//callback fonk. ile girilen veriyi listeye ekleme.
const veriyiEkleFonk = deger => {
    let html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${deger}</span>
            <i class="far fa-trash-alt sil"></i>
        </li>`;
    liste.innerHTML += html
}

 
//listeden eleman kaldırma
liste.addEventListener('click',e=>{
  //e'nin hedef oluduğu yerde class listesinde sil varsa girer
  if (e.target.classList.contains("sil")) {
    e.target.parentElement.remove();
  }
})

//liste elemanları içinde arama yapma (search)

arama.addEventListener("keyup", () => {//klavyeden elimizi kaldırdığımız an tetiklenir (keyup)
  const deger = arama.value.trim().toLowerCase(); //inputun degerini al
  listeFilter(deger);

})

const listeFilter = deger => {
  //   //liste.childern HTMLCollection oldugu için array'a dönüştürdük (HTMLCollection'u foreach ile dönemezsin.)
  //   //arama kısmında girilen deger li etiketlerinden birinin içeriğinde yoksa foreach ile dönerek hepsinin class'ına filters ekle
    Array.from(liste.children)
      .filter((x) => !x.textContent.includes(deger))
      .forEach((x) => x.classList.add("filters"));

    //gözükenlerin kalması için add yerine remove
        Array.from(liste.children)
          .filter((x) => x.textContent.toLowerCase().includes(deger))
          .forEach((x) => x.classList.remove("filters"));
}





