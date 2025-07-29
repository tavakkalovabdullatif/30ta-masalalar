// ====================================
// ============ 1-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini kiritadi. Agar yosh 18 dan katta yoki teng bo'lsa, "Siz balog'at yoshidasiz!" deb alert chiqaring, aks holda "Siz hali yoshsiz!" deb alert chiqaring.

// Tushuntirish
// Xo’sh, o’quvchi, yoshni tekshirish vaqti keldi! Tasavvur qiling, siz kinoteatrga kiryapsiz, lekin faqat katta yoshdagilar uchun film. Yoshni kirit, qara, ichkariga kiritishadimi yoki yo’qmi? 😄

// Input: 20
// Output: alert("Siz balog'at yoshidasiz!")
// Input: 15
// Output: alert("Siz hali yoshsiz!")

// Qani bir kod yozingchi 👀
let age = prompt("Yoshingizni kirirting: ");

if (age >= "18") {
  alert("Siz balog'at yoshidasiz!");
} else {
  alert("Siz hali yoshsiz!");
}

// ====================================
// ============ 2-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ismini kiritadi. Agar ism bo'sh bo'lsa (""), "Ism kiritmadingiz!" deb alert chiqaring, aks holda "Salom, [ism]!" deb alert chiqaring.

// Tushuntirish
// Ismsiz qanday yashaymiz, do’stim? 😜 Foydalanuvchi ismini kiritadi, lekin agar u hech narsa yozmasa, uni biroz mazax qilamiz! Bo’sh stringni tekshirish uchun == ishlatamiz.

// Input: "Ali"
// Output: alert("Salom, Ali!")
// Input: ""
// Output: alert("Ism kiritmadingiz!")

// Qani bir kod yozingchi 👀

let name = prompt("Ismingizni kiriting: ");

if (name == "") {
  console.log("Ism kiritmadingiz!");
} else {
  console.log("Salom,", name, "!");
}

// ====================================
// ============ 3-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son musbat bo'lsa, "Bu musbat son!" deb alert chiqaring, aks holda "Bu manfiy yoki nol!" deb alert chiqaring.

// Tushuntirish
// Sonlar bilan o’ynaymizmi? 😎 Musbat sonlarni yaxshi ko’ramiz, lekin manfiy yoki nol bo’lsa ham ularga mehr bilan qaraymiz. > operatorini sinab ko’ramiz!

// Input: 5
// Output: alert("Bu musbat son!")
// Input: -3
// Output: alert("Bu manfiy yoki nol!")

// Qani bir kod yozingchi 👀
let num = prompt("Son kiriting: ");

if (num == "0") {
  console.log("Bu son 0");
} else if (num > "0") {
  console.log("Bu son musbat");
} else {
  console.log("Bu son manfiy");
}
