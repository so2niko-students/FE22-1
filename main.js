function ajax(url, callback){
    const aj = new XMLHttpRequest();
    aj.onload = () => {
        callback(aj.responseText);
    }

    aj.open('GET', url);

    aj.send();
}

const CSV_LINK = 'https://so2niko-students.github.io/FE22-1/data/POPPROJ_18102022173124332.csv';

ajax(CSV_LINK, parser2);

function parser1(d){
    const fStart = Date.now();
    // console.log(d);
    const ticksReplacer = '"';
    const rowSeparator = '\n';
    const comaSeparator = ',';
    const dWithoutTicks = d.replaceAll(ticksReplacer, '');
    const data = dWithoutTicks.split(rowSeparator).map(r => r.split(comaSeparator));
    const names = data.shift();
    const formatData = data.map(el => {
        return names.reduce((acc, name, i) => {
            acc[name] = el[i];
            return acc;
        }, {});
    });

    const fEnd = Date.now();

    const time = fEnd - fStart;
    console.log(`TIME: ${ time }ms`);
    console.log(formatData);
    saveTime('method1', time);
}

function parser2(d){
    const fStart = Date.now();
    const ticksReplacer = '"';
    const rowSeparator = '\n';
    const comaSeparator = ',';
    const dWithoutTicks = d.replaceAll(ticksReplacer, '');
    
    const data = dWithoutTicks.split(rowSeparator);

    const names = data.shift().split(comaSeparator);

    data.map((r) => {
        const row = r.split(comaSeparator);
        return names.reduce((acc, name, i) => {
            acc[name] = row[i];
            return acc;
        }, {});
    });

    const fEnd = Date.now();

    const time = fEnd - fStart;
    console.log(`TIME: ${ time }ms`);
    console.log(data);
    saveTime('method2', time);
}

function saveTime(name, time){
    const strData = localStorage.getItem(name) ?? '[]';
    const data = JSON.parse(strData);
    data.push(time);
    const strDataPush = JSON.stringify(data);
    localStorage.setItem(name, strDataPush);
    console.log(name, data);
}