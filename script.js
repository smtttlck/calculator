let ekran = document.getElementById("ekran");
let sayilar = document.querySelectorAll(".sayi");
let semboller = document.querySelectorAll(".symbol");
var kontrol = false;

// sayiları ekrana yazma
sayilar.forEach(function(sayi) {
    sayi.addEventListener("click",function() { 
        ekran.textContent=='0' ? ekran.textContent = sayi.textContent : ekran.textContent += sayi.textContent;
        kontrol = false;
    });
});

// sembolleri ekrana yazma
semboller.forEach(function(sembol) {
    sembol.addEventListener("click",function() { 
        if(kontrol==false || sembol.id=='-') {
            if(ekran.textContent=='0') {
                if(sembol.id=='-')
                ekran.textContent = sembol.id;
            }
            else
            ekran.textContent += sembol.id;
        kontrol = true;
        }
    });
});

// ekranı resetleme
document.getElementById("reset").addEventListener("click", function() { ekran.textContent='0' });

// sayı silme
document.getElementById("delete").addEventListener("click", function() { 
    if(ekran.textContent!='0')
         ekran.textContent = ekran.textContent.slice(0, -1);
});
 
// hesaplama
document.querySelector(".equal").addEventListener("click", function() { ekran.textContent=eval(ekran.textContent) });

