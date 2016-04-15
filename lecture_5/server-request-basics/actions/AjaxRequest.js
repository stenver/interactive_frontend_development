export default (url, method, onSuccess, onFailure) => {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
        try {
          onSuccess(JSON.parse(xmlhttp.responseText));
        } catch (error) {
          onFailure(error)
        }
      } else {
        onFailure(xmlhttp.error);
      }
    }
  };
  xmlhttp.open(method, url, true);
  xmlhttp.send();
};
