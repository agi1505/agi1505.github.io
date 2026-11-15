// Saf hesaplama işlevleri ayrıca gerçek JavaScript testlerinde kullanılır.
function temaListesi(text) {
  return Array.from(new Set(text.split(',').map(function (x) {
    return x.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('tr-TR').normalize('NFC');
  }).filter(Boolean)));
}
function oranlar(evren, orneklem) {
  const valid = function (x) { return Number.isSafeInteger(x) && x >= 0 && x <= 1000000; };
  if (evren.length !== 3 || orneklem.length !== 3 || !evren.every(valid) || !orneklem.every(valid)) throw new Error('Her alana 0–1.000.000 arasında bir tam sayı yazın.');
  const e = evren.reduce(function(a,b){return a+b;},0);
  const o = orneklem.reduce(function(a,b){return a+b;},0);
  if (!e || !o) throw new Error('Evren ve örneklem toplamları sıfırdan büyük olmalıdır.');
  if (orneklem.some(function(x,i){return x > evren[i];})) throw new Error('Tekrarsız seçimde örneklem grup sayısı evren grup sayısını aşamaz.');
  return evren.map(function(x,i){return {evren:100*x/e,orneklem:100*orneklem[i]/o,fark:100*orneklem[i]/o-100*x/e};});
}
if (typeof document !== 'undefined') (function () {
  'use strict';
  const app = document.body.dataset.app;
  const get = function(id){return document.getElementById(id);};
  const status = function(text){get('durum').textContent=text;};
  if (app === 'tema') {
    let records=[];
    function render(){
      const counts = new Map();
      get('kayitlar').replaceChildren();
      records.forEach(function(r){
        r.themes.forEach(function(t){counts.set(t,(counts.get(t)||0)+1);});
        const li=document.createElement('li'); li.textContent=r.text+' — '+r.themes.join(', '); get('kayitlar').append(li);
      });
      get('sayilar').replaceChildren();
      counts.forEach(function(n,t){const li=document.createElement('li');li.textContent=t+': '+n;get('sayilar').append(li);});
      if(!counts.size){const li=document.createElement('li');li.textContent='Henüz tema yok.';get('sayilar').append(li);}
    }
    get('tema-form').addEventListener('submit',function(e){
      e.preventDefault();
      const text=get('alinti').value.trim();const themes=temaListesi(get('temalar').value);
      const textError=!text||text.length>1000;
      const themesError=!themes.length||get('temalar').value.length>300;
      const error=textError||themesError;
      get('alinti').setAttribute('aria-invalid',String(textError));
      get('temalar').setAttribute('aria-invalid',String(themesError));
      get('tema-hata').textContent=error?'1–1000 karakterlik bir alıntı ve en az bir tema girin (tema alanı en fazla 300 karakter).':'';
      if(error){status('Kayıt eklenmedi.');get(textError?'alinti':'temalar').focus();return;}
      records.push({text:text,themes:themes});render();status(records.length+' kurgusal alıntı kaydedildi; yalnızca bu açık sayfada tutuluyor.');get('tema-form').reset();
    });
    get('ornek').addEventListener('click',function(){get('alinti').value='Kurgusal örnek: Ders materyallerine ulaşmakta zorlanıyorum.';get('temalar').value='Eğitim, EĞİTİM, Eşitsizlik';status('Örnek alanlara yüklendi. Eklemek için Alıntıyı ekle düğmesini kullanın.');});
    get('sifirla').addEventListener('click',function(){records=[];get('tema-form').reset();get('tema-hata').textContent='';['alinti','temalar'].forEach(function(id){get(id).removeAttribute('aria-invalid');});render();status('Tüm alıntılar ve tema sayıları silindi.');});render();
  }
  if(app==='anket'){
    const questions=[
      ['Siz de mahallemizin harika ulaşım hizmetinden memnun musunuz?','yon','“Harika” sözcüğü ve “siz de” ifadesi olumlu yanıtı teşvik eder. Daha nötr örnek: Mahallenizdeki ulaşım hizmetinden ne ölçüde memnunsunuz?'],
      ['Kampüsteki kütüphane ve yemekhane hizmetlerinden memnun musunuz?','cift','İki ayrı hizmete tek yanıt istenir. Kütüphane ve yemekhane için ayrı sorular sorun.'],
      ['Sık sık toplu taşıma kullanır mısınız?','zaman','“Sık sık” kişiden kişiye değişir ve zaman aralığı belirtilmez. Daha açık örnek: Son 7 günde kaç gün toplu taşıma kullandınız?'],
      ['Son 7 günde kaç gün toplu taşıma kullandınız?','uygun','Zaman aralığı ve sayılacak davranış açık. Bu üç sorun görünmüyor; yine de hedef kitle, yanıt seçenekleri ve pilot uygulama incelenmelidir.']
    ];let index=0;
    function render(){get('soru').textContent=questions[index][0];get('ilerleme').textContent='Kurgusal örnek '+(index+1)+' / '+questions.length;get('anket-form').reset();status('');}
    get('anket-form').addEventListener('submit',function(e){e.preventDefault();status((get('yanit').value===questions[index][1]?'Doğru. ':'Bu örnekte beklenen yanıt farklı. ')+questions[index][2]);});
    get('sonraki').addEventListener('click',function(){index=(index+1)%questions.length;render();});
    get('ornek').addEventListener('click',function(){index=0;render();status('İlk kurgusal örnek yüklendi.');});
    get('sifirla').addEventListener('click',function(){index=0;render();status('Seçim ve geri bildirim sıfırlandı.');});render();
  }
  if(app==='orneklem'){
    function numbers(prefix){return [0,1,2].map(function(i){const v=get(prefix+i).value.trim();return v===''?NaN:Number(v);});}
    get('oran-form').addEventListener('submit',function(e){
      e.preventDefault();get('sonuclar').replaceChildren();
      try{
        const rows=oranlar(numbers('e'),numbers('o'));
        const table=document.createElement('table');const caption=document.createElement('caption');caption.textContent='Oran karşılaştırması';table.append(caption);
        const head=document.createElement('thead');const tr=document.createElement('tr');
        ['Grup','Evren (%)','Örneklem (%)','Fark (yüzde puan)'].forEach(function(t){const th=document.createElement('th');th.scope='col';th.textContent=t;tr.append(th);});head.append(tr);table.append(head);
        const body=document.createElement('tbody');
        rows.forEach(function(r,i){const row=document.createElement('tr');const th=document.createElement('th');th.scope='row';th.textContent='Grup '+['A','B','C'][i];row.append(th);[r.evren,r.orneklem,r.fark].forEach(function(n){const td=document.createElement('td');td.textContent=n.toLocaleString('tr-TR',{minimumFractionDigits:1,maximumFractionDigits:1});row.append(td);});body.append(row);});table.append(body);
        const wrap=document.createElement('div');wrap.className='table-wrap';wrap.append(table);get('sonuclar').append(wrap);status('Hesaplandı. Fark = örneklem oranı − evren oranı.');
      }catch(error){status(error.message);}
    });
    get('ornek').addEventListener('click',function(){[500,300,200].forEach(function(n,i){get('e'+i).value=n;});[30,50,20].forEach(function(n,i){get('o'+i).value=n;});get('sonuclar').replaceChildren();status('Kurgusal örnek yüklendi. Oranları karşılaştır düğmesini kullanın.');});
    get('sifirla').addEventListener('click',function(){['e','o'].forEach(function(p){[0,1,2].forEach(function(i){get(p+i).value='';});});get('sonuclar').replaceChildren();status('Tüm sayılar ve sonuçlar silindi.');});
  }
})();
