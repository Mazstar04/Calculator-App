let firstNo = 0;
let secondNo = 0;
let operation = null;

const typeNumbers = () => {
    const keys = document.querySelectorAll('.normal-char');
    const mainInput = document.querySelector('.input-main');
    keys.forEach(k => k.addEventListener('click', () => {
        mainInput.textContent == 0 ? mainInput.textContent = k.id : mainInput.textContent += k.id;
    })
    )
};

const performOperation = () => {
    const keys = document.querySelectorAll('.special-char');
    const mainInput = document.querySelector('.input-main');
    const subInput = document.querySelector('.input-sub');

    keys.forEach(k => k.addEventListener('click', () => {
        if (operation == null) {
            console.log(operation);
            operation = k.id;
            firstNo = mainInput.textContent;
            subInput.textContent = firstNo + "  " + k.id;
        }
        else {
            operation = k.id;
            subInput.textContent = firstNo + "  " + k.id;
        }
        mainInput.textContent = "0";
        
    }))

};

const result = () => {
    const mainInput = document.querySelector('.input-main');
    const subInput = document.querySelector('.input-sub');
    const key = document.querySelector('.submit');

    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
    };

    key.addEventListener('click', () => {
        secondNo = mainInput.textContent;
        const result = operations[operation](parseFloat(firstNo), parseFloat(secondNo));
        mainInput.textContent = result;
        subInput.textContent = "";
        operation = null;
    });
     
}

const clear = () => {
    const clearBtn = document.querySelector('.clear-all');
    const mainInput = document.querySelector('.input-main');
    const subInput = document.querySelector('.input-sub');
    clearBtn.addEventListener('click', () => {
        firstNo = 0;
        secondNo = 0;
        operation = "";
        mainInput.textContent = "0";
        subInput.textContent = "";
    });
}

typeNumbers();
performOperation();
result();
clear();