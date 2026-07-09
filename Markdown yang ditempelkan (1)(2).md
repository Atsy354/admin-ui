# 10. Responsive Layout

Pada tutorial sebelumnya sudah dipahami bahwa pada project Finebank ini menggunakan dua jenis layout halaman.

Tiga halaman menggunakan layout seperti gambar yang sebelah kiri, dimana content utama berada di tengah tanpa ada header dan sidebar.

Sembilan halaman menggunakan layout seperti gambar yang sebelah kanan, pada halaman terdapat sidebar di kiri dan header di atas. Kemudian content berada di kanan sidebar dan di bawah header.

!image.png

Layout sebelah kiri sudah berhasil dibuat dan diberi nama **AuthLayout**. Lanjutkan dengan membuat layout sebelah kanan yang selanjutnya nanti akan disebut dengan **MainLayout**.

Untuk MainLayout, akan dibuat responsive untuk dua tipe ukuran layar perangkat, misalnya tampilan untuk layar mobile dan bukan mobile. Karena pada Design System (Figma) tidak ada desain tampilan mobile nya, coba misalnya dibuat seperti ini.

!image.png

Pada tampilan mobile, navigasi menu pada sidebar hanya akan menampilkan icon saja, teks menu disembunyikan. 

Bagian menu user di bawah juga hanya menampilkan avatar user saja, teks username disembunyikan.

Lalu content utama akan ditampilkan 1 kolom per baris.

1. Pertama siapakan dulu file baru bernama MainLayout, letakkan di dalam folder src\components\Layouts\MainLayout.jsx
    
    ```jsx
    import React from "react"; 
    
    function MainLayout(props) {
      const { children } = props;
      
      return (
        <>
    	    <div>{children}</div>
        </>
      );
    }
    
    export default MainLayout;
    ```
    
    !image.png
    
2. MainLayout nantinya akan digunakan untuk tata letak 9 halaman dari project Finebank. Salah satu dari 9 halaman tersebut adalah halaman Overview, yang selanjutnya akan disebut dengan halaman dashboard. 
    
    Buat sebuah halaman baru untuk menu dashboard, pada file src\pages\dashboard.jsx. Gunakan MainLayout pada halaman ini, sementara isi dengan teks sederhana seperti ini dulu saja.
    
    !image.png
    
3. Ubah router untuk halaman utama project, dengan memanggil halaman dashboard seperti ini.
    
    !image.png
    
    !image.png
    
4. Pada langkah ini akan ditunjukkan step-by-step bagaimana mengatur tata letak untuk MainLayout. Untuk memudahkan melihat bagian-bagian halaman, akan diberi panduan warna yang nantinya akan dihapus. Amati dan pahami dulu tata letak tiga bagian MainLayout dengan gambar berikut ini.
    
    !image.png
    
    Pertama buat sebuah bagian utama yang berwarna biru, kemudian isi dengan dua bagian di dalamnya. Jajarkan menggunakan flex.
    
    ```jsx
    import React from "react"; 
    
    function MainLayout(props) {
      const { children } = props;
      
      return (
        <>
    	    <div className="flex bg-blue-500">
    			<aside className="bg-red-500">kiri</aside>
    			<div className="bg-yellow-500">kanan {children}</div>
    		</div>
        </>
      );
    }
    
    export default MainLayout;
    ```
    
    !image.png
    
    Pada bagian warna kuning beri class flex-1 supaya bisa mengambil seluruh sisa ruang horizontal (penuh). Class flex-1 ini hanya bisa digunakan pada elemen yang merupakan salah satu flex item (child) dari sebuah elemen flex container (parent). 
    
    Biru → flex container
    
    Merah dan Kuning → flex item
    
    Selanjutnya hapus saja class panduan background warna biru.
    
    !image.png
    
    Kemudian buat dua bagian baru di dalam bagian warna kuning untuk membagi bagian atas dan bagian bawah, beri warna hijau muda dan hijau tua.
    
    ```jsx
    			<div className="bg-green-300">kanan atas</div>
    			<div className="bg-green-500">{children}</div>
    ```
    
    !image.png
    
    Jajarkan menggunakan flex namun dengan direction col (vertical). Kemudian pada bagian hijau tua beri class flex-1 supaya bisa mengambil seluruh sisa ruang vertical (penuh)
    
    !image.png
    
    Hapus class warna merah pada aside, ganti dengan warna hitam sesuai desain. Kemudian atur lebar (width) nya juga dan beri warna teksnya.
    
    !image.png
    
    Sampai sini, sementara tata letak sudah selesai dibuat.
    
5. Lanjutkan dengan menyesuaikan warna background pada bagian warna hijau sesuai dengan desain yang ada. Berikan juga border bottom untuk bagian kanan yang atas.
    
    !image.png
    
6. Di dalam elemen aside, berikan dua kelompok bagian yang nantinya akan diisi dengan elemen-elemen lagi di dalamnya. Bagian pertama berisi Logo dan Navigasi Menu, ini akan berada di bagian atas pada aside. Bagian kedua berisi menu Logout dan Info User, ini akan berada di bagian bawah pada aside.
    
    
    !image.png
    
    ```jsx
    		<div>
    			<div>Logo</div>
    			<nav>Nav</nav>
    		</div>
    		<div>
    			<div>Logout</div>
    			<div>User</div>
    		</div>
    ```
    
    !image.png
    
7. Jajarkan kedua bagian tadi menggunakan flex dengan direction col (vertical), kemudian beri justify-between supaya ada jarak ruang kosong diantara kedua bagian sehingga bisa terpisah atas dan bawah. Tambahkan juga padding secara vertical maupun horizontal.
    
    !image.png
    
8. Pada bagian bawah aside, tambahkan bagian yang menjadi pemisah antara menu Logout dan Info User. Berikan border bottom yang memiliki warna sesuai desain, lalu atur margin secara vertical.
    
    
    !image.png
    
    ```jsx
    <div className="border my-10 border-b-special-bg"></div>
    ```
    
    !image.png
    
9. Pada tampilan Menu Logout, beri warna background, warna teks, dan padding sesuai desain. Kemudian di dalamnya buat dua bagian yang dijajarkan menggunakan flex. Bagian pertama nanti akan diisi icon menu (sementara pakau huruf dulu). Bagian Kedua akan diisi teks menu.
    
    !image.png
    
    ```jsx
    							<div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
                    <div className="mx-auto sm:mx-0">L</div>
                    <div className="ms-3 hidden sm:block">Logout</div>
                  </div>
    ```
    
    !image.png
    
    Pada tampilan mobile, navigasi menu pada sidebar hanya akan menampilkan icon saja, teks menu disembunyikan. 
    
    Maka, bagian teks menu Logout ini tambahkan class **hidden**, karena membuat design itu harus menerapkan konsep **mobile first**, jadi atur tampilan default untuk ukuran breakpoint layar mobile, baru kemudian atur tampilan untuk breakpoint layar lainnya yang lebih lebar.
    
    Misalnya pada bagian teks menu ini akan dibuat tampil pada breakpoint layar mulai small (keatas), maka tambahkan class sm:block.
    
    **Breakpoint di bawah sm → hidden (tersembunyi, display : none)**
    
    **Breakpoint sm, md, lg, xl → block (tidak tersembunyi, display : block)**
    
    Karena pada saat tampilan layar breakpoint mulai small (dan keatas) itu Menu tampil lengkap (Icon Menu dan Teks Menu), maka ukuran dari elemen aside juga perlu disesuaikan menjadi lebih lebar.
    
    **Breakpoint di bawah sm → w-28**
    
    **Breakpoint sm, md, lg, xl → sm:w-64**
    
    !image.png
    
10. Pindah ke bagian Info User, tambahkan tiga bagian di dalamnya untuk tampilan avatar, username, dan icon. Atur tata letaknya menggunakan flex dan atur juga untuk menyembunyikan username dan icon pada tampilan mobile.
    
    !image.png
    
    ```jsx
    						<div className="flex justify-between items-center">
                  <div>Avatar</div>
                  <div className="hidden sm:block">
                    Username
                    <br />
                    View Profile
                  </div>
                  <div className="hidden sm:block">icon</div>
                </div>
    ```
    
    !image.png
    
    !image.png
    
11. Beralih ke bagian atas, Tambahkan sebuah menu di dalam navigasi bernama Overview. Atur tampilannya mirip dengan menu Logout yang baru saja dibuat pada langkah sebelumnya. Tambahkan juga pseudoclass hover sehingga saat kursor diarahkan warna background bisa berubah.
    
    !image.png
    
    ```jsx
    								<div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
                      <div className="mx-auto sm:mx-0">O</div>
                      <div className="ms-3 hidden sm:block">Overview</div>
                    </div>
    ```
    
    !image.png
    
    !image.png
    
    Tambahkan dua menu lagi di bawah Overview, yaitu Balances dan Transactions.
    
    ```jsx
    								<div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
                      <div className="mx-auto sm:mx-0">B</div>
                      <div className="ms-3 hidden sm:block">Balances</div>
                    </div>
                    <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
                      <div className="mx-auto sm:mx-0">T</div>
                      <div className="ms-3 hidden sm:block">Transactions</div>
                    </div>
    ```
    
    !image.png
    
    !image.png
    
12. Diatas Navigasi Menu, panggil component Logo yang sudah pernah dibuat pada tutorial sebelumnya. Beri margin pada bagian ini.
    
    !image.png
    
    !image.png
    
    Lihat hasilnya, perlu ada penyesuaian pada component Logo supaya bisa tampil dalam bentuk yang lain.
    
    !image.png
    
13. Sesuaikan component Logo yang berada pada file src\components\Elements\Logo.jsx. Beri props dan buat variant seperti yang pernah dilakukan pada component Button.
    
    Variant primary akan tampil dengan warna hijau primary dan ukuran text-4xl.
    
    Variant secondary akan tampil dengan warna putih. Ukuran teks default text-sm, untuk breakpoint small text-2xl.  
    
    !image.png
    
    ```jsx
    import React from "react";
    
    function Logo(props) {
      const { variant = "primary" } = props;
    
      const variantClasses = {
        primary: "text-primary text-4xl",
        secondary: "text-white text-sm sm:text-2xl",
      };
    
      return (
        <>
          <div
            className={`flex justify-center font-poppins tracking-wide 
              ${variantClasses[variant] || variantClasses.primary}`}
          >
            <span className="font-bold">FINE</span>
            bank
            <span className="font-bold">.IO</span>
          </div>
        </>
      );
    }
    
    export default Logo;
    ```
    
    !image.png
    
    Sementara bagian kiri, aside sudah selesai diatur tata letaknya.
    
14. Beralih ke bagian kanan, ubah tag bagian atas menjadi header dan bagian bawah menjadi main.
    
    !image.png
    
15. Pada bagian header, tambahkan dua bagian di dalamnya dan jajarkan menggunakan flex. Beri justify-between supaya kedua bagian dapat terpisah ke sudut kiri dan sudut kanan. Bagian kiri untuk tampilan Username dan Datetime. Bagian kanan untuk tampilan Icon dan Search Box. Jajarkan masing-masing bagian kanan dan kiri menggunakan flex.
    
    !image.png
    
    ```jsx
    			<div className="flex">
            <div>Username</div> 
    			  <div>May 19, 2023</div> 
          </div>
    			<div className="flex">
            <div>Icon</div> 
    			  <div>Search Box</div> 
          </div>
    ```
    
    !image.png
    
    !image.png
    
    Tambahkan class items-center supaya elemen tampil selaras secara vertical. Kemudian atur warna teks dan juga ketebalannya untuk bagian Username. beri margin untuk bagian Username dan Icon.
    
    !image.png
    
    !image.png
    
16. Untuk Search Box, siapkan dulu dengan memodifikasi component LabeledInput yang sudah pernah dibuat sebelumnya. Component LabeledInput adalah gabungan dari elemen Label dan Input. Pada Search Box tidak membutuhkan elemen Label, hanya butuh elemen Input saja. 
    
    Sehingga, pisahkan elemen Input dari component LabeledInput pada sebuah file baru src\components\Elements\Input.jsx. 
    
    beri props pada component Input sehingga dapat mengatur tampilan icon, warna background, dan warna bordernya.
    
    !image.png
    
    src\components\Elements\LabeledInput.jsx. 
    
    ```jsx
    import React from "react";
    import Input from "./Input";
    
    function LabeledInput(props) {
      const { label, id, ...rest } = props;
    
      return (
        <>
          <label htmlFor={id} className="block text-sm mb-2">
            {label}
          </label>
          <Input id={id} {...rest} />
        </>
      );
    }
    
    export default LabeledInput;
    ```
    
    src\components\Elements\Input.jsx. 
    
    ```jsx
    import React from "react";
    
    function Input(props) {
      const {
        id,
        icon = false,
        backgroundColor = false,
        border = "border-gray-03",
        ...rest
      } = props;
    
      return (
        <>
          <input
            className={`py-3 pl-4 text-sm rounded-md w-full border text-gray-01 
              ${border} focus:border-black focus:outline-none focus:ring-0 
              ${backgroundColor || ""}
            `}
            id={id}
            {...rest}
          />
        </>
      );
    }
    
    export default Input;
    ```
    
    Import component input pada MainLayout.
    
    !image.png
    
    Gunakan pada bagian Search Box, dengan mengatur warna background dan warna bordernya adalah putih.
    
    !image.png
    
    !image.png
    
    Sampai sini sementara bagian header selesai dibuat.
    
17. lanjut ke bagian terakhir yaitu content utama layout, beri padding secara vertical maupun horizontal.
    
    !image.png
    
    Buat sebuah component baru bernama Card pada file src\components\Elements\Card.jsx. 
    
    Component ini akan digunakan untuk menampilkan kotak-kotak content pada bagian dashboard yang dapat diisi tampilan apapun misalnya teks paragraf, grafik, tabel, dll.
    
    !image.png
    
    ```jsx
    import React from "react";
    
    function Card(props) {
      const { title, link = false, desc } = props;
    
      return (
        <>
          <div>
            <div className="flex">
              <div>{title}</div>
              {link && <div>View All</div>}
            </div>
            <div>{desc}</div>
          </div>
        </>
      );
    }
    
    export default Card;
    ```
    
    !image.png
    
    Component card memiliki props untuk judul, deskripsi, dan link. Jika component Card sudah siap, gunakan Card pada halaman dashboard, buat satu dulu seperti ini.
    
    !image.png
    
    ```jsx
    						<Card
                  title="Total Balance"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
    ```
    
    !image.png
    
18. Atur styling dan tata letak pada component Card.
    
    !image.png
    
    ```jsx
    import React from "react"; 
    
    function Card(props) {
      const { title, link = false, desc } = props;
    
      return (
        <div className="flex flex-col">
          <div className="flex justify-between items-center text-gray-02 mb-2">
            <div className="text-2xl">{title}</div> 
            {link && <div className="text-xs">View All</div>}
          </div>
          <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
            {desc}
          </div>
        </div>
      );
    }
    
    export default Card;
    ```
    
    !image.png
    
    Tambahkan dua Card lagi pada halaman dashboard.
    
    ```jsx
    						<Card
                  title="Goals"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
                <Card
                  title="Upcoming Bill"
                  link="/bills"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
    ```
    
    !image.png
    
    !image.png
    
19. Lanjutkan dengan mengatur tata letak Card pada halaman dashboard menggunakan grid supaya pada tampilan layar selain mobile (breakpoint small dan keatas) Card bisa diatur jumlah tampilnya berapa item per baris. 
    
    !image.png
    
    Referensi : https://www.tailwindgen.com/
    
    !image.png
    
    !image.png
    
    Grid diatur 12 kolom, sehingga supaya bisa tampil 3 Card per baris, setiap Card harus merentang (span) sebanyak 4 kolom. Atur juga jumlah barisnya yaitu 3.
    
    **3 Card x 4 kolom = 12 kolom.**
    
    !image.png
    
    ```jsx
    			<MainLayout>
            <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6">
              <div className="sm:col-span-4">
                <Card
                  title="Total Balance"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
              </div>
              <div className="sm:col-span-4">
                <Card
                  title="Goals"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
              </div>
              <div className="sm:col-span-4">
                <Card
                  title="Upcoming Bill"
                  link="/bill"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
              </div>
            </div>
          </MainLayout>
    ```
    
    !image.png
    
    Tambahkan 3 Card lagi dibawah Card Upcoming Bill, namun atur tampilannya sesuai dengan yang ada di desain.
    
    Card Recent Transaction, merentang 4 kolom dan merentang 2 baris.
    
    Card Statistics, merentang 8 kolom.
    
    Card Expenses Breakdown, merentang 8 kolom.
    
    !image.png
    
    ```jsx
    					<div className="sm:col-span-4 sm:row-span-2">
                <Card
                  title="Recent Transactions"
                  link="/transactions"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
              </div>
              <div className="sm:col-span-8">
                <Card
                  title="Statistics"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
              </div>
              <div className="sm:col-span-8">
                <Card
                  title="Expenses Breakdown"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
                />
              </div>
    ```
    
    !image.png
    
    !image.png
    
20. Atur tampilan component Card supaya memiliki tinggi (height) penuh. Lalu bagian yang berwarna putih pada Card, beri flex-1 supaya bisa mengambil seluruh sisa ruang vertical (penuh). 
    
    Atur juga tinggi (height) pada bagian grid di MainLayout supaya area grid bisa memenuhi bagian pada layout.
    
    !image.png
    
    !image.png
    
21. Seperti biasa lanjutkan dengan mengunggah perubahan terbaru pada repository github (push).