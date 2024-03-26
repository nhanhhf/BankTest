const configFilePath = "js/config.json"

let configRespone = await fetch(configFilePath)
let configs = await configRespone.json();  

const moduleList = configs.moduleList;
const subPart = configs.subPart;
const moduleVersions = configs.moduleVersions;
var moduleSelectDiv = document.getElementById('moduleSelectDiv');
for(let i = 0; i < moduleList.length; i++){
    let module = moduleList[i];
    var moduleDescript = document.createElement('\h3');
    moduleDescript.textContent = `Module ${module}`
    moduleSelectDiv.append(moduleDescript);
    moduleSelectDiv.append(document.createElement('\p'))
    for(let k = 0; k < moduleVersions[i]; k++){
        var versionDescript = document.createElement('span').innerText = `Version ${k+1}:  `
        moduleSelectDiv.append(versionDescript)
        for(let j = 1; j <= subPart[i][k]; j++){
            var fullBankButton = document.createElement('button');  
            fullBankButton.innerText=`Bank Part ${j}`;
            fullBankButton.onclick = function(){navigateTestPage(module, k, j)}
            moduleSelectDiv.append(fullBankButton);
            moduleSelectDiv.append(document.createTextNode( '\u00A0'));
        }
    
        var normalTestButton = document.createElement('button');  
        normalTestButton.innerText='Làm bài Test';
        normalTestButton.onclick = function(){navigateTestPage(module, k, 0)}
        moduleSelectDiv.append(normalTestButton);
        moduleSelectDiv.append(document.createElement('\p'))
    }
}

function navigateTestPage(module, moduleVersion, subPartChosen){
    location.href = `./page/maintest.html?module=${module}&mVer=${moduleVersion}&subPart=${subPartChosen}`;   
}