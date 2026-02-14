<script>
    // ၁။ Dialect ခလုတ်များ အလုပ်လုပ်အောင်လုပ်ခြင်း
    const dialectButtons = document.querySelectorAll('.dialect-btn');

    dialectButtons.forEach(button => {
        button.addEventListener('click', () => {
            // လက်ရှိ Active ဖြစ်နေတဲ့ ခလုတ်ကနေ class ကို ဖြုတ်တယ်
            document.querySelector('.dialect-btn.active').classList.remove('active');
            // အခုနှိပ်လိုက်တဲ့ ခလုတ်ကို active class ထည့်တယ်
            button.classList.add('active');
            
            console.log("Selected Dialect:", button.innerText);
        });
    });

    // ၂။ Audio ခလုတ် နှိပ်သည့်အခါ
    const audioBtn = document.querySelector('.btn-audio');
    audioBtn.addEventListener('click', () => {
        // ဒီနေရာမှာ အသံထွက်ဖိုင်ကို ချိတ်ဆက်လို့ရပါတယ်
        alert("အသံထွက်ဖိုင် ဖွင့်နေပါသည်...");
        audioBtn.style.transform = "scale(0.9)";
        setTimeout(() => audioBtn.style.transform = "scale(1)", 100);
    });

    // ၃။ Mic ခလုတ် နှိပ်သည့်အခါ
    const micBtn = document.querySelector('.btn-mic');
    micBtn.addEventListener('click', () => {
        micBtn.style.background = "#ff0000"; // အသံဖမ်းနေစဉ် အနီရောင်ပြောင်းမယ်
        alert("အသံဖမ်းယူနေပါသည်... ပြောဆိုနိုင်ပါပြီ။");
        
        setTimeout(() => {
            micBtn.style.background = "#6e0d0d"; // မူလအရောင် ပြန်ပြောင်းမယ်
        }, 2000);
    });

    // ၄။ Bottom Nav အတွက် Interaction
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelector('.nav-item.active').classList.remove('active');
            item.classList.add('active');
        });
    });
</script>