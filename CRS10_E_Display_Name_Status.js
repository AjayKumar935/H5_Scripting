
//22-04-2024
// H5 Script Assignment - I
// Create a H5 script which adds a button on panel 
// CRS610/E and show Name and Status in a dialog box when the button is clicked. 
// (Use the H5 script naming convention)



var CRS10_E_Display_Name_Status = (function() {

    function H5Sample(args) {

        this.controller = args.controller;
        this.contentElement = this.controller.GetContentElement();

    }

    H5Sample.Init = function(args) {

        new H5Sample(args).run();
    };

    H5Sample.prototype.run=function(){
        

     
        var Name=ScriptUtil.GetFieldValue("WRCUNM");
        var Status=ScriptUtil.GetFieldValue("WRSTAT");


       

        var buttonElement = new ButtonElement();
        buttonElement.Name = "Ajay A";
        buttonElement.Value = "Display Name and Status";
        buttonElement.Position = new PositionElement();
        buttonElement.Position.Top = 3;
        buttonElement.Position.Left = 80;
        let button=this.contentElement.AddElement(buttonElement);

        button.click({},function(){
            ConfirmDialog.ShowMessageDialog({
                dialogType:"Message",
                header:"POP-UP",
                message:"Name : "+Name+"<br>"+ " Status : "+Status

            })
        })
    }

    return H5Sample;
}())