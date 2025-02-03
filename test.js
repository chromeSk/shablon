// Функция для генерации случайного мема
async function generateMeme() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        const memes = data.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];

        document.getElementById('memeImage').src = randomMeme.url;
        document.getElementById('memeTitle').innerText = randomMeme.name;
    } catch (error) {
        console.error('Ошибка при получении мема:', error);
    }
}

// Инициализируем генерацию мема при загрузке страницы
document.addEventListener('DOMContentLoaded', generateMeme);

// Находим кнопку по ID
const button = document.getElementById('generateMemeButton');

// Функция для обработки нажатий на кнопку
button.addEventListener('click', generateMeme);

// Функция для добавления комментария
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentsList = document.getElementById('commentsList');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        commentInput.value = '';
    }
}

// Находим кнопку отправки комментария по ID
const submitCommentButton = document.getElementById('submitCommentButton');

// Функция для обработки нажатий на кнопку отправки комментария
submitCommentButton.addEventListener('click', addComment);
