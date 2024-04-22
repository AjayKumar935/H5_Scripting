
var H5Sample_Ajay1 = (function() {

    function H5Sample(args) {

        this.controller = args.controller;
        this.contentElement = this.controller.GetContentElement();

    }

    H5Sample.Init = function(args) {

        new H5Sample(args).run();
    };

    H5Sample.prototype.run=function(){
        debugger;
        console.log("Iam adding the label");


     
        var Customer=ScriptUtil.GetFieldValue("OACUNO");
        var CoNo=ScriptUtil.GetFieldValue("OAORNO");
        var Facility=ScriptUtil.GetFieldValue("OAFACI");


       

        var buttonElement = new ButtonElement();
        buttonElement.Name = "Ajay A";
        buttonElement.Value = "Get payer";
        buttonElement.Position = new PositionElement();
        buttonElement.Position.Top = 3;
        buttonElement.Position.Left = 80;
        let button=this.contentElement.AddElement(buttonElement);

        button.click({},function(){
            ConfirmDialog.ShowMessageDialog({
                dialogType:"Message",
                header:"POP-UP",
                message:"Customer : "+Customer+"<br>"+ " CoNo : "+CoNo+"<br>"+ " Facility : "+Facility

            })
        })

        
        





        console.log("Iam adding the label");



    }

    return H5Sample;
}())