//<![CDATA[
    
        $(function(){
          
    $('input.checkbutton').on('change', function() {
        $('input.checkbutton').not(this).prop('checked', false);
    });
    
    $(".textBox").focus(function() {
        $(".checkbutton").prop("checked", false);
    });
    
    $(document).ready(function() {
        $(".checkbutton").change(function() {
            if ($(this).not(":checked")) {
                $('.textBox').val("");
            }
        });
    });
    
    
        });
    
      //]]>
