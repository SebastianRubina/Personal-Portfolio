let form = document.querySelector('.contact-form');

let hiringRadio = document.getElementById('hiring');
let commentRadio = document.getElementById('comment');
let questionRadio = document.getElementById('question');




form.onsubmit = function(e) {
    if (!form.checkValidity()) {
        e.preventDefault();
        return false;
    }
    else {
        return true;
    }
}

hiringRadio.onchange = function() {
    if (hiringRadio.checked) {
        document.querySelector('.hourly').classList.remove('hidden');
    }
}

commentRadio.onchange = function() {
    if (commentRadio.checked) {
        document.querySelector('.hourly').classList.add('hidden');
    }
}

questionRadio.onchange = function() {
    if (questionRadio.checked) {
        document.querySelector('.hourly').classList.add('hidden');
    }
}
