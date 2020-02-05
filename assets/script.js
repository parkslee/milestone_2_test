

window.onload = function(){
  function ParseUrlParameter(Parameter)
  {
    const url = 'https://api.github.com/users';
      //usage : var pagename = ParseUrlParameter('page');
      var FullUrl = window.location.search.substring(1);
      var ParametersArray = FullUrl.split('&');
      for (var i=0; i<ParametersArray.length; i++)
      {
        var CurrentParameter = ParametersArray[i].split('=');
        if (CurrentParameter[0]==Parameter)
        {
          return CurrentParameter[1];
        }
      }
  }
  var PageName = ParseUrlParameter('name');
  if (typeof PageName !=='undefined'){
    if (PageName == 'studio'){
      alert(PageName);
    }

  }else{
    alert('no page parameterfound...');
  }
}

// ...
 
// ...