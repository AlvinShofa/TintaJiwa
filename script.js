function submitForm(event) {
    event.preventDefault(); // Mencegah refresh halaman

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const platform = document.getElementById('platform').value;
    const account = document.getElementById('account').value;
    const date = document.getElementById('date').value;
    const duration = document.getElementById('duration').value;
    const message = document.getElementById('message').value;
    const reference = document.getElementById('reference').value;


    // Format pesan untuk WhatsApp (dengan encodeURIComponent untuk mencegah error URL encoding)
    const whatsappMessage = `Name: ${encodeURIComponent(name)}%0APlatform: ${encodeURIComponent(platform)}%0AAccount Name: ${encodeURIComponent(account)}%0ADate: ${encodeURIComponent(date)}%0AReference: ${encodeURIComponent(reference)}%0ADuration: ${encodeURIComponent(duration)} Second%0AMessage: ${encodeURIComponent(message)}`;

    // Redirect ke WhatsApp dengan pesan yang diisi
    const whatsappUrl = `https://wa.me/6281271608706?text=${whatsappMessage}`;
    window.location.href = whatsappUrl;
  }

// JavaScript function to toggle the navigation menu
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function() {
  const dateInput = document.getElementById("date");

  // Mendapatkan tanggal saat ini
  const today = new Date();

  // Menghitung tanggal minimal (3 hari dari sekarang)
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 3);

  // Mengonversi tanggal ke format yang sesuai untuk input type="date"
  const minDateString = minDate.toISOString().split("T")[0];

  // Mengatur atribut min pada input tanggal
  dateInput.min = minDateString;
});
