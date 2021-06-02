(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    if (kid1.value=="" || kid2.value=="" || kid3.value=="" || kid4.value=="" || kid5.value=="" || kid6.value=="" || kid7.value=="" || kid8.value=="" || kid9.value=="" || kid10.value=="" || kid11.value=="" || kid12.value=="" || kid13.value=="" || kid14.value=="" || kid15.value=="" || kid16.value=="" || kid17.value=="" || kid18.value=="" || kid19.value=="" || kid20.value=="" || kid21.value=="" || kid22.value=="" || kid23.value=="" || kid24.value=="" || kid25.value=="" || kid26.value=="" || kid27.value=="" || kid28.value=="" || kid29.value=="" || kid30.value=="" || kid31.value=="" || kid32.value=="" || kid33.value=="" || kid34.value=="" || kid35.value=="" || kid36.value=="" || kid37.value=="" || kid38.value=="" || kid39.value=="" || kid40.value=="" || kid41.value=="") {
      alert("It seems like you missed a few nominations. Please verify.");
      return;
    }

    if (kid1.value==kid2.value || kid1.value==kid3.value || kid1.value==kid4.value || kid1.value==kid5.value || kid1.value==kid6.value || kid1.value==kid7.value || kid1.value==kid8.value || kid1.value==kid9.value || kid1.value==kid10.value 
      || kid1.value==kid11.value || kid1.value==kid12.value || kid1.value==kid13.value || kid1.value==kid14.value || kid1.value==kid15.value || kid1.value==kid16.value || kid1.value==kid17.value || kid1.value==kid18.value || kid1.value==kid19.value 
      || kid1.value==kid20.value || kid1.value==kid21.value || kid1.value==kid22.value || kid1.value==kid23.value || kid1.value==kid24.value || kid1.value==kid25.value || kid1.value==kid26.value || kid1.value==kid27.value || kid1.value==kid28.value 
      || kid1.value==kid29.value || kid1.value==kid30.value || kid1.value==kid31.value || kid1.value==kid32.value || kid1.value==kid33.value || kid1.value==kid34.value || kid1.value==kid35.value || kid1.value==kid36.value || kid1.value==kid37.value 
      || kid1.value==kid38.value || kid1.value==kid39.value || kid1.value==kid40.value || kid1.value==kid41.value || kid2.value==kid3.value || kid2.value==kid4.value || kid2.value==kid5.value || kid2.value==kid6.value || kid2.value==kid7.value 
      || kid2.value==kid8.value || kid2.value==kid9.value || kid2.value==kid10.value || kid2.value==kid11.value || kid2.value==kid12.value || kid2.value==kid13.value || kid2.value==kid14.value || kid2.value==kid15.value || kid2.value==kid16.value 
      || kid2.value==kid17.value || kid2.value==kid18.value || kid2.value==kid19.value || kid2.value==kid20.value || kid2.value==kid21.value || kid2.value==kid22.value || kid2.value==kid23.value || kid2.value==kid24.value || kid2.value==kid25.value 
      || kid2.value==kid26.value || kid2.value==kid27.value || kid2.value==kid28.value || kid2.value==kid29.value || kid2.value==kid30.value || kid2.value==kid31.value || kid2.value==kid32.value || kid2.value==kid33.value || kid2.value==kid34.value 
      || kid2.value==kid35.value || kid2.value==kid36.value || kid2.value==kid37.value || kid2.value==kid38.value || kid2.value==kid39.value || kid2.value==kid40.value || kid2.value==kid41.value || kid3.value==kid4.value || kid3.value==kid5.value 
      || kid3.value==kid6.value || kid3.value==kid7.value || kid3.value==kid8.value || kid3.value==kid9.value || kid3.value==kid10.value || kid3.value==kid11.value || kid3.value==kid12.value || kid3.value==kid13.value || kid3.value==kid14.value 
      || kid3.value==kid15.value || kid3.value==kid16.value || kid3.value==kid17.value || kid3.value==kid18.value || kid3.value==kid19.value || kid3.value==kid20.value || kid3.value==kid21.value || kid3.value==kid22.value || kid3.value==kid23.value 
      || kid3.value==kid24.value || kid3.value==kid25.value || kid3.value==kid26.value || kid3.value==kid27.value || kid3.value==kid28.value || kid3.value==kid29.value || kid3.value==kid30.value || kid3.value==kid31.value || kid3.value==kid32.value 
      || kid3.value==kid33.value || kid3.value==kid34.value || kid3.value==kid35.value || kid3.value==kid36.value || kid3.value==kid37.value || kid3.value==kid38.value || kid3.value==kid39.value || kid3.value==kid40.value || kid3.value==kid41.value 
      || kid4.value==kid5.value || kid4.value==kid6.value || kid4.value==kid7.value || kid4.value==kid8.value || kid4.value==kid9.value || kid4.value==kid10.value || kid4.value==kid11.value || kid4.value==kid12.value || kid4.value==kid13.value 
      || kid4.value==kid14.value || kid4.value==kid15.value || kid4.value==kid16.value || kid4.value==kid17.value || kid4.value==kid18.value || kid4.value==kid19.value || kid4.value==kid20.value || kid4.value==kid21.value || kid4.value==kid22.value 
      || kid4.value==kid23.value || kid4.value==kid24.value || kid4.value==kid25.value || kid4.value==kid26.value || kid4.value==kid27.value || kid4.value==kid28.value || kid4.value==kid29.value || kid4.value==kid30.value || kid4.value==kid31.value 
      || kid4.value==kid32.value || kid4.value==kid33.value || kid4.value==kid34.value || kid4.value==kid35.value || kid4.value==kid36.value || kid4.value==kid37.value || kid4.value==kid38.value || kid4.value==kid39.value || kid4.value==kid40.value 
      || kid4.value==kid41.value || kid5.value==kid6.value || kid5.value==kid7.value || kid5.value==kid8.value || kid5.value==kid9.value || kid5.value==kid10.value || kid5.value==kid11.value || kid5.value==kid12.value || kid5.value==kid13.value 
      || kid5.value==kid14.value || kid5.value==kid15.value || kid5.value==kid16.value || kid5.value==kid17.value || kid5.value==kid18.value || kid5.value==kid19.value || kid5.value==kid20.value || kid5.value==kid21.value || kid5.value==kid22.value 
      || kid5.value==kid23.value || kid5.value==kid24.value || kid5.value==kid25.value || kid5.value==kid26.value || kid5.value==kid27.value || kid5.value==kid28.value || kid5.value==kid29.value || kid5.value==kid30.value || kid5.value==kid31.value 
      || kid5.value==kid32.value || kid5.value==kid33.value || kid5.value==kid34.value || kid5.value==kid35.value || kid5.value==kid36.value || kid5.value==kid37.value || kid5.value==kid38.value || kid5.value==kid39.value || kid5.value==kid40.value 
      || kid5.value==kid41.value || kid6.value==kid7.value || kid6.value==kid8.value || kid6.value==kid9.value || kid6.value==kid10.value || kid6.value==kid11.value || kid6.value==kid12.value || kid6.value==kid13.value || kid6.value==kid14.value 
      || kid6.value==kid15.value || kid6.value==kid16.value || kid6.value==kid17.value || kid6.value==kid18.value || kid6.value==kid19.value || kid6.value==kid20.value || kid6.value==kid21.value || kid6.value==kid22.value || kid6.value==kid23.value 
      || kid6.value==kid24.value || kid6.value==kid25.value || kid6.value==kid26.value || kid6.value==kid27.value || kid6.value==kid28.value || kid6.value==kid29.value || kid6.value==kid30.value || kid6.value==kid31.value || kid6.value==kid32.value 
      || kid6.value==kid33.value || kid6.value==kid34.value || kid6.value==kid35.value || kid6.value==kid36.value || kid6.value==kid37.value || kid6.value==kid38.value || kid6.value==kid39.value || kid6.value==kid40.value || kid6.value==kid41.value 
      || kid7.value==kid8.value || kid7.value==kid9.value || kid7.value==kid10.value || kid7.value==kid11.value || kid7.value==kid12.value || kid7.value==kid13.value || kid7.value==kid14.value || kid7.value==kid15.value || kid7.value==kid16.value 
      || kid7.value==kid17.value || kid7.value==kid18.value || kid7.value==kid19.value || kid7.value==kid20.value || kid7.value==kid21.value || kid7.value==kid22.value || kid7.value==kid23.value || kid7.value==kid24.value || kid7.value==kid25.value 
      || kid7.value==kid26.value || kid7.value==kid27.value || kid7.value==kid28.value || kid7.value==kid29.value || kid7.value==kid30.value || kid7.value==kid31.value || kid7.value==kid32.value || kid7.value==kid33.value || kid7.value==kid34.value 
      || kid7.value==kid35.value || kid7.value==kid36.value || kid7.value==kid37.value || kid7.value==kid38.value || kid7.value==kid39.value || kid7.value==kid40.value || kid7.value==kid41.value || kid8.value==kid9.value || kid8.value==kid10.value 
      || kid8.value==kid11.value || kid8.value==kid12.value || kid8.value==kid13.value || kid8.value==kid14.value || kid8.value==kid15.value || kid8.value==kid16.value || kid8.value==kid17.value || kid8.value==kid18.value || kid8.value==kid19.value 
      || kid8.value==kid20.value || kid8.value==kid21.value || kid8.value==kid22.value || kid8.value==kid23.value || kid8.value==kid24.value || kid8.value==kid25.value || kid8.value==kid26.value || kid8.value==kid27.value || kid8.value==kid28.value 
      || kid8.value==kid29.value || kid8.value==kid30.value || kid8.value==kid31.value || kid8.value==kid32.value || kid8.value==kid33.value || kid8.value==kid34.value || kid8.value==kid35.value || kid8.value==kid36.value || kid8.value==kid37.value 
      || kid8.value==kid38.value || kid8.value==kid39.value || kid8.value==kid40.value || kid8.value==kid41.value || kid9.value==kid10.value || kid9.value==kid11.value || kid9.value==kid12.value || kid9.value==kid13.value || kid9.value==kid14.value 
      || kid9.value==kid15.value || kid9.value==kid16.value || kid9.value==kid17.value || kid9.value==kid18.value || kid9.value==kid19.value || kid9.value==kid20.value || kid9.value==kid21.value || kid9.value==kid22.value || kid9.value==kid23.value 
      || kid9.value==kid24.value || kid9.value==kid25.value || kid9.value==kid26.value || kid9.value==kid27.value || kid9.value==kid28.value || kid9.value==kid29.value || kid9.value==kid30.value || kid9.value==kid31.value || kid9.value==kid32.value 
      || kid9.value==kid33.value || kid9.value==kid34.value || kid9.value==kid35.value || kid9.value==kid36.value || kid9.value==kid37.value || kid9.value==kid38.value || kid9.value==kid39.value || kid9.value==kid40.value || kid9.value==kid41.value 
      || kid10.value==kid11.value || kid10.value==kid12.value || kid10.value==kid13.value || kid10.value==kid14.value || kid10.value==kid15.value || kid10.value==kid16.value || kid10.value==kid17.value || kid10.value==kid18.value || kid10.value==kid19.value 
      || kid10.value==kid20.value || kid10.value==kid21.value || kid10.value==kid22.value || kid10.value==kid23.value || kid10.value==kid24.value || kid10.value==kid25.value || kid10.value==kid26.value || kid10.value==kid27.value || kid10.value==kid28.value 
      || kid10.value==kid29.value || kid10.value==kid30.value || kid10.value==kid31.value || kid10.value==kid32.value || kid10.value==kid33.value || kid10.value==kid34.value || kid10.value==kid35.value || kid10.value==kid36.value || kid10.value==kid37.value 
      || kid10.value==kid38.value || kid10.value==kid39.value || kid10.value==kid40.value || kid10.value==kid41.value || kid11.value==kid12.value || kid11.value==kid13.value || kid11.value==kid14.value || kid11.value==kid15.value || kid11.value==kid16.value 
      || kid11.value==kid17.value || kid11.value==kid18.value || kid11.value==kid19.value || kid11.value==kid20.value || kid11.value==kid21.value || kid11.value==kid22.value || kid11.value==kid23.value || kid11.value==kid24.value || kid11.value==kid25.value 
      || kid11.value==kid26.value || kid11.value==kid27.value || kid11.value==kid28.value || kid11.value==kid29.value || kid11.value==kid30.value || kid11.value==kid31.value || kid11.value==kid32.value || kid11.value==kid33.value || kid11.value==kid34.value 
      || kid11.value==kid35.value || kid11.value==kid36.value || kid11.value==kid37.value || kid11.value==kid38.value || kid11.value==kid39.value || kid11.value==kid40.value || kid11.value==kid41.value || kid12.value==kid13.value || kid12.value==kid14.value 
      || kid12.value==kid15.value || kid12.value==kid16.value || kid12.value==kid17.value || kid12.value==kid18.value || kid12.value==kid19.value || kid12.value==kid20.value || kid12.value==kid21.value || kid12.value==kid22.value || kid12.value==kid23.value 
      || kid12.value==kid24.value || kid12.value==kid25.value || kid12.value==kid26.value || kid12.value==kid27.value || kid12.value==kid28.value || kid12.value==kid29.value || kid12.value==kid30.value || kid12.value==kid31.value || kid12.value==kid32.value 
      || kid12.value==kid33.value || kid12.value==kid34.value || kid12.value==kid35.value || kid12.value==kid36.value || kid12.value==kid37.value || kid12.value==kid38.value || kid12.value==kid39.value || kid12.value==kid40.value || kid12.value==kid41.value 
      || kid13.value==kid14.value || kid13.value==kid15.value || kid13.value==kid16.value || kid13.value==kid17.value || kid13.value==kid18.value || kid13.value==kid19.value || kid13.value==kid20.value || kid13.value==kid21.value || kid13.value==kid22.value 
      || kid13.value==kid23.value || kid13.value==kid24.value || kid13.value==kid25.value || kid13.value==kid26.value || kid13.value==kid27.value || kid13.value==kid28.value || kid13.value==kid29.value || kid13.value==kid30.value || kid13.value==kid31.value 
      || kid13.value==kid32.value || kid13.value==kid33.value || kid13.value==kid34.value || kid13.value==kid35.value || kid13.value==kid36.value || kid13.value==kid37.value || kid13.value==kid38.value || kid13.value==kid39.value || kid13.value==kid40.value 
      || kid13.value==kid41.value || kid14.value==kid15.value || kid14.value==kid16.value || kid14.value==kid17.value || kid14.value==kid18.value || kid14.value==kid19.value || kid14.value==kid20.value || kid14.value==kid21.value || kid14.value==kid22.value 
      || kid14.value==kid23.value || kid14.value==kid24.value || kid14.value==kid25.value || kid14.value==kid26.value || kid14.value==kid27.value || kid14.value==kid28.value || kid14.value==kid29.value || kid14.value==kid30.value || kid14.value==kid31.value 
      || kid14.value==kid32.value || kid14.value==kid33.value || kid14.value==kid34.value || kid14.value==kid35.value || kid14.value==kid36.value || kid14.value==kid37.value || kid14.value==kid38.value || kid14.value==kid39.value || kid14.value==kid40.value 
      || kid14.value==kid41.value || kid15.value==kid16.value || kid15.value==kid17.value || kid15.value==kid18.value || kid15.value==kid19.value || kid15.value==kid20.value || kid15.value==kid21.value || kid15.value==kid22.value || kid15.value==kid23.value 
      || kid15.value==kid24.value || kid15.value==kid25.value || kid15.value==kid26.value || kid15.value==kid27.value || kid15.value==kid28.value || kid15.value==kid29.value || kid15.value==kid30.value || kid15.value==kid31.value || kid15.value==kid32.value 
      || kid15.value==kid33.value || kid15.value==kid34.value || kid15.value==kid35.value || kid15.value==kid36.value || kid15.value==kid37.value || kid15.value==kid38.value || kid15.value==kid39.value || kid15.value==kid40.value || kid15.value==kid41.value 
      || kid16.value==kid17.value || kid16.value==kid18.value || kid16.value==kid19.value || kid16.value==kid20.value || kid16.value==kid21.value || kid16.value==kid22.value || kid16.value==kid23.value || kid16.value==kid24.value || kid16.value==kid25.value 
      || kid16.value==kid26.value || kid16.value==kid27.value || kid16.value==kid28.value || kid16.value==kid29.value || kid16.value==kid30.value || kid16.value==kid31.value || kid16.value==kid32.value || kid16.value==kid33.value || kid16.value==kid34.value 
      || kid16.value==kid35.value || kid16.value==kid36.value || kid16.value==kid37.value || kid16.value==kid38.value || kid16.value==kid39.value || kid16.value==kid40.value || kid16.value==kid41.value || kid17.value==kid18.value || kid17.value==kid19.value 
      || kid17.value==kid20.value || kid17.value==kid21.value || kid17.value==kid22.value || kid17.value==kid23.value || kid17.value==kid24.value || kid17.value==kid25.value || kid17.value==kid26.value || kid17.value==kid27.value || kid17.value==kid28.value 
      || kid17.value==kid29.value || kid17.value==kid30.value || kid17.value==kid31.value || kid17.value==kid32.value || kid17.value==kid33.value || kid17.value==kid34.value || kid17.value==kid35.value || kid17.value==kid36.value || kid17.value==kid37.value 
      || kid17.value==kid38.value || kid17.value==kid39.value || kid17.value==kid40.value || kid17.value==kid41.value || kid18.value==kid19.value || kid18.value==kid20.value || kid18.value==kid21.value || kid18.value==kid22.value || kid18.value==kid23.value 
      || kid18.value==kid24.value || kid18.value==kid25.value || kid18.value==kid26.value || kid18.value==kid27.value || kid18.value==kid28.value || kid18.value==kid29.value || kid18.value==kid30.value || kid18.value==kid31.value || kid18.value==kid32.value 
      || kid18.value==kid33.value || kid18.value==kid34.value || kid18.value==kid35.value || kid18.value==kid36.value || kid18.value==kid37.value || kid18.value==kid38.value || kid18.value==kid39.value || kid18.value==kid40.value || kid18.value==kid41.value 
      || kid19.value==kid20.value || kid19.value==kid21.value || kid19.value==kid22.value || kid19.value==kid23.value || kid19.value==kid24.value || kid19.value==kid25.value || kid19.value==kid26.value || kid19.value==kid27.value || kid19.value==kid28.value 
      || kid19.value==kid29.value || kid19.value==kid30.value || kid19.value==kid31.value || kid19.value==kid32.value || kid19.value==kid33.value || kid19.value==kid34.value || kid19.value==kid35.value || kid19.value==kid36.value || kid19.value==kid37.value 
      || kid19.value==kid38.value || kid19.value==kid39.value || kid19.value==kid40.value || kid19.value==kid41.value || kid20.value==kid21.value || kid20.value==kid22.value || kid20.value==kid23.value || kid20.value==kid24.value || kid20.value==kid25.value 
      || kid20.value==kid26.value || kid20.value==kid27.value || kid20.value==kid28.value || kid20.value==kid29.value || kid20.value==kid30.value || kid20.value==kid31.value || kid20.value==kid32.value || kid20.value==kid33.value || kid20.value==kid34.value 
      || kid20.value==kid35.value || kid20.value==kid36.value || kid20.value==kid37.value || kid20.value==kid38.value || kid20.value==kid39.value || kid20.value==kid40.value || kid20.value==kid41.value || kid21.value==kid22.value || kid21.value==kid23.value 
      || kid21.value==kid24.value || kid21.value==kid25.value || kid21.value==kid26.value || kid21.value==kid27.value || kid21.value==kid28.value || kid21.value==kid29.value || kid21.value==kid30.value || kid21.value==kid31.value || kid21.value==kid32.value 
      || kid21.value==kid33.value || kid21.value==kid34.value || kid21.value==kid35.value || kid21.value==kid36.value || kid21.value==kid37.value || kid21.value==kid38.value || kid21.value==kid39.value || kid21.value==kid40.value || kid21.value==kid41.value 
      || kid22.value==kid23.value || kid22.value==kid24.value || kid22.value==kid25.value || kid22.value==kid26.value || kid22.value==kid27.value || kid22.value==kid28.value || kid22.value==kid29.value || kid22.value==kid30.value || kid22.value==kid31.value 
      || kid22.value==kid32.value || kid22.value==kid33.value || kid22.value==kid34.value || kid22.value==kid35.value || kid22.value==kid36.value || kid22.value==kid37.value || kid22.value==kid38.value || kid22.value==kid39.value || kid22.value==kid40.value 
      || kid22.value==kid41.value || kid23.value==kid24.value || kid23.value==kid25.value || kid23.value==kid26.value || kid23.value==kid27.value || kid23.value==kid28.value || kid23.value==kid29.value || kid23.value==kid30.value || kid23.value==kid31.value 
      || kid23.value==kid32.value || kid23.value==kid33.value || kid23.value==kid34.value || kid23.value==kid35.value || kid23.value==kid36.value || kid23.value==kid37.value || kid23.value==kid38.value || kid23.value==kid39.value || kid23.value==kid40.value 
      || kid23.value==kid41.value || kid24.value==kid25.value || kid24.value==kid26.value || kid24.value==kid27.value || kid24.value==kid28.value || kid24.value==kid29.value || kid24.value==kid30.value || kid24.value==kid31.value || kid24.value==kid32.value 
      || kid24.value==kid33.value || kid24.value==kid34.value || kid24.value==kid35.value || kid24.value==kid36.value || kid24.value==kid37.value || kid24.value==kid38.value || kid24.value==kid39.value || kid24.value==kid40.value || kid24.value==kid41.value 
      || kid25.value==kid26.value || kid25.value==kid27.value || kid25.value==kid28.value || kid25.value==kid29.value || kid25.value==kid30.value || kid25.value==kid31.value || kid25.value==kid32.value || kid25.value==kid33.value || kid25.value==kid34.value 
      || kid25.value==kid35.value || kid25.value==kid36.value || kid25.value==kid37.value || kid25.value==kid38.value || kid25.value==kid39.value || kid25.value==kid40.value || kid25.value==kid41.value || kid26.value==kid27.value || kid26.value==kid28.value 
      || kid26.value==kid29.value || kid26.value==kid30.value || kid26.value==kid31.value || kid26.value==kid32.value || kid26.value==kid33.value || kid26.value==kid34.value || kid26.value==kid35.value || kid26.value==kid36.value || kid26.value==kid37.value 
      || kid26.value==kid38.value || kid26.value==kid39.value || kid26.value==kid40.value || kid26.value==kid41.value || kid27.value==kid28.value || kid27.value==kid29.value || kid27.value==kid30.value || kid27.value==kid31.value || kid27.value==kid32.value 
      || kid27.value==kid33.value || kid27.value==kid34.value || kid27.value==kid35.value || kid27.value==kid36.value || kid27.value==kid37.value || kid27.value==kid38.value || kid27.value==kid39.value || kid27.value==kid40.value || kid27.value==kid41.value 
      || kid28.value==kid29.value || kid28.value==kid30.value || kid28.value==kid31.value || kid28.value==kid32.value || kid28.value==kid33.value || kid28.value==kid34.value || kid28.value==kid35.value || kid28.value==kid36.value || kid28.value==kid37.value 
      || kid28.value==kid38.value || kid28.value==kid39.value || kid28.value==kid40.value || kid28.value==kid41.value || kid29.value==kid30.value || kid29.value==kid31.value || kid29.value==kid32.value || kid29.value==kid33.value || kid29.value==kid34.value 
      || kid29.value==kid35.value || kid29.value==kid36.value || kid29.value==kid37.value || kid29.value==kid38.value || kid29.value==kid39.value || kid29.value==kid40.value || kid29.value==kid41.value || kid30.value==kid31.value || kid30.value==kid32.value 
      || kid30.value==kid33.value || kid30.value==kid34.value || kid30.value==kid35.value || kid30.value==kid36.value || kid30.value==kid37.value || kid30.value==kid38.value || kid30.value==kid39.value || kid30.value==kid40.value || kid30.value==kid41.value 
      || kid31.value==kid32.value || kid31.value==kid33.value || kid31.value==kid34.value || kid31.value==kid35.value || kid31.value==kid36.value || kid31.value==kid37.value || kid31.value==kid38.value || kid31.value==kid39.value || kid31.value==kid40.value 
      || kid31.value==kid41.value || kid32.value==kid33.value || kid32.value==kid34.value || kid32.value==kid35.value || kid32.value==kid36.value || kid32.value==kid37.value || kid32.value==kid38.value || kid32.value==kid39.value || kid32.value==kid40.value 
      || kid32.value==kid41.value || kid33.value==kid34.value || kid33.value==kid35.value || kid33.value==kid36.value || kid33.value==kid37.value || kid33.value==kid38.value || kid33.value==kid39.value || kid33.value==kid40.value || kid33.value==kid41.value 
      || kid34.value==kid35.value || kid34.value==kid36.value || kid34.value==kid37.value || kid34.value==kid38.value || kid34.value==kid39.value || kid34.value==kid40.value || kid34.value==kid41.value || kid35.value==kid36.value || kid35.value==kid37.value 
      || kid35.value==kid38.value || kid35.value==kid39.value || kid35.value==kid40.value || kid35.value==kid41.value || kid36.value==kid37.value || kid36.value==kid38.value || kid36.value==kid39.value || kid36.value==kid40.value || kid36.value==kid41.value 
      || kid37.value==kid38.value || kid37.value==kid39.value || kid37.value==kid40.value || kid37.value==kid41.value || kid38.value==kid39.value || kid38.value==kid40.value || kid38.value==kid41.value || kid39.value==kid40.value || kid39.value==kid41.value 
      || kid40.value==kid41.value) {
      alert("Mhmm... Check for multi-nominations. Students can be nominated only for ONE thing.");
      return;
    }

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log("ok");
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = document.querySelector(".thankyou_message");
          var kidsNames = document.querySelector(".kidsnames");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
            kidsNames.style.display= "none";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();