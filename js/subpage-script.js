// 서브 페이지 스크롤 효과 (ScrollReveal.js)
document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal 초기화
    const sr = ScrollReveal({
        distance: '40px', // 아래에서 40px 이동하며 나타남
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: false // 한 번만 나타남
    });

    // 핵심 기능 아이콘과 콘텐츠 블록에 애니메이션 적용
    sr.reveal('.feature-icons .icon-item', { 
        interval: 150, // 아이콘이 순차적으로 나타나도록 설정
        origin: 'top' 
    });

    sr.reveal('.content-block', { 
        interval: 100,
        origin: 'bottom',
        distance: '80px' // 더 길게 이동하며 나타남
    });

    // 제품 상세 정보(옵션 영역)도 나타나도록 설정
    sr.reveal('.options-area', { 
        delay: 200, 
        origin: 'right',
        distance: '50px'
    });
});