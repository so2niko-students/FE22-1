const link = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';

fetch(link).then(r => r.json()).then(d => {
    console.log(d);
});

// const r = await fetch(link);
// const d = await r.json();
// console.log(d);

function myF(url){
    const f =  new Promise((res, rej) => {
        const aj = new XMLHttpRequest();
        aj.onload = () => {
            res(aj.responseText);
        }
    
        aj.open('GET', url);
    
        aj.send();
    });    

    return f;
}

myF(link).then(d => console.log(JSON.parse(d)));

// $("label[for*='_logxstar_']").parent().find('.gui-field-content').remove();

// const billPC = $('#billing_postcode').val().replace(' ','').toUpperCase();
// const billPCInput =  $('#billing_postcode');
// const billPCValue = billPCInput.val();
// const billPCFormated = billPCValue.replace(' ', '').toUpperCase();
