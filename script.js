// Fungsi untuk mengatur langkah-langkah aktif
function setStep(step) {
    const steps = document.querySelectorAll('.circle-step');
    steps.forEach((el, i) => {
      el.classList.remove('active-step', 'done-step');
      if (i < step - 1) {
        el.classList.add('done-step'); // Menandai langkah yang sudah selesai
      } else if (i === step - 1) {
        el.classList.add('active-step'); // Menandai langkah yang sedang aktif
      }
    });
}

// Menunggu hingga DOM siap, baru jalankan setStep
document.addEventListener("DOMContentLoaded", function() {
    setStep(1); // Set ke langkah pertama setelah DOM siap
});

