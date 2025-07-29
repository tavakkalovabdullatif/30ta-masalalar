// ====================================
// ============ 4-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 ga teng bo'lsa, "To'g'ri son!" deb alert chiqaring, aks holda "Boshqa son kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// 10 – sehrli son! 🎉 Foydalanuvchi 10 kiritadimi yoki yo’qmi, tekshiramiz. == bilan tenglikni sinab ko’ring.

// Input: 10
// Output: alert("To'g'ri son!")
// Input: 7
// Output: alert("Boshqa son kiritdingiz!")

// Qani bir kod yozingchi 👀
let num = prompt("Son kiriting: ");

if (num >= 10) {
    console.log ("To'g'ri son!");
} else {
    console.log ("Boshqa son kiritdingiz!");
} 

// ====================================
// ============ 5-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali "ha" yoki "yo'q" deb kiritadi. Agar "ha" kiritilgan bo'lsa, "Ruxsat bor!" deb alert chiqaring, aks holda "Ruxsat yo'q!" deb alert chiqaring.

// Tushuntirish
// Xuddi ota-onangdan ruxsat so’ragandek! 😄 "ha" desa, yashaymiz, "yo’q" desa, xafa bo’lamiz. Stringlarni === bilan tekshir.

// Input: "ha"
// Output: alert("Ruxsat bor!")
// Input: "yo'q"
// Output: alert("Ruxsat yo'q!")

// Qani bir kod yozingchi 👀
let answer = prompt("Ruxsat so'raymiz (ha/yo'q):");

if (answer === "ha") {
    console.log("Ruxsat bor!");
} else {
    console.log("Ruxsat yo'q!");
} 

// ====================================
// ============ 6-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta va 100 dan kichik bo'lsa, "Yaxshi diapazon!" deb alert chiqaring, aks holda "Diapazon tashqarisida!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi termometr o’qishdek! 🌡️ 0 va 100 oralig’ida bo’lsa, hamma narsa zo’r, aks holda muammo! && operatorini sinab ko’ramiz.

// Input: 50
// Output: alert("Yaxshi diapazon!")
// Input: 150
// Output: alert("Diapazon tashqarisida!")

// Qani bir kod yozingchi 👀
let raqam = prompt("Son kiriting (0/100):");

if (raqam > 0 && raqam < 100) {
    console.log("Yaxshi diapozon!");
} else {
    console.log("Diapozon tashqarisida!");
}

// ====================================
// ============ 7-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 5 dan katta bo'lsa, "Uzoq so'z!" deb alert chiqaring, aks holda "Qisqa so'z!" deb alert chiqaring.

// Tushuntirish
// So’zlarning uzunligini o’lchaymiz! 📏 Agar so’z uzun bo’lsa, faxrlanamiz, qisqa bo’lsa, qisqartirib yubormaymiz! length va > ishlatamiz.

// Input: "salom"
// Output: alert("Qisqa so'z!")
// Input: "javascript"
// Output: alert("Uzoq so'z!")

// Qani bir kod yozingchi 👀
let word = prompt("So'z kiriting (salom/javascript):");

if (word.length > 5) {
    console.log("Uzoq so'z!");
} else {
    console.log("Qisqa so'z!");
}

// ====================================
// ============ 8-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son juft bo'lsa, "Juft son!" deb alert chiqaring, aks holda "Toq son!" deb alert chiqaring.

// Tushuntirish
// Juft yoki toq – bu sonlar olamidagi klassik jang! ⚔️ Sonni 2 ga bo’lib, qoldiqni tekshirish uchun % va == ishlatamiz.

// Input: 4
// Output: alert("Juft son!")
// Input: 7
// Output: alert("Toq son!")

// Qani bir kod yozingchi 👀
let number = prompt("Son Kiriting (juft/toq):");

if (number % 2 == 0) {
    console.log("Juft son!");
} else {
    console.log("Toq son!");
}

// ====================================
// ============ 9-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lsa, "Nol kiritdingiz!" deb alert chiqaring, aks holda "Nol emas!" deb alert chiqaring.

// Tushuntirish
// Nol – bu xuddi bo’sh cho’ntakdek! 😅 Uni alohida tekshirish kerak. === bilan aniq tenglikni sinab ko’ramiz.

// Input: 0
// Output: alert("Nol kiritdingiz!")
// Input: 5
// Output: alert("Nol emas!")

// Qani bir kod yozingchi 👀
let numb = prompt("Son kiriting (0/5):");

if (numb === "0") {
    console.log("Nol kiritdingiz!");
} else {
    console.log("Nol emas!");
}

// ====================================
// ============ 10-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "salom" bo'lsa, "Salom, dunyo!" deb alert chiqaring, aks holda "Boshqa so'z kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// "Salom" desa, dunyoni quchoqlaymiz! 🌍 Aks holda, biroz xafa bo’lamiz. === bilan so’zni aniq tekshir.

// Input: "salom"
// Output: alert("Salom, dunyo!")
// Input: "hello"
// Output: alert("Boshqa so'z kiritdingiz!")

// Qani bir kod yozingchi 👀
let wordinput = prompt("So'z kiriting (salom/hello):");

 if (wordinput === "salom") {
    console.log("Salom, dunyo!");
 } else {
    console.log("Boshqa so'z kiritdingiz!");
 }

// ====================================
// ============ 11-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa, "Birinchi son katta!" deb alert chiqaring, aks holda "Ikkichi son katta yoki teng!" deb alert chiqaring.

// Tushuntirish
// Sonlar o’rtasida musobaqa! 🏆 Birinchi son ikkinchisini yengadimi, yoki yo’qmi? > bilan solishtiramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta!")
// Input: 3, 7
// Output: alert("Ikkichi son katta yoki teng!")

// Qani bir kod yozingchi 👀
let firstnum = prompt("Birinchi sonni kiriting:");

if (firstnum > 0) {
    console.log("Birinchi son katta!");
} else {
    console.log("Ikkinchi son katta yoki teng!");
}

// ====================================
// ============ 12-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va ismini kiritadi. Agar yosh 18 dan katta va ism "Ali" bo'lsa, "Xush kelibsiz, Ali!" deb alert chiqaring, aks holda "Kirish taqiqlanadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi VIP klubga kirishdek! 😎 Faqat Ali va 18+ yoshdagilar uchun. && operatorini sinab ko’ramiz.

// Input: 20, "Ali"
// Output: alert("Xush kelibsiz, Ali!")
// Input: 15, "Vali"
// Output: alert("Kirish taqiqlanadi!")

// Qani bir kod yozingchi 👀
let age = prompt("Yoshingizni kiriting:");

if (age >= 18 && prompt("Ismingizni Kiriting:") === "Ali") {
    console.log("Xush kelibsiz, Ali!");
} else {
    console.log("Kirish taqiqlanadi!");
}

// ====================================
// ============ 13-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa, "Chegaradan tashqarida!" deb alert chiqaring, aks holda "Chegara ichida!" deb alert chiqaring.

// Tushuntirish
// Sonlar chegarada yashaydi! 🚧 10 dan kichik yoki 100 dan katta bo’lsa, ularni qaytarib yuboramiz. || operatorini sinab ko’ramiz.

// Input: 5
// Output: alert("Chegaradan tashqarida!")
// Input: 50
// Output: alert("Chegara ichida!")

// Qani bir kod yozingchi 👀
let son = prompt("Son kiriting (0/100):");

if (son < 10 || son > 100) {
    console.log("Chegaradan Tashqarida!");
} else {
    console.log("Chegara Ichida!");
}

// ====================================
// ============ 14-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z bo'sh bo'lmasa ("" emas), "So'z kiritdingiz!" deb alert chiqaring, aks holda "Hech narsa kiritmadingiz!" deb alert chiqaring.

// Tushuntirish
// Bo’sh joyni yoqtirmaymiz! 😤 Foydalanuvchi biror narsa yozsa, quvonamiz, aks holda biroz ranjimaymiz. ! operatorini sinab ko’ramiz.

// Input: "test"
// Output: alert("So'z kiritdingiz!")
// Input: ""
// Output: alert("Hech narsa kiritmadingiz!")

// Qani bir kod yozingchi 👀
let wordinput1 = prompt("So'z kiriting (test/hello)");

if (wordinput1 !== "") {
  console.log("So'z kiriting!");
} else {
  console.log("Hech narsa kiritmadingiz!");
}

// ====================================
// ============ 15-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar sonlar teng bo'lsa, "Sonlar teng!" deb alert chiqaring, aks holda "Sonlar teng emas!" deb alert chiqaring.

// Tushuntirish
// Sonlar o’rtasida tenglik bormi? 🤝 == bilan tekshirib, do’stlikni mustahkamlaymiz!

// Input: 5, 5
// Output: alert("Sonlar teng!")
// Input: 5, 6
// Output: alert("Sonlar teng emas!")

// Qani bir kod yozingchi 👀
let firstnumber = prompt("Birinchi sonni kiriting:");
let secondnumber = prompt("Ikkinchi sonni kiriting:");

if (firstnumber == secondnumber) {
  console.log("Sonlar teng!");
} else {
  console.log("Sonlar teng emas!");
}

// ====================================
// ============ 16-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 50 dan katta yoki teng bo'lsa va juft bo'lsa, "Katta juft son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Katta va juft sonlar – bu olamning yulduzlari! 🌟 && va % operatorlarini birlashtirib, sinab ko’ramiz.

// Input: 60
// Output: alert("Katta juft son!")
// Input: 45
// Output: alert("Boshqa son!")

// Qani bir kod yozingchi 👀
let numberinput = prompt("Son kiriting (50/60):");

if (numberinput >= 50 && numberinput % 2 === 0) {
  console.log("Katta juft son!");
} else {
  console.log("Boshqa son!");
}

// ====================================
// ============ 17-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "javascript" yoki "coding" bo'lsa, "Siz dasturchisiz!" deb alert chiqaring, aks holda "Boshqa so'z!" deb alert chiqaring.

// Tushuntirish
// Dasturchilar uchun maxsus salom! 👨‍💻 || operatorini ishlatib, sevimli so’zlarimizni tekshiramiz.

// Input: "javascript"
// Output: alert("Siz dasturchisiz!")
// Input: "hello"
// Output: alert("Boshqa so'z!")

// Qani bir kod yozingchi 👀
let wordinput2 = prompt("So'z kiriting (javascript/coding):");

if (wordinput2 === "javascript" || wordinput2 === "coding") {
  console.log("Siz dasturchisiz!");
} else {
  console.log("Boshqa So'z!");
}

// ====================================
// ============ 18-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa, "Son nol emas!" deb alert chiqaring, aks holda "Son nol!" deb alert chiqaring.

// Tushuntirish
// Nol – bu xuddi bo’sh quti! 📦 ! operatorini ishlatib, nol yoki nolni tekshiramiz.

// Input: 10
// Output: alert("Son nol emas!")
// Input: 0
// Output: alert("Son nol!")

// Qani bir kod yozingchi 👀
let numberinput2 = prompt("Son kiriting (0/10):");

if (numberinput2 == "10") {
  console.log("Son nol emas!");
} else {
  console.log("Son nol!");
}
// ====================================
// ============ 19-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini kiritadi. Agar yosh 13 dan katta va 19 dan kichik bo'lsa, "Siz o'smirsiz!" deb alert chiqaring, aks holda "O'smir emassiz!" deb alert chiqaring.

// Tushuntirish
// O’smirlik – bu hayotning eng qiziq davri! 😜 && bilan yoshni chegaralaymiz.

// Input: 15
// Output: alert("Siz o'smirsiz!")
// Input: 20
// Output: alert("O'smir emassiz!")

// Qani bir kod yozingchi 👀
let ageinput = prompt("Yoshingizni kiriting (13/19):");

if (ageinput > 13 && ageinput < 19) {
  console.log("Siz o'smirsiz!");
} else {
  console.log("Siz o'smir emassiz!");
}


// ====================================
// ============ 20-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 3 dan kichik bo'lsa yoki bo'sh bo'lsa, "So'z juda qisqa!" deb alert chiqaring, aks holda "Yaxshi so'z!" deb alert chiqaring.

// Tushuntirish
// Qisqa so’zlarni yoqtirmaymiz! 😤 || va length bilan so’zni sinab ko’ramiz.

// Input: "hi"
// Output: alert("So'z juda qisqa!")
// Input: "hello"
// Output: alert("Yaxshi so'z!")

// Qani bir kod yozingchi 👀
let wordinput3 = prompt("So'z kiriting (hi/hello):");

if (wordinput3.length < 3 || wordinput3 === "") {
  console.log("So'z juda qisqa!");
} else {
  console.log("Yaxsho so'z!");
}

// ====================================
// ============ 21-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa va juft bo'lsa, "Birinchi son katta va juft!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi musobaqada g’olibni aniqlashdek! 🏅 && va % bilan birinchi sonni sinab ko’ramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta va juft!")
// Input: 7, 3
// Output: alert("Shart bajarilmadi!")

// Qani bir kod yozingchi 👀
let firstNumber = prompt("Birinchi sonni kiriting:");
let secondNumber = prompt("Ikkinchi sonni kriting:");

if (firstNumber > secondNumber && firstNumber % 2 === 0) {
  console.log("Birinchi son katta va juft!");
} else {
  console.log("Shart bajarilmadi!");
}

// ====================================
// ============ 22-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va "erkak" yoki "ayol" deb jinsini kiritadi. Agar yosh 18 dan katta bo'lsa va jins "erkak" bo'lsa, "Siz armiyaga borasiz!" deb alert chiqaring, aks holda "Armiyaga bormaysiz!" deb alert chiqaring.

// Tushuntirish
// Armiyaga chaqiruv vaqti! 😅 Faqat 18+ erkaklar uchun. && bilan shartlarni birlashtiramiz.

// Input: 20, "erkak"
// Output: alert("Siz armiyaga borasiz!")
// Input: 16, "ayol"
// Output: alert("Armiyaga bormaysiz!")

// Qani bir kod yozingchi 👀
let ageinput2 = prompt("Yoshingiznoi kiriting (18/20):");

if (
  ageinput2 >= 18 &&
  prompt("Jinsingizni kiriting (erkak/ayol):") === "erkak"
) {
  console.log("Siz armiyaga borasiz!");
} else {
  console.log("Armiyaga bormaysiz!");
}


// ====================================
// ============ 23-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa va toq bo'lsa, "Chegaradagi toq son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Toq sonlar chegarada sayr qilmoqda! 🚶 || va % bilan ularni ushlaymiz.

// Input: 5
// Output: alert("Chegaradagi toq son!")
// Input: 50
// Output: alert("Boshqa son!")

// Qani bir kod yozingchi 👀
let numberinput3 = prompt("Son kiriting (10/100):");

if ((numberinput3 < 10 || numberinput3 > 100) && numberinput3 % 2 !== 0) {
  console.log("chegaradagi toq son!");
} else {
  console.log("Boshqa son!");
}

// ====================================
// ============ 24-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "admin" bo'lmasa, "Siz admin emassiz!" deb alert chiqaring, aks holda "Xush kelibsiz, admin!" deb alert chiqaring.

// Tushuntirish
// Adminlik – bu mas'uliyat! 😎 ! operatorini ishlatib, admin yoki yo’qligini tekshiramiz.

// Input: "admin"
// Output: alert("Xush kelibsiz, admin!")
// Input: "user"
// Output: alert("Siz admin emassiz!")

// Qani bir kod yozingchi 👀
let wordinput4 = prompt("So'z kiriting (admin/user):");

if (wordinput4 !== "admin") {
  console.log("Siz admin emassiz!");
} else {
  console.log("Xush kelibsiz, admin!");
}

// ====================================
// ============ 25-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa yoki teng bo'lsa va birinchi son musbat bo'lsa, "Birinchi son mos keladi!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Birinchi son o’zini ko’rsatmoqchi! 😏 || va > bilan uning qobiliyatini sinaymiz.

// Input: 10, 5
// Output: alert("Birinchi son mos keladi!")
// Input: -3, 5
// Output: alert("Shart bajarilmadi!")

// Qani bir kod yozingchi 👀
let firstNumberInput = prompt("Birinchi sonni kiriting:");

if (
  firstNumberInput >= 0 &&
  (firstNumberInput > prompt("Ikkinchi sonni kiriting:") ||
    firstNumberInput == prompt("Ikkinchi sonni kiriting:"))
) {
  console.log("Birinchi son mos keladi!");
} else {
  console.log("Shart bajarilmadi!");
}

// ====================================
// ============ 26-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta bo'lsa, lekin 10 dan kichik bo'lsa yoki 100 dan katta bo'lsa, lekin 200 dan kichik bo'lsa, "Maxsus diapazon!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar maxsus zonada yashaydi! 🏝️ && va || operatorlarini aralashtirib, chegaralarni tekshiramiz.

// Input: 5
// Output: alert("Maxsus diapazon!")
// Input: 50
// Output: alert("Oddiy son!")

// Qani bir kod yozingchi 👀
let numberinput4 = prompt("Son kiriting (0/10):");

if (
  (numberinput4 > 0 && numberinput4 < 10) ||
  (numberinput4 > 100 && numberinput4 < 200)
) {
  console.log("Maxsus diapazon!");
} else {
  console.log("Oddiy son!");
}
// ====================================
// ============ 27-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ismini va yoshini kiritadi. Agar ism bo'sh bo'lmasa va yosh 18 dan kichik bo'lsa, "Yoshsin, [ism]!" deb alert chiqaring, aks holda "Boshqa holat!" deb alert chiqaring.

// Tushuntirish
// Yoshlik – bu ajoyib vaqt! 😄 && va ! bilan ism va yoshni tekshiramiz.

// Input: "Ali", 15
// Output: alert("Yoshsin, Ali!")
// Input: "", 20
// Output: alert("Boshqa holat!")

// Qani bir kod yozingchi 👀
let name = prompt("Ismingizni kiriting:");
let ageinput3 = prompt("Yoshingizni");

if (name !== "" && ageinput3 < 18) {
  console.log(`Yoshsin, ${name}!`);
} else {
  console.log("Boshqa holat!");
}

// ====================================
// ============ 28-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa va juft bo'lsa, yoki son 100 dan katta bo'lsa, "Maxsus son!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar o’ziga xos! 🌟 ||, && va % bilan ularni ajratib olamiz.

// Input: 120
// Output: alert("Maxsus son!")
// Input: 7
// Output: alert("Oddiy son!")

// Qani bir kod yozingchi 👀
let numberinput5 = prompt("Son kiriting (0/120):");

if ((numberinput5 != 0 && numberinput5 % 2 == 0) || numberinput5 > 100) {
  console.log("Maxsus son!");
} else {
  console.log("Oddiy son!");
}

// ====================================
// ============ 29-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita so'z kiritadi. Agar birinchi so'z ikkinchisidan uzun bo'lsa yoki birinchi so'z "salom" bo'lsa, "Birinchi so'z g'olib!" deb alert chiqaring, aks holda "Ikkichi so'z g'olib!" deb alert chiqaring.

// Tushuntirish
// So’zlar o’rtasida musobaqa! 🗣️ || va length bilan g’olibni aniqlaymiz.

// Input: "salom", "hi"
// Output: alert("Birinchi so'z g'olib!")
// Input: "test", "hello"
// Output: alert("Ikkichi so'z g'olib!")

// Qani bir kod yozingchi 👀
let firstWord = prompt("Birinchi so'zni kiriting (salom/test):");
let secondWord = prompt("Ikkinchi so'zni kiriting (hi/hello):");
if (firstWord.length > secondWord.length || firstWord === "salom") {
  console.log("Birinchi so'z g'olib!");
} else {
  console.log("Ikkinchi so'z g'olib!");
}

// ====================================
// ============ 30-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini, ismini va "ha" yoki "yo'q" deb javob kiritadi. Agar yosh 18 dan katta bo'lsa, ism bo'sh bo'lmasa va javob "ha" bo'lsa, "Siz superstarsiz, [ism]!" deb alert chiqaring, aks holda "Superstar emassiz!" deb alert chiqaring.

// Tushuntirish
// Superstar bo’lish oson emas! 🌟 && va ! bilan barcha shartlarni tekshiramiz. Bu eng qiyin masala, lekin siz buni uddalaysiz!

// Input: 20, "Ali", "ha"
// Output: alert("Siz superstarsiz, Ali!")
// Input: 15, "Vali", "yo'q"
// Output: alert("Superstar emassiz!")

// Qani bir kod yozingchi 👀
let ageinput4 = prompt("Yoshingizni kiriting (18/20):");
let nameinput = prompt("Ismingizni kiriting (Ali/Vali):");
let answerinput = prompt("Javobingizni kiriting (ha/yo'q):");

if (ageinput4 >= 18 && nameinput !== "" && answerinput === "ha") {
  console.log(`Siz superstarsiz, ${nameinput}!`);
} else {
  console.log("Superstar emassiz!");
}