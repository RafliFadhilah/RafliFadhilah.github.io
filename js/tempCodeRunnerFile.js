$(document).ready(function(){
    // Menggunakan AJAX untuk membaca file JSON
    $.getJSON("republika_news.json", function(data) {
        // Membuat tabel untuk menampilkan data
        var table = $("<table>").addClass("news-table");
        var headerRow = $("<tr>").appendTo(table);
        $("<th>").text("Kategori").appendTo(headerRow);
        $("<th>").text("Judul Berita").appendTo(headerRow);
        $("<th>").text("Waktu Publish").appendTo(headerRow);
        $("<th>").text("Waktu Scraping").appendTo(headerRow);

        // Loop melalui setiap item dalam file JSON dan menambahkannya ke tabel
        $.each(data, function(index, item) {
            var row = $("<tr>").appendTo(table);
            $("<td>").text(item.kategori).appendTo(row);
            $("<td>").text(item.judul).appendTo(row);
            $("<td>").text(item.waktu_publish).appendTo(row);
            $("<td>").text(item.waktu_scraping).appendTo(row);
        });

        // Menambahkan tabel ke elemen dengan ID "data-container"
        table.appendTo("#data-container");
    });
});
