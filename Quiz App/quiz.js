const quizData =[
    {
        Question: '1. What is the meaning of the word "ephemeral"?',
        A: 'Enduring for a long time',
        B: 'Short-lived',
        C: 'Fragile',
        D: 'Unpredictable',
        correct_answer: 'B',
    },
    {
        Question: '2. Which sentence uses the correct form of the verb "lie"?',
        A: 'He has lain in bed all day.',
        B: 'He has laid in bed all day.',
        C: 'He lies in bed all day.',
        D: 'He lied in bed all day.',
        correct_answer: 'A',
    },
    {
        Question: '3. What does the word "ubiquitous" mean?',
        A: 'Rarely seen',
        B: 'Present everywhere',
        C: 'Unique',
        D: 'Temporary',
        correct_answer: 'B',
    },
    {
        Question: '4. Identify the correct sentence structure:',
        A: 'Despite being tired, he went out with friends.',
        B: 'Despite he was tired, he went out with friends.',
        C: 'Because being tired, he went out with friends.',
        D: 'Although tired, he went out with friends.',
        correct_answer: 'A',
    },
    {
        Question: '5. What is the synonym of "meticulous"?',
        A: 'Careless',
        B: 'Careful',
        C: 'Hasty',
        D: 'Indifferent',
        correct_answer: 'B',
    },
    {
        Question: '6. Which word best completes the sentence? "The _______ weather made it difficult to continue the hike."',
        A: 'pleasant',
        B: 'adverse',
        C: 'calm',
        D: 'sunny',
        correct_answer: 'B',
    },
    {
        Question: '7. What does the idiom "break the ice" mean?',
        A: 'To solve a problem',
        B: 'To start a conversation in a social setting',
        C: 'To damage something',
        D: 'To interrupt someone',
        correct_answer: 'B',
    },
    {
        Question: '8. Choose the correct article: "______ apple a day keeps the doctor away."',
        A: 'An',
        B: 'A',
        C: 'The',
        D: 'No article needed',
        correct_answer: 'A',
    },
    {
        Question: '9. What is the opposite of "diligent"?',
        A: 'Lazy',
        B: 'Hardworking',
        C: 'Energetic',
        D: 'Ambitious',
        correct_answer: 'A',
    },
    {
        Question: '10. Which phrase means "to be very careful about something"?',
        A: 'To tread lightly',
        B: 'To jump the gun',
        C: 'To spill the beans',
        D: 'To play it safe',
        correct_answer: 'D',
    },
    {
        Question: '11. What is the meaning of the word "amalgamate"?',
        A: 'To separate',
        B: 'To combine',
        C: 'To destroy',
        D: 'To reduce',
        correct_answer: 'B',
    },
    {
        Question: '12. Which word is a synonym for "tenacious"?',
        A: 'Stubborn',
        B: 'Flexible',
        C: 'Weak',
        D: 'Casual',
        correct_answer: 'A',
    },
    {
        Question: '13. Which sentence demonstrates the correct use of "who" and "whom"?',
        A: 'Whom do you think will win the race?',
        B: 'Who should I give this report to?',
        C: 'Who did you invite to the party?',
        D: 'Whom is responsible for this mess?',
        correct_answer: 'C',
    },
    {
        Question: '14. What does the word "immutable" mean?',
        A: 'Changeable',
        B: 'Unchangeable',
        C: 'Flexible',
        D: 'Adaptable',
        correct_answer: 'B',
    },
    {
        Question: '15. Which word best fits in the blank? "The scientist conducted an experiment to test her _______."',
        A: 'hypothesis',
        B: 'opinion',
        C: 'guess',
        D: 'belief',
        correct_answer: 'A',
    },
    {
        Question: '16. What is the antonym of "gregarious"?',
        A: 'Outgoing',
        B: 'Sociable',
        C: 'Introverted',
        D: 'Friendly',
        correct_answer: 'C',
    },
    {
        Question: '17. Which word is a synonym for "resilient"?',
        A: 'Fragile',
        B: 'Strong',
        C: 'Weak',
        D: 'Vulnerable',
        correct_answer: 'B',
    },
    {
        Question: '18. What does the idiom "hit the nail on the head" mean?',
        A: 'To make a mistake',
        B: 'To do something perfectly',
        C: 'To miss the point',
        D: 'To avoid responsibility',
        correct_answer: 'B',
    },
    {
        Question: '19. Which word best describes "a person who is easily deceived"?',
        A: 'Cynical',
        B: 'Gullible',
        C: 'Skeptical',
        D: 'Astute',
        correct_answer: 'B',
    },
    {
        Question: '20. What is the meaning of the word "cogent"?',
        A: 'Irrelevant',
        B: 'Persuasive',
        C: 'Confusing',
        D: 'Ambiguous',
        correct_answer: 'B',
    },
    {
        Question: '21. Which word is the opposite of "prolific"?',
        A: 'Productive',
        B: 'Fertile',
        C: 'Barren',
        D: 'Abundant',
        correct_answer: 'C',
    },
    {
        Question: '22. What does the phrase "turn a blind eye" mean?',
        A: 'To ignore something deliberately',
        B: 'To see clearly',
        C: 'To look closely',
        D: 'To observe carefully',
        correct_answer: 'A',
    },
    {
        Question: '23. Which word best fits in the blank? "The company decided to _______ its operations to increase efficiency."',
        A: 'expand',
        B: 'streamline',
        C: 'complicate',
        D: 'reduce',
        correct_answer: 'B',
    },
    {
        Question: '24. What is the meaning of the word "quixotic"?',
        A: 'Realistic',
        B: 'Pragmatic',
        C: 'Idealistic',
        D: 'Cynical',
        correct_answer: 'C',
    },
    {
        Question: '25. Which word is a synonym for "indolent"?',
        A: 'Lazy',
        B: 'Active',
        C: 'Energetic',
        D: 'Ambitious',
        correct_answer: 'A',
    },
    {
        Question: '26. What does the idiom "cost an arm and a leg" mean?',
        A: 'To be very expensive',
        B: 'To be cheap',
        C: 'To be worth it',
        D: 'To be affordable',
        correct_answer: 'A',
    },
    {
        Question: '27. Which word best describes "a person who is always ready to help others"?',
        A: 'Selfish',
        B: 'Altruistic',
        C: 'Apathetic',
        D: 'Indifferent',
        correct_answer: 'B',
    },
    {
        Question: '28. What is the antonym of "opaque"?',
        A: 'Transparent',
        B: 'Solid',
        C: 'Dark',
        D: 'Heavy',
        correct_answer: 'A',
    },
    {
        Question: '29. Which word best fits in the blank? "The teacher explained the concept in a _______ manner."',
        A: 'confusing',
        B: 'clear',
        C: 'complex',
        D: 'vague',
        correct_answer: 'B',
    },
    {
        Question: '30. What is the meaning of the word "precarious"?',
        A: 'Stable',
        B: 'Secure',
        C: 'Uncertain',
        D: 'Permanent',
        correct_answer: 'C',
    },
    {
        Question: '31. Which word is a synonym for "verbose"?',
        A: 'Concise',
        B: 'Wordy',
        C: 'Silent',
        D: 'Quiet',
        correct_answer: 'B',
    },
    {
        Question: '32. What does the idiom "let the cat out of the bag" mean?',
        A: 'To reveal a secret',
        B: 'To keep something hidden',
        C: 'To let someone go free',
        D: 'To catch someone',
        correct_answer: 'A',
    },
    {
        Question: '34. What is the antonym of "tranquil"?',
        A: 'Peaceful',
        B: 'Serene',
        C: 'Chaotic',
        D: 'Calm',
        correct_answer: 'C',
    },
    {
        Question: '35. Which word best fits in the blank? "The scientist made a groundbreaking _______."',
        A: 'discovery',
        B: 'mistake',
        C: 'error',
        D: 'failure',
        correct_answer: 'A',
    },
    {
        Question: '36. What is the meaning of the word "redundant"?',
        A: 'Necessary',
        B: 'Useless',
        C: 'Essential',
        D: 'Important',
        correct_answer: 'B',
    },
    {
        Question: '36. What is the correct usage of the word "intermittent"?',
        A: 'Unpredictable',
        B: 'Constant',
        C: 'Occasional',
        D: 'Uncertain',
        correct_answer: 'C',
    },
    {
        Question: '37. Which word is a synonym for "scrupulous"?',
        A: 'Careless',
        B: 'Conscientious',
        C: 'Negligent',
        D: 'Reckless',
        correct_answer: 'B',
    },
    {
        Question: '38. What does the idiom "bite the bullet" mean?',
        A: 'To endure pain or difficulty',
        B: 'To avoid responsibility',
        C: 'To enjoy something',
        D: 'To eat quickly',
        correct_answer: 'A',
    },
    {
        Question: '39. Which word best describes "a person who is very knowledgeable"?',
        A: 'Ignorant',
        B: 'Erudite',
        C: 'Uneducated',
        D: 'Inexperienced',
        correct_answer: 'B',
    },
    {
        Question: '40. What is the antonym of "prudent"?',
        A: 'Wise',
        B: 'Cautious',
        C: 'Reckless',
        D: 'Careful',
        correct_answer: 'C',
    },
    {
        Question: '41. Which word best fits in the blank? "The project was completed ahead of _______."',
        A: 'time',
        B: 'schedule',
        C: 'plan',
        D: 'goal',
        correct_answer: 'B',
    },
    {
        Question: '42. What is the meaning of the word "elusive"?',
        A: 'Easy to find',
        B: 'Difficult to catch',
        C: 'Obvious',
        D: 'Clear',
        correct_answer: 'B',
    },
    {
        Question: '43. Which word is a synonym for "obstinate"?',
        A: 'Flexible',
        B: 'Stubborn',
        C: 'Compliant',
        D: 'Agreeable',
        correct_answer: 'B',
    },
    {
        Question: '44. What does the idiom "on the same page" mean?',
        A: 'To disagree',
        B: 'To understand each other',
        C: 'To read together',
        D: 'To write together',
        correct_answer: 'B',
    },
    {
        Question: '45. Which word best describes "a person who is always cheerful"?',
        A: 'Gloomy',
        B: 'Melancholic',
        C: 'Cheerful',
        D: 'Sad',
        correct_answer: 'C',
    },
    {
        Question: '46. What is the antonym of "superficial"?',
        A: 'Deep',
        B: 'Shallow',
        C: 'Surface-level',
        D: 'Trivial',
        correct_answer: 'A',
    },
    {
        Question: '47. Which word best fits in the blank? "The politician gave a _______ speech that inspired many people."',
        A: 'boring',
        A: 'inspiring',
        C: 'mundane',
        D: 'uninteresting',
        correct_answer: 'B',
    },
    {
        Question: '48. What is the meaning of the word "imminent"?',
        A: 'Delayed',
        B: 'Approaching',
        C: 'Past',
        D: 'Long-term',
        correct_answer: 'B',
    },
    {
        Question: '49. Which word is a synonym for "ingenious"?',
        A: 'Clumsy',
        B: 'Creative',
        C: 'Ordinary',
        D: 'Simple',
        correct_answer: 'B',
    },
    {
        Question: '50. What does the idiom \"pull someone leg\" mean?',
        A: 'To hurt someone',
        B: 'To tease someone',
        C: 'To walk slowly',
        D: 'To run fast',
        correct_answer: 'B',
    },
    {
        Question: '51. Which word best describes "a person who is very organized"?',
        A: 'Disorganized',
        B: 'Methodical',
        C: 'Chaotic',
        D: 'Messy',
        correct_answer: 'B',
    },
    {
        Question: '52. What is the antonym of "transparent"?',
        A: 'Opaque',
        B: 'Clear',
        C: 'Visible',
        D: 'Light',
        correct_answer: 'A',
    },
    {
        Question: '53. Which word best fits in the blank? "The decision was made after much _______."',
        A: 'negligence',
        B: 'deliberation',
        C: 'carelessness',
        D: 'haste',
        correct_answer: 'B',
    },
    {
        Question: '54. What is the meaning of the word "pervasive"?',
        A: 'Rare',
        B: 'Widespread',
        C: 'Localized',
        D: 'Isolated',
        correct_answer: 'B',
    },
    {
        Question: '55. Which word is a synonym for "meticulous"?',
        A: 'Careless',
        B: 'Detailed',
        C: 'Sloppy',
        D: 'Rough',
        correct_answer: 'B',
    },
    {
        Question: '56. What does the idiom "spill the beans" mean?',
        A: 'To cook beans',
        B: 'To reveal a secret',
        C: 'To eat beans',
        D: 'To plant beans',
        correct_answer: 'B',
    },
    {
        Question: '57. Which word best describes "a person who is very ambitious"?',
        A: 'Lazy',
        B: 'Motivated',
        C: 'Content',
        D: 'Relaxed',
        correct_answer: 'B',
    },
    {
        Question: '58. What is the antonym of "concise"?',
        A: 'Brief',
        B: 'Terse',
        C: 'Verbose',
        D: 'Compact',
        correct_answer: 'C',
    },
    {
        Question: '59. Which word best fits in the blank? "The scientist conducted a _______ experiment."',
        A: 'flawed',
        B: 'rigorous',
        C: 'casual',
        D: 'haphazard',
        correct_answer: 'B',
    },
    {
        Question: '60. What is the meaning of the word "ambivalent"?',
        A: 'Certain',
        B: 'Uncertain',
        C: 'Happy',
        D: 'Sad',
        correct_answer: 'B',
    },
    {
        Question: '61. Which word is a synonym for "persistent"?',
        A: 'Giving up',
        B: 'Persevering',
        C: 'Quitting',
        D: 'Reluctant',
        correct_answer: 'B',
    },
    {
        Question: '62. What does the idiom "once in a blue moon" mean?',
        A: 'Frequently',
        B: 'Rarely',
        C: 'Every day',
        D: 'Never',
        correct_answer: 'B',
    },
    {
        Question: '63. Which word best describes "a person who is very honest"?',
        A: 'Deceitful',
        B: 'Truthful',
        C: 'Lying',
        D: 'Dishonest',
        correct_answer: 'B',
    },
    {
        Question: '64. What is the antonym of "abundant"?',
        A: 'Plentiful',
        B: 'Scarce',
        C: 'Excessive',
        D: 'Overflowing',
        correct_answer: 'B',
    },
    {
        Question: '65. Which word best fits in the blank? "The solution was both _______ and effective."',
        A: 'inefficient',
        B: 'efficient',
        C: 'useless',
        D: 'pointless',
        correct_answer: 'B',
    },
    {
        Question: '66. What is the meaning of the word "capricious"?',
        A: 'Predictable',
        B: 'Unpredictable',
        C: 'Stable',
        D: 'Constant',
        correct_answer: 'B',
    },
    {
        Question: '67. Which word is a synonym for "resourceful"?',
        A: 'Helpless',
        B: 'Inventive',
        C: 'Dependent',
        D: 'Powerless',
        correct_answer: 'B',
    },
    {
        Question: '68. What does the idiom "burn the midnight oil" mean?',
        A: 'To sleep early',
        B: 'To work late into the night',
        C: 'To waste time',
        D: 'To relax',
        correct_answer: 'B',
    },
    {
        Question: '69. Which word best describes "a person who is very patient"?',
        A: 'Impatient',
        B: 'Tolerant',
        C: 'Restless',
        D: 'Anxious',
        correct_answer: 'B',
    },
    {
        Question: '70. What is the antonym of "durable"?',
        A: 'Sturdy',
        B: 'Fragile',
        C: 'Strong',
        D: 'Robust',
        correct_answer: 'B',
    }
];
const answerElt = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    // Reset the background colors for all answers
    resetAnswerStyles();

    // Enable the radio buttons again for the next question
    answerElt.forEach((answerElt) => {
        answerElt.disabled = false;
    });

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.Question;
    a_text.innerText = currentQuizData.A;
    b_text.innerText = currentQuizData.B;
    c_text.innerText = currentQuizData.C;
    d_text.innerText = currentQuizData.D;
}


function resetAnswerStyles() {
    const answerItems = document.querySelectorAll('ul li');
    answerItems.forEach(item => {
        item.style.backgroundColor = ''; // Reset background color
        item.style.color = ''; // Reset text color
    });
}


function getSelected() {
    let answer = undefined;
    answerElt.forEach((answerElt) => {
        if (answerElt.checked) {
            answer = answerElt.id;
        }
    });
    return answer;
}


function deselectAnswers(){
    answerElt.forEach((answerElt) => {
        answerElt.checked = false;

    });

}

submitBtn.addEventListener('click', () => {
    // Get the selected answer
    const answer = getSelected();

    if (answer) {
        // Check if the answer is correct
        if (answer === quizData[currentQuiz].correct_answer) {
            document.querySelector(`#${answer}`).parentNode.style.backgroundColor = 'green';
            score++;
        } else {
            document.querySelector(`#${answer}`).parentNode.style.backgroundColor = 'red';
            // Show the correct answer in green
            document.querySelector(`#${quizData[currentQuiz].correct_answer}`).parentNode.style.backgroundColor = 'green';
        }
        // Disable all radio buttons after answering
        answerElt.forEach((answerElt) => {
            answerElt.disabled = true;
        });

        // Delay before moving to the next question
        setTimeout(() => {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <div class="thank-you-message">
                        <h2>You answered correctly ${score}/${quizData.length} questions. <br> <i>Thank You!</i></h2>
                        <h3><i>Practice makes perfect, it's time to practice! Go a head.</i></h3>
                        <button onclick="location.reload()">Go Home-page</button>
                    </div>
`;

            }
        }, 2000); // 1 second delay to show the result colors
    }
});
