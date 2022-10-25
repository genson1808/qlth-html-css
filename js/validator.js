var Validator = function (formSelector) {
    let ips = $(`${formSelector} input[name][rules]`)
    var data = []
    ips.each(function (i, e) {
        data.push(
            {
                name: this.name,
                rules: $(this).attr('rules'),
                value: $(this).val()
            }
        )
    })

    for(let i = 0; i < data.length; i++) {
        let errors = checkRules(data[i].rules, data[i].value);

        let ip = $(`${formSelector} input[name=${data[i].name}]`);
        let pr = ip.closest('.wrap-input')

        if (errors.length) {
            var error = $(`<span class="has-error">${errors[0]}</span>`)
            pr.append(error)
            errors = []
        } else {
            let child = pr.children('.has-error')
            if (child) {
                child.remove()
            }
        }
    }

    var valid = $(`${formSelector} .wrap-input .has-error`)
    if (valid.length) {
        return false
    }else {
        return true
    }
}

function checkRules(rules, val) {
    var errors = [];
    if (rules.includes('required')) {
        if (!val) {
            errors.push("Dữ liệu không được bỏ trống.")
        }
    }

    if (rules.includes('phone')) {
        if (val && !validatePhone(val)) {
            errors.push("Số điện thoại không hợp lệ")
        }
    }

    if (rules.includes('email')) {
        if (val && !validateEmail(val)) {
            errors.push("Email không hợp lệ")
        }
    }

    return errors
}

function validatePhone(input) {
    var validRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

export default Validator;