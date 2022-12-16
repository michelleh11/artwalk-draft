function instructionClose () {

    document.getElementById('instructionOverlay').classList.remove('show');
    document.getElementById('instructionOverlay').classList.add('hidden');
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })