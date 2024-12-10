let answers = {};

function selectAnswer(question, answer) {
    answers[question] = answer;
    console.log(answers);

    // 모든 질문이 끝났을 때, 메뉴 추천
    if (Object.keys(answers).length === 5) {
        recommendFood();
    }
}

function recommendFood() {
    let recommendedFood = [];

    // 질문에 맞는 음식을 추천하기 위한 간단한 로직
    if (answers['spicy'] === true) {
        recommendedFood.push("매운 떡볶이");
    } else {
        recommendedFood.push("치킨");
    }

    // 추천 결과 출력
    document.getElementById('result').innerHTML = `
        <h2>추천된 음식: ${recommendedFood.join(', ')}</h2>
    `;
}