let mat1 = [];
let mat2 = [];
let mat3 = [];

let matrices = document.getElementsByClassName('mat');
let array = document.getElementsByTagName('input');
let order;
let colors = ['red', 'blue', 'yellow', 'green', '#00ffc4', '#b400ff', '#fff700'];

// setInterval(() => {
//     document.getElementsByClassName('developer')[0].style.color = colors[0 + parseInt(Math.random() * 7)];
// }, 1000);


function createMatrices() {
    document.getElementsByClassName('operator')[0].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[0].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[1].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[1].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[2].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[2].style.color = 'rgb(255 255 255 / 19%)';

    order = prompt("enter n to make nxn matries : ");
    mat1 = [];
    mat2 = [];
    mat3 = [];
    for (let i = 0; i < 3; i++) {
        matrices[i].innerHTML = '';
    }
    for (let i = 0; i < 3; i++) {
        if (order > 10) {
            alert(`sorry the order is too big!\nonly upto 10 are allowed.`);
            return;
        }
        else if (order > 5) {
            matrices[i].style.height = `${order * 55}px`;
            matrices[i].style.width = `${order * 55}px`;
        }
        else {
            matrices[i].style.height = `${order * 100}px`;
            matrices[i].style.width = `${order * 100}px`;
        }
        for (let j = 0; j < order; j++) {
            matrices[i].innerHTML += `
            <div class="row"></div>`;
            for (let k = 0; k < order; k++) {
                matrices[i].children[j].innerHTML += `
                <input type = "number" id = "${i}${j}${k}">`;
                if (order > 5) {
                    matrices[i].children[j].children[k].style.height = '50px';
                    matrices[i].children[j].children[k].style.width = '50px';
                }
            }
        }
    }
    array = document.getElementsByTagName('input');
    console.log(order, array.length);
    for (let i = 0; i < array.length / (3 * order); i++) {
        mat1.push([]);
        mat2.push([]);
        mat3.push([]);
        for (let j = 0; j < array.length / (3 * order); j++) {
            mat1[i].push([]);
            mat2[i].push([]);
            mat3[i].push([]);
        }
    }

    for (let i = 0; i < 3; i++) {
        if (order > 5) {
            matrices[i].style.height = `${order * 55}px`;
            matrices[i].style.width = `${order * 55}px`;
        }
        else {
            matrices[i].style.height = `${order * 100}px`;
            matrices[i].style.width = `${order * 100}px`;
        }
        for (let j = 0; j < order; j++) {
            for (let k = 0; k < order; k++) {
                if (order > 5) {
                    matrices[i].children[j].children[k].style.height = '50px';
                    matrices[i].children[j].children[k].style.width = '50px';
                }
            }
        }
    }
}



function clearMatrices() {
    document.getElementsByClassName('operator')[0].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[0].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[1].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[1].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[2].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[2].style.color = 'rgb(255 255 255 / 19%)';
    for (let i = 0; i < array.length; i++) {
        array[i].value = '';
    }
}
let isNull = false;
function addMatrices() {
    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            mat3[i][j] = 0;
            if (isNull) {
                isNull = false;
            }
            if (document.getElementById(`0${i}${j}`).value == '' || document.getElementById(`1${i}${j}`).value == '') {
                isNull = true;
            }
        }
    }
    if (isNull) {
        alert('the matrices are empty!');
        return;
    }
    document.getElementsByClassName('operator')[0].style.background = '#6b8bff';
    document.getElementsByClassName('operator')[0].style.color = 'white';
    document.getElementsByClassName('operator')[1].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[1].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[2].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[2].style.color = 'rgb(255 255 255 / 19%)';
    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            mat1[i][j] = parseInt(document.getElementById(`0${i}${j}`).value);
            mat2[i][j] = parseInt(document.getElementById(`1${i}${j}`).value);
            mat3[i][j] = mat1[i][j] + mat2[i][j];
        }
    }


    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            document.getElementById(`2${i}${j}`).value = mat3[i][j];
        }
    }
}
function subMatrices() {
    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            mat3[i][j] = 0;
            if (isNull) {
                isNull = false;
            }
            if (document.getElementById(`0${i}${j}`).value == '' || document.getElementById(`1${i}${j}`).value == '') {
                isNull = true;
            }
        }
    }
    if (isNull) {
        alert('the matrices are empty!');
        return;
    }
    document.getElementsByClassName('operator')[0].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[0].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[1].style.background = '#6b8bff';
    document.getElementsByClassName('operator')[1].style.color = 'white';
    document.getElementsByClassName('operator')[2].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[2].style.color = 'rgb(255 255 255 / 19%)';
    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            mat1[i][j] = parseInt(document.getElementById(`0${i}${j}`).value);
            mat2[i][j] = parseInt(document.getElementById(`1${i}${j}`).value);
            mat3[i][j] = mat1[i][j] - mat2[i][j];
        }
    }


    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            document.getElementById(`2${i}${j}`).value = mat3[i][j];
        }
    }
}
function multMatrices() {
    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            mat3[i][j] = 0;
            if (isNull) {
                isNull = false;
            }
            if (document.getElementById(`0${i}${j}`).value == '' || document.getElementById(`1${i}${j}`).value == '') {
                isNull = true;
            }
        }
    }
    if (isNull) {
        alert('the matrices are empty!');
        return;
    }
    document.getElementsByClassName('operator')[0].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[0].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[1].style.background = 'rgb(128 128 128 / 23%)';
    document.getElementsByClassName('operator')[1].style.color = 'rgb(255 255 255 / 19%)';
    document.getElementsByClassName('operator')[2].style.background = '#6b8bff';
    document.getElementsByClassName('operator')[2].style.color = 'white';
    for (let k = 0; k < array.length / (3 * order); k++) {
        for (let i = 0; i < array.length / (3 * order); i++) {
            for (let j = 0; j < array.length / (3 * order); j++) {
                mat1[i][j] = parseInt(document.getElementById(`0${i}${j}`).value);
                mat2[i][j] = parseInt(document.getElementById(`1${i}${j}`).value);
                mat3[k][i] += mat1[k][j] * mat2[j][i];
            }
        }
    }


    for (let i = 0; i < array.length / (3 * order); i++) {
        for (let j = 0; j < array.length / (3 * order); j++) {
            document.getElementById(`2${i}${j}`).value = mat3[i][j];
        }
    }
}





// adding this in 2nd branch


function cofactor(n, m, i, j, mat, matrix) {
    if (n == 2) {
        return mat[0] * mat[3] - mat[1] * mat[2];
    }
    let tempMat = [];
    for (let i = 0; i < order; i++) {
        // code incomplete
    }
    return cofactor(n - 1, tempMat, matrix);
}