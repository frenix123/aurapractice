({
    StartGame : function(component, event, helper) {
        let DifficultyLevel = component.find("DifficultyLevel");
        let DifficultyChoice = DifficultyLevel.get("v.value");
        component.set("v.selectedValue", DifficultyChoice);
        console.log("Difficulty level "+DifficultyChoice+" selected.");
        alert("Difficulty level "+DifficultyChoice+" selected.");
        
    },

    Reshuffle : function(component, event, helper) {
        console.log('Reshuffle');

    }
})
