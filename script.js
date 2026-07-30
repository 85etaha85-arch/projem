// 1. Arka planda süzülen kalpler oluşturma (Videoda görünen kod bloğu)
for (let i = 0; i < 50; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDelay = Math.random() * 3 + 's';

  document.body.appendChild(heart);
}

// 2. Butonların Çalışma Mantığı
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

// "Hayır" butonuna basıldıkça çıkacak ikna mesajları
const noTexts = [
  "Hayır",
  "Emin misin? 🥺",
  "Bir daha düşün bence... 💭",
  "Lütfen ama yaa 😭",
  "Bak bu son şansın! 💖",
  "Tamam tamam, söz çikolata alıcam! 🍫",  
  "Hala mı hayır? 😢"
];

let noCount = 0;
let yesSize = 18; // Başlangıç yazı boyutu (px)

noBtn.onclick = () => {
  noCount++;
  
  // "Hayır" butonunun üzerindeki metni değiştir
  if (noCount < noTexts.length) {
    noBtn.innerText = noTexts[noCount];
  }

  // "Evet" butonunu büyüt
  yesSize += 35;
  yesBtn.style.fontSize = `${yesSize}px`;
  yesBtn.style.padding = `${yesSize / 2}px ${yesSize}px`;

  // Eğer çok tıklandıysa hayır butonunu gizleyebiliriz (videodaki gibi)
  if (noCount >= noTexts.length - 1) {
    noBtn.style.display = 'none';
  // Eğer çok tıklandıysa hayır butonunu gizleyebiliriz (videodaki gibi)
  if (noCount >= noTexts.length - 1) {
    noBtn.style.display = 'none';
    yesBtn.innerHTML = 'Yes <br><span style="font-size: 16px; font-weight: normal; display: block; margin-top: 8px;">(hehehe başka seçeneğin yook 😉)</span>';
  }
  }
};

// "Evet" butonuna tıklandığında gerçekleşecekler (videonun sonundaki kutlama ekranı)
yesBtn.onclick = () => {
  question.innerText = "yaşasssııın🥳🥳 💕💕   (love youu 😉🤍";
  mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW9uZnd3OXM2cjIyejRpdjBsajhkcXZ0cTBscXZsbXN6ZjNwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"; // Sarılsınlar GIF'i
  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';
  document.body.classList.add('celebrate');
};