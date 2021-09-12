const textarea = document.getElementById('text');
const changeWord = document.getElementById('changed-word');
const targetWord  = document.getElementById('target-word');
const submit = document.getElementById('submit');
const result = document.getElementById('new-text');

// 함수를 만드는 두가지 방법(function)
function changeText(text, word, newWord) {
	const changedText = text.replaceAll(word, newWord)
	return changedText
}

// 함수를 만드는 두가지 방법(arrow function)
const onClickSubmit = (e) => {
	const text = textarea.value
	const word = targetWord.value
	const newWord = changeWord.value
	
	result.value = changeText(text, word, newWord)
}

submit.addEventListener('click', onClickSubmit)
