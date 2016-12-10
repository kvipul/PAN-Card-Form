//add event listener to file upload button
document.getElementById('file-upload').addEventListener('change', fileUploaded, false);

//input field validation for PAN no.
//only alpha-numeric allowed
$('#pan').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
		event.preventDefault();
		document.getElementById('panError').innerHTML = "Only Alpha-Numeric Allowed!";
		return false;
    }else {
		document.getElementById('panError').innerHTML = "";

    }
});


function fileUploaded (evt) {
	var fr = new FileReader();
	fr.onload = function(){
		//file should be of a specific format
		//So accordingly fetch value for diffirent field
		
		try{
			var txt = this.result.split('~'); //seperate different field

			var pan = txt[0].split('-')[1]; //fetch pan no.
			var name = txt[1].split('-')[1]; //fetch company name

			var date = txt[2].split('-')[1]+"-"+txt[2].split('-')[2]+"-"+txt[2].split('-')[3];  //fetch date

			//validate pan no.
			var isValidFormat = /^[a-zA-Z0-9]+$/.test(pan);///^[A-Z0-9]+$/i.test(pan); for case insensitive
			// console.log(pan)

			//check date is in valid format or not
			var d = new Date(date);
			// console.log(d=="Invalid Date");


			//if pan or date format is invalid throw error
			if(!isValidFormat || d=="Invalid Date"){
				throw "Invalid PAN or Date details !!"; 
			}

			//else fill the input fields
			document.getElementById('pan').value = pan;
			document.getElementById('name').value = name;		
			document.getElementById('date').value = date;

			document.getElementById('file-upload').value = "";
		}
		catch(e){
			console.log(e); 

			//alert message for invalid type of the file
			alert("Textformat of the selected file is not correct!! Please check the Textformat of the file.");
			document.getElementById('pan').value = "";
			document.getElementById('name').value = "";		
			document.getElementById('date').value = "";
			document.getElementById('file-upload').value = "";
		}
		

	};

	fr.readAsText(this.files[0]);//read file
}