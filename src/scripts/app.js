let form = document.querySelector('.contact-form');

let hiringRadio = document.getElementById('hiring');



form.onsubmit = function(e) {
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    else {
        return true;
    }
}

hiringRadio.onchange = function() {
    if (hiringRadio.checked) {
        document.querySelector('.hourly').classList.remove('hidden');
    } else {
        document.querySelector('.hourly').classList.add('hidden');
    }
}
