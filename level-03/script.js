// This is a closure function https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
(function() {

  

  var initialize = function() {

  var dept1=document.getElementById("dept1");

  var  dept2=document.getElementById("dept2");

      
    //dept1.selectedIndex=0
    //dept2.selectedIndex=1

    /*
    
      1. Add all your event bindings here. Please avoid binding events inline and add your event listeners here.

      onSubmit callback
      disableDuplicateSecondaryDepartment callback,...
    */
    butsub=document.getElementById("submit");
    butsub.addEventListener("click",onSubmit);
      //    var reg_form = document.forms.item(0); 
      //reg_form.addEventListener('submit', onSubmit);

    dept1.addEventListener("change",disableDuplicateSecondaryDepartment);
    //dept2.addEventListener("change",disableDuplicatePrimaryDepartment);


  };



  var disableDuplicatePrimaryDepartment = function(event) {
    // 2. in department2, Should disable the option selected in department1

        //alert(dept1.selectedIndex);

        while (dept1.value===dept2.value)
        {
            val1=dept2.selectedIndex;
            if (val1==3)
                val1=0;
            dept1.selectedIndex=val1+1;
        }

        var len=dept1.length;

        for (i=0;i<len;++i)
        {
          if (i != dept2.selectedIndex)
          {
              dept1.options[i].disabled=false;
          }
        }
        
      //  alert(dept1.value);
      //alert(dept2.value);
   //     var opt=dept1.options[dept1.selectedIndex].value;
        dept1.options[dept2.selectedIndex].disabled=true;

        //alert(dept2.value);
        //dept2.options[opt].disabled=true;
  }

  var disableDuplicateSecondaryDepartment = function(event) {
    // 2. in department2, Should disable the option selected in department1

        while (dept1.value===dept2.value)
        {
            val=dept1.selectedIndex;
            if (val==3)
                val=0;
            dept2.selectedIndex=val+1;
        }

        var len=dept2.length;

        for (i=0;i<len;++i)
        {
          if (i != dept1.selectedIndex)
          {
              dept2.options[i].disabled=false;
          }
        }
        
      //  alert(dept1.value);
      //alert(dept2.value);
   //     var opt=dept1.options[dept1.selectedIndex].value;
        dept2.options[dept1.selectedIndex].disabled=true;

        //alert(dept2.value);
        //dept2.options[opt].disabled=true;
  }

  var constructData = function() {
    var data = {};

    data["name"]=document.getElementById("name").value;
    data["phno"]=document.getElementById("phno").value;
    data["emailaddress"]=document.getElementById("emailaddress").value;
    data["department1"]=document.getElementById("dept1").value;
    data["department2"]=document.getElementById("dept2").value;

//    alert(data["department1"]);
  //  alert(data["department2"]);
    
    // 3. Construct data from the form here. Please ensure that the keys are the names of input elements
    return data;
  }

  var validateResults = function(data) {
    var isValid = true;
    
   // var regex = /[^A-Za-z0-9@.]+$/;
    //var regex = /[^A-Za-z0-9@.]/;

     if (data["name"].length > 100)
     {
        isValid=false;
     }
     else if (data["phno"].length > 10)
      {
        isValid=false;
     }
      //else if( (!data["emailaddress"].endsWith("college.edu") && (/[^a-zA-Z0-9@\.]+$/.test(data["emailaddress"])))     
      else if(!data["emailaddress"].endsWith("college.edu"))     
      {
          isValid=false;
      }
      else if(data["department1"] == data["department2"])
      {
          isValid=false;
      }

    /*else if (! regex.test(data["emailaddress"]))
    {
        isValid=false;
    } */
     
    return isValid;
        // 4. Check if the data passes all the validations here
    //}
  };

  var onSubmit = function(event) {
    // 5. Figure out how to avoid the redirection on form submit


    var data = constructData();

    if (validateResults(data)) {
       printResults(data);
    } else {
      var resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = '';
      resultsDiv.classList.add("hide");
    }
    event.preventDefault();

  };

  var printResults = function(data) {
    var constructElement = function([key, value]) {
      return `<p class='result-item'>${key}: ${value}</p>`;
    };

    var resultHtml = (Object.entries(data) || []).reduce(function(innerHtml, keyValuePair) {
      debugger
      return innerHtml + constructElement(keyValuePair);
    }, '');
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultHtml;
    resultsDiv.classList.remove("hide");
  };


  /*
    Initialize the javascript functions only after the html DOM content has loaded.
    This is to ensure that the elements are present in the DOM before binding any event listeners to them.
  */
  document.addEventListener('DOMContentLoaded', initialize);
})();
