var H5Sample_Ajay = (function() {

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


        // var labelElement=new LabelElement();
        // labelElement.Name="Ajay A";
        // labelElement.Value="First label element";
        // labelElement.Position=new PositionElement();
        // labelElement.Position.Top=3;
        // labelElement.Position.Left=90;

        // this.contentElement.AddElement(labelElement);

        //var PayerNo=ScriptUtil.GetFieldValue("OAPYNO");
        var Customer=ScriptUtil.GetFieldValue("OACUNO");
        var CoNo=ScriptUtil.GetFieldValue("OAORNO");
        var Facility=ScriptUtil.GetFieldValue("OAFACI");


        //var PayerNo=document.querySelector("#OAPYNO").value;
        //("OAPYNO");

        var buttonElement = new ButtonElement();
        buttonElement.Name = "Ajay A";
        buttonElement.Value = "Get payer";
        buttonElement.Position = new PositionElement();
        buttonElement.Position.Top = 3;
        buttonElement.Position.Left = 90;
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


//naming convention
//Pannel_Name_Purposeof_the_scriptt








// Name: WARLDZ
// Table: OOHEAD
// Field: OARLDZ
// Field help: RLDZ
// Panel name: OIA100E0
// Type: String
// Max length: 6