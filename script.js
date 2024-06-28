function cekKhodam() {
    const nama = document.getElementById('nama').value;
    if (nama === '') {
        alert('Masukkan nama lengkap Anda!');
        return;
    }

    // Simulasi data khodam (ganti dengan data asli)
    const dataKhodam = {
        "Budi": {
            "nama": "Khodam Harimau",
            "gambar": "https://radarkuningan.disway.id/upload/1f778cb7d0ca489ce0b00aff113ba796.png",
            "deskripsi": "Khodam Harimau memiliki kekuatan dan keberanian."
        },
        "Ani": {
            "nama": "Khodam Nyi Roro Kidul",
            "gambar": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1jGquf.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
            "deskripsi": "Khodam Nyi Roro Kidul memiliki kekuatan pesona dan kewibawaan."
        },
        "Candra": {
            "nama": "Khodam Garuda",
            "gambar": "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/936/2023/12/17/BURUNG-GARUDA-751153641.jpg",
            "deskripsi": "Khodam Garuda memiliki kekuatan luar biasa dan kebijaksanaan."
        },
        "Dewi": {
            "nama": "Khodam Dewi Sri",
            "gambar": "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/09/25/fotojetjpg-20220925095445.jpg",
            "deskripsi": "Khodam Dewi Sri mewakili kesuburan dan kebaikan."
        },
        "Zainal": {
            "nama": "Khodam Singa",
            "gambar": "https://asset-a.grid.id/crop/0x249:501x550/700x465/photo/2023/07/18/pexels-photo-1912176jpeg-20230718040323.jpeg",
            "deskripsi": "Khodam Singa memiliki kekuatan yang mempesona dan keberanian."
        },
        "Eka": {
            "nama": "Khodam Phoenix",
            "gambar": "https://i.pinimg.com/originals/c7/61/93/c761931b1a0ae768a3b1b89be7292ed1.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Fajar": {
            "nama": "Khodam Pegasus",
            "gambar": "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/05/03/1625024919681jpg-20230503121020.jpg",
            "deskripsi": "Khodam Pegasus memiliki kecepatan dan keanggunan dalam terbang."
        },
        "Gita": {
            "nama": "Khodam Kuda Putih",
            "gambar": "https://assets.promediateknologi.id/crop/0x59:1279x803/750x500/webp/photo/2023/05/29/Pegasus-kuda-sembrani-Putra-Semesta-2159216753.jpeg",
            "deskripsi": "Khodam Kuda Putih membawa kedamaian dan kebahagiaan."
        },
        "Hadi": {
            "nama": "Khodam Naga",
            "gambar": "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/06/20/fantasy-style-character-fire_23-2151099657-536237264.jpg",
            "deskripsi": "Khodam Naga melambangkan kekuatan dan kebijaksanaan."
        },
        "Ilham": {
            "nama": "Khodam Unicorn",
            "gambar": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2022/11/04/1124175447.jpg",
            "deskripsi": "Khodam Unicorn adalah simbol keunikan dan keindahan."
        },
        "Joko": {
            "nama": "Khodam Elang",
            "gambar": "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/12/06/fotojet-8jpg-20231206104117.jpg",
            "deskripsi": "Khodam Elang memiliki pandangan yang tajam dan kebebasan."
        },
        "Kartika": {
            "nama": "Khodam Merak",
            "gambar": "https://example.com/merak.jpg",
            "deskripsi": "Khodam Merak simbol keindahan dan kemegahan."
        },
        "Lukman": {
            "nama": "Khodam Kurakura",
            "gambar": "https://example.com/kurakura.jpg",
            "deskripsi": "Khodam Kurakura melambangkan ketahanan dan perlindungan."
        },
        "Mira": {
            "nama": "Khodam Srigala",
            "gambar": "https://example.com/srigala.jpg",
            "deskripsi": "Khodam Srigala memiliki kecerdasan dan ketangkasan."
        },
        "Nanda": {
            "nama": "Khodam Matahari",
            "gambar": "https://example.com/matahari.jpg",
            "deskripsi": "Khodam Matahari mewakili kehangatan dan kekuatan."
        },
        "Oscar": {
            "nama": "Khodam Bulan",
            "gambar": "https://example.com/bulan.jpg",
            "deskripsi": "Khodam Bulan melambangkan kebijaksanaan dan ketenangan."
        },
        "Putri": {
            "nama": "Khodam Merpati",
            "gambar": "https://example.com/merpati.jpg",
            "deskripsi": "Khodam Merpati membawa kedamaian dan kasih sayang."
        },
        "Qori": {
            "nama": "Khodam Ikan Koi",
            "gambar": "https://example.com/ikankoi.jpg",
            "deskripsi": "Khodam Ikan Koi simbol keberuntungan dan ketahanan hidup."
        },
        "Rina": {
            "nama": "Khodam Angsa",
            "gambar": "https://example.com/angsa.jpg",
            "deskripsi": "Khodam Angsa simbol keanggunan dan kesetiaan."
        },
        "Surya": {
            "nama": "Khodam Phoenix",
            "gambar": "https://example.com/phoenix.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Tono": {
            "nama": "Khodam Singa Putih",
            "gambar": "https://example.com/singaputih.jpg",
            "deskripsi": "Khodam Singa Putih melambangkan kekuatan dan keberanian yang murni."
        },
        "Uci": {
            "nama": "Khodam Rajawali",
            "gambar": "https://example.com/rajawali.jpg",
            "deskripsi": "Khodam Rajawali memiliki penglihatan tajam dan kebebasan."
        },
        "Vina": {
            "nama": "Khodam Serigala",
            "gambar": "https://example.com/serigala.jpg",
            "deskripsi": "Khodam Serigala memiliki kecerdasan dan ketangkasan."
        },
        "Wawan": {
            "nama": "Khodam Garuda",
            "gambar": "https://example.com/garuda2.jpg",
            "deskripsi": "Khodam Garuda memiliki kekuatan dan kebijaksanaan."
        },
        "Xena": {
            "nama": "Khodam Sphinx",
            "gambar": "https://example.com/sphinx.jpg",
            "deskripsi": "Khodam Sphinx memiliki kebijaksanaan dan kekuatan."
        },
        "Yuda": {
            "nama": "Khodam Kuda Nil",
            "gambar": "https://example.com/kudanil.jpg",
            "deskripsi": "Khodam Kuda Nil simbol kekuatan dan ketahanan."
        },
        "Zara": {
            "nama": "Khodam Merlion",
            "gambar": "https://example.com/merlion.jpg",
            "deskripsi": "Khodam Merlion adalah simbol kekuatan dan keanggunan."
        },
        "Abbas": {
            "nama": "Khodam Phoenix",
            "gambar": "https://example.com/phoenix2.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Bella": {
            "nama": "Khodam Pegasus",
            "gambar": "https://example.com/pegasus2.jpg",
            "deskripsi": "Khodam Pegasus memiliki kecepatan dan keanggunan dalam terbang."
        },
        "Cahya": {
            "nama": "Khodam Kuda Putih",
            "gambar": "https://example.com/kudaputih2.jpg",
            "deskripsi": "Khodam Kuda Putih membawa kedamaian dan kebahagiaan."
        },
        "Dharma": {
            "nama": "Khodam Naga",
            "gambar": "https://example.com/naga2.jpg",
            "deskripsi": "Khodam Naga melambangkan kekuatan dan kebijaksanaan."
        },
        "Edwin": {
            "nama": "Khodam Unicorn",
            "gambar": "https://example.com/unicorn2.jpg",
            "deskripsi": "Khodam Unicorn adalah simbol keunikan dan keindahan."
        },
        "Felia": {
            "nama": "Khodam Elang",
            "gambar": "https://example.com/elang2.jpg",
            "deskripsi": "Khodam Elang memiliki pandangan yang tajam dan kebebasan."
        },
        "Ganesha": {
            "nama": "Khodam Merak",
            "gambar": "https://example.com/merak2.jpg",
            "deskripsi": "Khodam Merak simbol keindahan dan kemegahan."
        },
        "Hafiz": {
            "nama": "Khodam Kurakura",
            "gambar": "https://example.com/kurakura2.jpg",
            "deskripsi": "Khodam Kurakura melambangkan ketahanan dan perlindungan."
        },
        "Irene": {
            "nama": "Khodam Srigala",
            "gambar": "https://example.com/srigala2.jpg",
            "deskripsi": "Khodam Srigala memiliki kecerdasan dan ketangkasan."
        },
        "Jaka": {
            "nama": "Khodam Matahari",
            "gambar": "https://example.com/matahari2.jpg",
            "deskripsi": "Khodam Matahari mewakili kehangatan dan kekuatan."
        },
        "Karin": {
            "nama": "Khodam Bulan",
            "gambar": "https://example.com/bulan2.jpg",
            "deskripsi": "Khodam Bulan melambangkan kebijaksanaan dan ketenangan."
        },
        "Luna": {
            "nama": "Khodam Merpati",
            "gambar": "https://example.com/merpati2.jpg",
            "deskripsi": "Khodam Merpati membawa kedamaian dan kasih sayang."
        },
        "Miko": {
            "nama": "Khodam Ikan Koi",
            "gambar": "https://example.com/ikankoi2.jpg",
            "deskripsi": "Khodam Ikan Koi simbol keberuntungan dan ketahanan hidup."
        },
        "Nadia": {
            "nama": "Khodam Angsa",
            "gambar": "https://example.com/angsa2.jpg",
            "deskripsi": "Khodam Angsa simbol keanggunan dan kesetiaan."
        },
        "Omar": {
            "nama": "Khodam Phoenix",
            "gambar": "https://example.com/phoenix3.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Putra": {
            "nama": "Khodam Singa Putih",
            "gambar": "https://example.com/singaputih2.jpg",
            "deskripsi": "Khodam Singa Putih melambangkan kekuatan dan keberanian yang murni."
        },
        "Qonita": {
            "nama": "Khodam Rajawali",
            "gambar": "https://example.com/rajawali2.jpg",
            "deskripsi": "Khodam Rajawali memiliki penglihatan tajam dan kebebasan."
        },
        "Rini": {
            "nama": "Khodam Serigala",
            "gambar": "https://example.com/serigala2.jpg",
            "deskripsi": "Khodam Serigala memiliki kecerdasan dan ketangkasan."
        },
        "Satria": {
            "nama": "Khodam Garuda",
            "gambar": "https://example.com/garuda3.jpg",
            "deskripsi": "Khodam Garuda memiliki kekuatan dan kebijaksanaan."
        },
        "Tina": {
            "nama": "Khodam Sphinx",
            "gambar": "https://example.com/sphinx2.jpg",
            "deskripsi": "Khodam Sphinx memiliki kebijaksanaan dan kekuatan."
        },
        "Umar": {
            "nama": "Khodam Kuda Nil",
            "gambar": "https://example.com/kudanil2.jpg",
            "deskripsi": "Khodam Kuda Nil simbol kekuatan dan ketahanan."
        },
        "Viona": {
            "nama": "Khodam Merlion",
            "gambar": "https://example.com/merlion2.jpg",
            "deskripsi": "Khodam Merlion adalah simbol kekuatan dan keanggunan."
        },
        "Winda": {
            "nama": "Khodam Phoenix",
            "gambar": "https://example.com/phoenix4.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Xavier": {
            "nama": "Khodam Pegasus",
            "gambar": "https://example.com/pegasus3.jpg",
            "deskripsi": "Khodam Pegasus memiliki kecepatan dan keanggunan dalam terbang."
        },
        "Yani": {
            "nama": "Khodam Kuda Putih",
            "gambar": "https://example.com/kudaputih3.jpg",
            "deskripsi": "Khodam Kuda Putih membawa kedamaian dan kebahagiaan."
        },
        "Zaki": {
            "nama": "Khodam Naga",
            "gambar": "https://example.com/naga3.jpg",
            "deskripsi": "Khodam Naga melambangkan kekuatan dan kebijaksanaan."
        },
        "Abdul": {
            "nama": "Khodam Unicorn",
            "gambar": "https://example.com/unicorn3.jpg",
            "deskripsi": "Khodam Unicorn adalah simbol keunikan dan keindahan."
        },
        "Bunga": {
            "nama": "Khodam Elang",
            "gambar": "https://example.com/elang3.jpg",
            "deskripsi": "Khodam Elang memiliki pandangan yang tajam dan kebebasan."
        },
        "Cinta": {
            "nama": "Khodam Merak",
            "gambar": "https://example.com/merak3.jpg",
            "deskripsi": "Khodam Merak simbol keindahan dan kemegahan."
        },
        "Dwi": {
            "nama": "Khodam Kurakura",
            "gambar": "https://example.com/kurakura3.jpg",
            "deskripsi": "Khodam Kurakura melambangkan ketahanan dan perlindungan."
        },
        "Eva": {
            "nama": "Khodam Srigala",
            "gambar": "https://example.com/srigala3.jpg",
            "deskripsi": "Khodam Srigala memiliki kecerdasan dan ketangkasan."
        },
        "Fandi": {
            "nama": "Khodam Matahari",
            "gambar": "https://example.com/matahari3.jpg",
            "deskripsi": "Khodam Matahari mewakili kehangatan dan kekuatan."
        },
        "Gina": {
            "nama": "Khodam Bulan",
            "gambar": "https://example.com/bulan3.jpg",
            "deskripsi": "Khodam Bulan melambangkan kebijaksanaan dan ketenangan."
        },
        "Hesti": {
            "nama": "Khodam Merpati",
            "gambar": "https://example.com/merpati3.jpg",
            "deskripsi": "Khodam Merpati membawa kedamaian dan kasih sayang."
        },
        "Ivan": {
            "nama": "Khodam Ikan Koi",
            "gambar": "https://example.com/ikankoi3.jpg",
            "deskripsi": "Khodam Ikan Koi simbol keberuntungan dan ketahanan hidup."
        },
        "Jasmine": {
            "nama": "Khodam Angsa",
            "gambar": "https://example.com/angsa3.jpg",
            "deskripsi": "Khodam Angsa simbol keanggunan dan kesetiaan."
        },
        "Koko": {
            "nama": "Khodam Phoenix",
            "gambar": "https://example.com/phoenix5.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Lia": {
            "nama": "Khodam Singa Putih",
            "gambar": "https://example.com/singaputih3.jpg",
            "deskripsi": "Khodam Singa Putih melambangkan kekuatan dan keberanian yang murni."
        },
        "Mira": {
            "nama": "Khodam Rajawali",
            "gambar": "https://example.com/rajawali3.jpg",
            "deskripsi": "Khodam Rajawali memiliki penglihatan tajam dan kebebasan."
        },
        "Nino": {
            "nama": "Khodam Serigala",
            "gambar": "https://example.com/serigala3.jpg",
            "deskripsi": "Khodam Serigala memiliki kecerdasan dan ketangkasan."
        },
        "Olive": {
            "nama": "Khodam Garuda",
            "gambar": "https://example.com/garuda4.jpg",
            "deskripsi": "Khodam Garuda memiliki kekuatan dan kebijaksanaan."
        },
        "Putri": {
            "nama": "Khodam Sphinx",
            "gambar": "https://example.com/sphinx3.jpg",
            "deskripsi": "Khodam Sphinx memiliki kebijaksanaan dan kekuatan."
        },
        "Qory": {
            "nama": "Khodam Kuda Nil",
            "gambar": "https://example.com/kudanil3.jpg",
            "deskripsi": "Khodam Kuda Nil simbol kekuatan dan ketahanan."
        },
        "Rara": {
            "nama": "Khodam Merlion",
            "gambar": "https://example.com/merlion3.jpg",
            "deskripsi": "Khodam Merlion adalah simbol kekuatan dan keanggunan."
        },
        "Sandy": {
            "nama": "Khodam Phoenix",
            "gambar": "https://example.com/phoenix6.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Tuti": {
            "nama": "Khodam Pegasus",
            "gambar": "https://example.com/pegasus4.jpg",
            "deskripsi": "Khodam Pegasus memiliki kecepatan dan keanggunan dalam terbang."
        },
        "Uci": {
            "nama": "Khodam Kuda Putih",
            "gambar": "https://example.com/kudaputih4.jpg",
            "deskripsi": "Khodam Kuda Putih membawa kedamaian dan kebahagiaan."
        },
        "Vio": {
            "nama": "Khodam Naga",
            "gambar": "https://example.com/naga4.jpg",
            "deskripsi": "Khodam Naga melambangkan kekuatan dan kebijaksanaan."
        },
        "Wira": {
            "nama": "Khodam Unicorn",
            "gambar": "https://example.com/unicorn4.jpg",
            "deskripsi": "Khodam Unicorn adalah simbol keunikan dan keindahan."
        },
        "Xavier": {
            "nama": "Khodam Elang",
            "gambar": "https://example.com/elang4.jpg",
            "deskripsi": "Khodam Elang memiliki pandangan yang tajam dan kebebasan."
        },
        "Yasmin": {
            "nama": "Khodam Merak",
            "gambar": "https://example.com/merak4.jpg",
            "deskripsi": "Khodam Merak simbol keindahan dan kemegahan."
        },
        "Zia": {
            "nama": "Khodam Kurakura",
            "gambar": "https://example.com/kurakura4.jpg",
            "deskripsi": "Khodam Kurakura melambangkan ketahanan dan perlindungan."
        },
        "Aldi": {
            "nama": "Khodam Srigala",
            "gambar": "https://example.com/srigala4.jpg",
            "deskripsi": "Khodam Srigala memiliki kecerdasan dan ketangkasan."
        },
        "Bunga": {
            "nama": "Khodam Matahari",
            "gambar": "https://example.com/matahari4.jpg",
            "deskripsi": "Khodam Matahari mewakili kehangatan dan kekuatan."
        },
        "Cindy": {
            "nama": "Khodam Bulan",
            "gambar": "https://example.com/bulan4.jpg",
            "deskripsi": "Khodam Bulan melambangkan kebijaksanaan dan ketenangan."
        },
        "Dino": {
            "nama": "Khodam Merpati",
            "gambar": "https://example.com/merpati4.jpg",
            "deskripsi": "Khodam Merpati membawa kedamaian dan kasih sayang."
        },
        "Ella": {
            "nama": "Khodam Ikan Koi",
            "gambar": "https://example.com/ikankoi4.jpg",
            "deskripsi": "Khodam Ikan Koi simbol keberuntungan dan ketahanan hidup."
        },
        "Frisca": {
            "nama": "Khodam Angsa",
            "gambar": "https://example.com/angsa4.jpg",
            "deskripsi": "Khodam Angsa simbol keanggunan dan kesetiaan."
        },
        "Gafur": {
            "nama": "Khodam Phoenix",
            "gambar": "https://example.com/phoenix7.jpg",
            "deskripsi": "Khodam Phoenix simbol kebangkitan dan keabadian."
        },
        "Hani": {
            "nama": "Khodam Singa Putih",
            "gambar": "https://example.com/singaputih4.jpg",
            "deskripsi": "Khodam Singa Putih melambangkan kekuatan dan keberanian yang murni."
        },
        "Ismail": {
            "nama": "Khodam Rajawali",
            "gambar": "https://example.com/rajawali4.jpg",
            "deskripsi": "Khodam Rajawali memiliki penglihatan tajam dan kebebasan."
        },
        "Jenita": {
            "nama": "Khodam Serigala",
            "gambar": "https://example.com/serigala4.jpg",
            "deskripsi": "Khodam Serigala memiliki kecerdasan dan ketangkasan."
        },
        "Khalid": {
            "nama": "Khodam Garuda",
            "gambar": "https://example.com/garuda5.jpg",
            "deskripsi": "Khodam Garuda memiliki kekuatan dan kebijaksanaan."
        },
        "Lani": {
            "nama": "Khodam Sphinx",
            "gambar": "https://example.com/sphinx4.jpg",
            "deskripsi": "Khodam Sphinx memiliki kebijaksanaan dan kekuatan."
        },
        "Mila": {
            "nama": "Khodam Kuda Nil",
            "gambar": "https://example.com/kudanil4.jpg",
            "deskripsi": "Khodam Kuda Nil simbol kekuatan dan ketahanan."
        },
        "Nur": {
            "nama": "Khodam Merlion",
            "gambar": "https://example.com/merlion4.jpg",
            "deskripsi": "Khodam Merlion adalah simbol kekuatan dan keanggunan."
        },
        "Rizal": {
            "nama": "Khodam Rajawali Emas",
            "gambar": "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/12/06/fotojet-8jpg-20231206104117.jpg",
            "deskripsi": "Khodam Rajawali Emas memiliki kekuatan dan kebijaksanaan yang luar biasa."
        },
        "Anisa": {
            "nama": "Khodam Kupu-kupu Mutiara",
            "gambar": "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/09/21/andra-c-taylor-jr-ic8zpkz6qf0-un-20230921033044.jpg",
            "deskripsi": "Khodam Kupu-kupu Mutiara melambangkan transformasi dan keindahan yang tiada tara."
        },
        "Delia": {
            "nama": "Khodam Merak Biru",
            "gambar": "https://media.suara.com/pictures/653x366/2020/10/23/94173-peacock-attack-2.jpg",
            "deskripsi": "Khodam Merak Biru simbol keindahan dan harmoni alam."
        },
        "Hendri": {
            "nama": "Khodam Singa Laut",
            "gambar": "https://media.suara.com/pictures/970x544/2015/04/09/o_19ieu3hn511bvskiirm1k1o8q0a.jpg",
            "deskripsi": "Khodam Singa Laut memiliki kekuatan dan keberanian di lautan yang luas."
        },
        "Ikmal": {
            "nama": "Khodam Phoenix Ungu",
            "gambar": "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1613879600/liegalt2kbzx8eme5atb.jpg",
            "deskripsi": "Khodam Phoenix Ungu simbol kebangkitan dan keabadian yang tenang dan dalam."
        },
        "Laila": {
            "nama": "Khodam Harimau Putih",
            "gambar": "https://media.suara.com/pictures/1600x840/2024/06/24/54093-arti-khodam-harimau-putih-freepik.jpg",
            "deskripsi": "Khodam Harimau Putih melambangkan kekuatan dan keberanian yang suci."
        },
        "Paula": {
            "nama": "Khodam Naga Emas",
            "gambar": "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/294/2023/12/23/13-2944102307.png",
            "deskripsi": "Khodam Naga Emas simbol kekuatan dan kebijaksanaan yang kuno dan perkasa."
        },
        "Andara": {
            "nama": "Khodam Elang Perak",
            "gambar": "https://i.pinimg.com/564x/aa/f1/4e/aaf14e5887e5fc1617d5a1ddadf54582.jpg",
            "deskripsi": "Khodam Elang Perak memiliki pandangan tajam dan kebebasan yang elegan."
        },
        // Tambahkan data khodam lainnya...
    };

    if (dataKhodam[nama]) {
        const khodam = dataKhodam[nama];
        document.getElementById('namaKhodam').textContent = khodam.nama;
        document.getElementById('gambarKhodam').src = khodam.gambar;
        document.getElementById('deskripsiKhodam').textContent = khodam.deskripsi;
        document.getElementById('hasil').style.display = 'block';
    } else {
        alert('Khodam tidak ditemukan!');
    }
}
