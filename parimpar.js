function calcularParImpar() {
    var txtnum = window.document.getElementById('txtnumero')
    var num =Number(txtnum.value)
    var res = window.document.getElementById('res')
    var resto = (num % 2)

    if ((resto !== 0)) {
    res.innerHTML = `<p>O número ${num} é Ímpar.</p>`
    } else {
    res.innerHTML = `<p>O número ${num} é Par.</p>`
    }
}