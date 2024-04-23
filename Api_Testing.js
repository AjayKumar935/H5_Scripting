var Api_Testing = (function() {

    function H5Sample(args) {

        this.controller = args.controller;
        this.contentElement = this.controller.GetContentElement();

    }

    H5Sample.Init = function(args) {

        new H5Sample(args).run();
    };



//TEDL
//CUNO
//RLDT


    H5Sample.prototype.run=function(){


        var buttonElement = new ButtonElement();
        buttonElement.Name = "Ajay A";
        buttonElement.Value = "Display Name and Status";
        buttonElement.Position = new PositionElement();
        buttonElement.Position.Top = 3;
        buttonElement.Position.Left = 80;


        let button=this.contentElement.AddElement(buttonElement);



        





        var orno=ScriptUtil.GetFieldValue("OAORNO");
        console.log("The ORNO is "+orno);


        var TEDL;
        var CUNO;
        var RLDT;

        let prog="OIS100MI";
        let tranxn="GetHead";
        let rec={
            ORNO:orno
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

                    console.log("The response is "+response.items[0].TEDL)

                    TEDL=response.items[0].TEDL;
                    CUNO=response.items[0].CUNO;
                    RLDT=response.items[0].RLDT;
                    ADID=response.items[0].ADID;
                    //resolve(response)
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


            var labelElement=new LabelElement();
            labelElement.Name="Ajay A";
            labelElement.Value="ADID";
            labelElement.Position=new PositionElement();
            labelElement.Position.Top=5;
            labelElement.Position.Left=77;

            this.contentElement.AddElement(labelElement);

            var textBoxElement=new TextBoxElement();
            textBoxElement.Name="Ajay A";
            
            textBoxElement.Position=new PositionElement();
            textBoxElement.isEnabled=false;
            
            textBoxElement.Position.Top=5;
            textBoxElement.Position.Left=85;
            
            this.contentElement.AddElement(textBoxElement);

       

        button.click({},function(){

            // ConfirmDialog.ShowMessageDialog({
            //     dialogType:"Message",
            //     header:"POP-UP",
            //     message:"CUNO : "+CUNO+"<br>"+ " TEDL : "+TEDL+"<br>"+ " RLDT : "+RLDT

            // })

            textBoxElement.Value=ADID;
           
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