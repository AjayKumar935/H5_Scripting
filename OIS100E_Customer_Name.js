//C:\Users\SPURGEE\Desktop\H5 Scripting\OIS100_E_Customer_Name.js
//C:\Users\SPURGEE\Desktop\H5 Scripting\OIS100E_Customer_Name.js
var OIS100E_Customer_Name = (function() {

    function H5Sample(args) {

        this.controller = args.controller;
        this.contentElement = this.controller.GetContentElement();

    }

    H5Sample.Init = function(args) {

        new H5Sample(args).run();
    };

    H5Sample.prototype.run=function(){


        var labelElement=new LabelElement();
        labelElement.Name="Ajay A";
        labelElement.Value="Customer Name ";
        labelElement.Position=new PositionElement();
        labelElement.Position.Top=3;
        labelElement.Position.Left=70;
        this.contentElement.AddElement(labelElement);


        var textBoxElement=new TextBoxElement();
            textBoxElement.Name="Ajay A";
            
            textBoxElement.Position=new PositionElement();
            textBoxElement.isEnabled=false;
            //textBoxElement.Position.Width=5;
            textBoxElement.Position.Top=3;
            textBoxElement.Position.Left=85;
            
            this.contentElement.AddElement(textBoxElement);
        

        var CUNM;
        let prog="CRS610MI";
        let tranxn="GetBasicData";
        let rec={
            CUNO:"Y20000"
        }


        let request = new MIRequest();
            request.program = prog;
            request.transaction = tranxn;
            request.outputFields = [];
            request.record = rec;
            MIService.Current.executeRequest(request).then((response) => {
                if(response.errorMessage === undefined) {
                    console.log("API Call " + prog + "/" + tranxn + "Successfull!");
                    console.log(response);

                    CUNM=response.item.CUNM;
                    textBoxElement.Value=CUNM;

                    console.log("CUNM "+CUNM);


                    
                }else{
                    console.log("API Call " + prog + "/" + tranxn + "Failed!")
                    console.log(response.errorMessage);
                   // reject(response.errorMessage)
                }
            }).catch((response) => {
                console.log("API Call " + prog + "/" + tranxn + "Failed!")
                console.log(response.errorMessage);
                //reject(response.errorMessage)
            })




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