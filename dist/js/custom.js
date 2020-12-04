const tagContainer = document.querySelector('.tag-container');
    const input = document.querySelector('.tag-container input');

    let tags = [];

    function createTag(label) {
      const div = document.createElement('div');
      div.setAttribute('class', 'tag');
      const span = document.createElement('span');
      span.innerHTML = label;
      const closeIcon = document.createElement('i');
      closeIcon.innerHTML = 'close';
      closeIcon.setAttribute('class', 'material-icons');
      closeIcon.setAttribute('data-item', label);
      div.appendChild(span);
      div.appendChild(closeIcon);
      return div;
    }

    function clearTags() {
      document.querySelectorAll('.tag').forEach(tag => {
        tag.parentElement.removeChild(tag);
      });
    }

    function addTags() {
      clearTags();
      tags.slice().reverse().forEach(tag => {
        tagContainer.prepend(createTag(tag));
      });
    }

    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          e.target.value.split(',').forEach(tag => {
            tags.push(tag);  
          });
          
          addTags();
          input.value = '';
        }
    });
    document.addEventListener('click', (e) => {
      console.log(e.target.tagName);
      if (e.target.tagName === 'I') {
        const tagLabel = e.target.getAttribute('data-item');
        const index = tags.indexOf(tagLabel);
        tags = [...tags.slice(0, index), ...tags.slice(index+1)];
        addTags();    
      }
    })

    input.focus();


    // Add office addresses

  var max_fields      = 10;
  var wrapper         = $(".input_fields_wrap"); 
  var add_button      = $(".add_field_button");

$(add_button).click(function(e){
	e.preventDefault();
	var total_fields = wrapper[0].childNodes.length;
	if(total_fields < max_fields){
		$(wrapper).append('<input type="type" class="form-control" id="inputofficeaddresses" placeholder="Address">');
	}
});
$(remove_button).click(function(e){
	e.preventDefault();
	var total_fields = wrapper[0].childNodes.length;
	if(total_fields>1){
		wrapper[0].childNodes[total_fields-1].remove();
	}
});