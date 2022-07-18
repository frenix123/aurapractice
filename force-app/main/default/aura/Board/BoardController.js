({
    doThis : function(component, event, helper) {
        console.log("Initialization Complete");
        const words = helper.helperMethod(8);
        console.log(words);
        const winnerWord = helper.winWord(words)
        console.log(winnerWord);
        component.set("v.words",words);
        component.set("v.winWord", winnerWord);

    }
})
