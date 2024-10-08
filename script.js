const result = document.getElementById("result");
const path = document.getElementById("path");
const inputArray = document.getElementById("input-array");
const sortBtn = document.getElementById("sort");

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            path.innerHTML += `<p class="sort-element"><b>${i}. Sortuje ${(i+1)} element czyli liczbe ${inputArr[i]}.</b></p>`;
            path.innerHTML += showSortElement(inputArr,i);
            // pierwszy element nieposortowanej tablicy
            let current = parseInt(inputArr[i]);
            // ostatni element posortowanej czesci tablicy
            let j = i-1; 
            while ((j > -1) && (current < parseInt(inputArr[j]))) {
                path.innerHTML += `<p>Weszlo do while bo uznalo ze ${current} < ${inputArr[j]} i znalazlo w posortowanej czesci wiekszy element=${inputArr[j]}. </p>`;
                path.innerHTML += `<p>Przesuwa w prawo liczbe ${inputArr[j]}. </p>`;
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
            path.innerHTML += `<p class="conclusion">Nasza tablica obecnie to :[${inputArr}]</p>`;
        }
    return inputArr;
}

const showSortElement = (inputArray,elementNumber) => {
    let elementInArray = '<p>[ ';

    for (let i=0;i<elementNumber;i++){
        elementInArray += `${inputArray[i]} `;
    }

    elementInArray += `<b>${inputArray[elementNumber]}</b> `;

    for (let i=elementNumber+1;i<inputArray.length;i++){
        elementInArray += `${inputArray[i]} `;
    }
    elementInArray += `]</p>`;
return elementInArray;
}

sortBtn.addEventListener("click",() => {
    path.innerHTML = "";
    result.innerHTML = "";
    const arr = inputArray.value.split(',');
    const valid = arr.every(element => {
        // sprawdzenie czy to liczba calkowita
        return !isNaN(element) && Number.isInteger(parseFloat(element));
    });

if (!valid) {
    result.classList.remove("hidden");
    result.innerHTML = "Wprowadz poprawne liczby."
} else if (arr.length > 10) {
    result.classList.remove("hidden");
    result.innerHTML = "Wprowadziles za duzo liczb.";
} else {
    path.innerHTML = `<p class="input-text">INSERTION SORT - sortowanie przez wstawianie.</p><p class="input-text">Tablica przed sortowaniem to: [${arr}]</p>`;
    result.classList.remove("hidden");
    result.innerHTML = `Posortowane liczby to: ${insertionSort(arr)}`;
}

});