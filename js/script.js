// ==========================================================
// 1. Swiper.js 초기화 (메인 히어로 슬라이드)
// ==========================================================
function initHeroSwiper() {
    new Swiper('.hero-swiper', {
        loop: true, 
        slidesPerView: 1, 
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
        },
    });
}

// ==========================================================
// 2. Swiper.js 초기화 (제품 슬라이드)
// ==========================================================
function initProductSwiper() {
    const productSwiper = new Swiper('.product-swiper', {
        loop: true,
        slidesPerView: 1, 
        spaceBetween: 30, 
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { 
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: { 
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
}

// ==========================================================
// 3. ScrollReveal.js 초기화 및 적용 (살짝 밑으로 내렸을 때 나오는 효과)
// ==========================================================
function initScrollReveal() {
    const sr = ScrollReveal({
        distance: '50px', 
        duration: 1000, 
        easing: 'ease-in-out',
        origin: 'bottom', 
        reset: true 
    });

    sr.reveal('.reveal-item', { 
        interval: 200 
    });

    // 상단 배너 텍스트 애니메이션은 제거되었습니다.
}

// ==========================================================
// 4. 풀-와이드 드롭다운 메뉴 기능 (안정화된 로직)
// ==========================================================
function initDropdownMenu() {
    const header = document.querySelector('.header');
    const navItems = document.querySelectorAll('.nav-item');
    const dropdownMenuFull = document.querySelector('.dropdown-menu-full');
    
    // 드롭다운을 열어야 하는 요소들 (nav-items)
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            dropdownMenuFull.classList.add('visible');
        });
    });

    // 헤더 전체 영역에서 마우스 이탈 시 드롭다운 닫기
    header.addEventListener('mouseleave', (event) => {
        setTimeout(() => {
            if (!dropdownMenuFull.matches(':hover')) {
                dropdownMenuFull.classList.remove('visible');
            }
        }, 50); 
    });
    
    // 드롭다운 메뉴에서 마우스 이탈 시 닫기
    dropdownMenuFull.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!header.matches(':hover')) {
                dropdownMenuFull.classList.remove('visible');
            }
        }, 50);
    });
    
    // 드롭다운 메뉴에 다시 마우스가 들어오면 열린 상태 유지
    dropdownMenuFull.addEventListener('mouseenter', () => {
        dropdownMenuFull.classList.add('visible');
    });
}

// ==========================================================
// 모든 함수 실행
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    initHeroSwiper(); 
    initProductSwiper(); 
    initScrollReveal();
    initDropdownMenu();
});