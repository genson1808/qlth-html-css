var Toast = function ({title = '', message = '', type = '', duration = 3000}) {
    const main = $('#toasts')

    if (!main) {
        console.log('not have main')
    }

    let delay = (duration/1000).toFixed(2)
    let clearAfter = duration + 1000

    let toast = '';
    switch (type) {
        case 'success':
            toast = $(`
                    <div class="toast toast--success">
                        <div class="toast__icon"></div>
                            <div class="toast__content">
                                <h5 class="toast__title">
                                    ${title}
                                </h5>
                            <p class="toast__message">${message}</p>
                        </div> 
                    </div>
                `)
            break
        case 'error':
            toast = $(`
                    <div class="toast toast--error">
                        <div class="toast__icon"></div>
                            <div class="toast__content">
                                <h5 class="toast__title">
                                    ${title}
                                </h5>
                            <p class="toast__message">${message}</p>
                        </div> 
                    </div>
                `)
            break
        case 'warning':
            toast = $(`
                    <div class="toast toast--warning">
                        <div class="toast__icon"></div>
                            <div class="toast__content">
                                <h5 class="toast__title">
                                    ${title}
                                </h5>
                            <p class="toast__message">${message}</p>
                        </div> 
                    </div>
                `)
            break
        case 'info':
            toast = $(`
                    <div class="toast toast--notification">
                        <div class="toast__icon"></div>
                            <div class="toast__content">
                                <h5 class="toast__title">
                                    ${title}
                                </h5>
                            <p class="toast__message">${message}</p>
                        </div> 
                    </div>
                `)
            break
    }

    toast.css({
        'animation' : 'slideInLeft ease .3s, fadeOut linear 1s 3s forwards'
    });
    main.append(toast)

    setTimeout(function () {
        toast.remove()
    }, clearAfter)

}

export default Toast;