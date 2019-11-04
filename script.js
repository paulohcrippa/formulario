$(document).ready(function() {
    $('input:radio[name="opcao"]').on("change", function() {
        if (this.checked && this.value == 'sim') {
            $("#facebook, #instagram, #linkedin").show();           
        } else {
            $("#facebook, #instagram, #linkedin").hide();            
        }
    });
});