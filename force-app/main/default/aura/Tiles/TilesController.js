({
    Choose : function(component, event, helper) {
        const open = component.get("v.open");
        const clickedtext = component.get("v.Text")
        if(!open){
            component.set("v.open",true);
            let event = component.getEvent("Winclick");
            compEvents.setParam({Clicktext, clickedtext});
            compEvents.fire();
        }

    }
})
