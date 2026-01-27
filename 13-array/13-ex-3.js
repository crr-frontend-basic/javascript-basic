const scores = [80, 95, 60, 70, 88, 50]

const highScores=scores.filter(score => score >= 70)

const findHighScore=scores.find(score=> score >= 80)

const hasFifty= scores.includes(50)
console.log(highScores)
console.log(findHighScore)
console.log(hasFifty)