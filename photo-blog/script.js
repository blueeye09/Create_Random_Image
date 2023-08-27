const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

// 생성된 이미지 개수를 세기 위한 변수
let imageCount = 0;

generateBtn.addEventListener('click', () => {
    if (imageCount >= 30) {
        alert('이미지 개수가 30개 이상입니다. "이미지 초기화" 버튼을 눌러 이미지를 초기화하세요.');
        return;
    }
    
    // 랜덤한 정수값 생성 (0 이상, 1000 미만)
    const randomValue = Math.floor(Math.random() * 1000) + 1;

    // 이미지 URL 생성
    const imageUrl = `https://picsum.photos/500?random=${randomValue}`;
    
    // 이미지 태그 생성
    const img = document.createElement('img');
    img.src = imageUrl;
    
    // 이미지 컨테이너에 새 이미지 추가
    gridContainer.appendChild(img);
    
    imageCount++;
});

// "이미지 클릭!" 버튼을 눌렀을 때
const resetBtn = document.createElement('button');
resetBtn.textContent = '이미지 초기화';
resetBtn.addEventListener('click', () => {
    if (imageCount > 0) {
        const confirmDelete = confirm('모든 사진을 지우시겠습니까?');
        if (confirmDelete) {
            gridContainer.innerHTML = ''; // 모든 이미지 삭제
            imageCount = 0; // 이미지 개수 초기화
        }
    }
});
document.querySelector('.container').appendChild(resetBtn);
