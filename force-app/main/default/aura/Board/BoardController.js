({
    doThis : function(component, event, helper) {
        console.log("Initialization Complete");
        let hardness = 0;
        const mode = component.get("v.mode");
        if(mode && mode ==="Easy"){
            hardness=3;
        }else if(mode==="Medium"){
            hardness=4;
        }else{
            hardness=6
        }
        const words = helper.helperMethod(hardness*hardness);
        console.log(words);
        const winnerWord = helper.winWord(words)
        console.log(winnerWord);
        component.set("v.words",words);
        component.set("v.winWord", winnerWord);

        const blocksize = 12/hardness;
        component.set("v.blocksize",blocksize);
        

    },

    ClickEvent : function(component, event, helper) {
        let clicks = component.get("v.clickCount") + 1;
        const value = event.getParam("Clicktext");
        if(value === component.get("v.winWord")){
            console.log("You Win.");
        }else if(clicks===3){
            console.log("You Lose");
        }
        component.set("v.clickCount",clicks);
    }
})
