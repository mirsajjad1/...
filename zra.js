// Define your story data as an array of objects
const storyData = [
    {
        id: 1,
        text: "Hi love! Remember when we first met? It was a magical moment. Do you remember what colour dress you wore??",
        choices: [
            { text: "Yes,!", next: 2 },
            { text: "Not now, let's move forward", next: 3 }
        ]
    },
    {
        id: 2,
        text: "it was great when i saw you. that feeling i felt that day.. i can't describe in word.Do you want to know what would happen to me without you? ",
        choices: [
            { text: "Yes,", next: 4 },
            { text: "Maybe later", next: 3 }
        ]
    },
    {
        id: 3,
        text: "I think you know well..Do you want to know how much I love you? <br> Ready?",
        choices: [
            { text: "Absolutely!", next: 5 }
        ]
    },
    {
        id: 4,
        text: " I'm sure I'm going to die inside.<br><br> Didn't I tell you??",
        choices: [
            { text: "It really is", next: 3 }
        ]
    },
    {
        id: 5,
        text: " what you saw that was just beginning. I love you more than words can say. ",
        choices: [
            { text: "click here", next: 6 },
        ]
    },
    {
        id: 6,
        text: "tumi je amake bolo ami tmk chara better thakbo henten tumi ki mone koro ami hutase eto kichhu korsi.ami tmk bhalobashsi kintu tokhoni" +
            "tmk bolsi jokhon ami nije sure hoisi je jai hok tmk bhalobashte parbo jai hoye jak " +
            "tmr sathe thakte parbo.<br> ami kokhono tmk chharte parbo na tumi bolleo na amr pokkhe" +
            "possible na...ami amr shes porjonto tmkei bhalobashbo tmk chhara onno karo dike jodi bolo" +
            "inshallah takabo o na<span style='color: red'>(hut kore pore gele oita onicchakrito)</span>" +
            "ar onno kawke pochhondo koraw ehhhhhhh ashbei na kokhono <br><br>" +
            "",
    }
];

let currentStory = storyData[0];

// Function to update the story text and choices on the page
function updateStory() {
    const storyDiv = document.getElementById("story");
    const choicesDiv = document.getElementById("choices");

    // Update story text
    storyDiv.innerHTML = currentStory.text;

    // Clear existing choices
    choicesDiv.innerHTML = "";

    // Create buttons for each choice
    if (currentStory.choices.length > 0) {
        currentStory.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.className = "choice-button";
            button.onclick = () => {
                // Find the next part of the story
                currentStory = storyData.find(item => item.id === choice.next);
                updateStory();
            };
            choicesDiv.appendChild(button);
        });
    }
}

// Initialize the game when page loads
window.onload = updateStory;
