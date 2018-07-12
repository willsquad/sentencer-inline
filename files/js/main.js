$(document).ready(function() {
    /* document.querySelector("div[contenteditable]").addEventListener("paste", function(e) {
        e.preventDefault();
        var text = (e.originalEvent || e).clipboardData.getData('text/plain');
        document.execCommand("insertHTML", false, text);
    }); */

        /* Get Selection  */
        $('#textarea_input').on('mouseup', function (e) {

            var editor_input_width = document.getElementById("textarea_input").offsetWidth;
    
            var selText = "";
            var cursor_x = e.clientX;
            var cursor_y = e.clientY - 125;
    
            if (window.getSelection) { // all browsers, except IE before version 9
    
                var selRange = window.getSelection();
                var selText = selRange.toString();
    
                /*create an element before the selection to get the position*/
                var oRange = selRange.getRangeAt(0); //get the text range
                var oRect = oRange.getBoundingClientRect();
    
                var cursor_y = oRect.top - 210;
                var cursor_x = oRect.left;
    
                if (cursor_x > editor_input_width / 1.05) {
                    var cursor_x = editor_input_width / 1.05;
                }
    
                if (selText !== "") {
                    //alert (selText);
                    $('.inline_suggestions').addClass('active');
                    $('.inline_suggestions').css({
                        "top": "" + cursor_y + "px",
                        "left": "" + cursor_x + "px"
                    });


                    if(selText.split(' ').length == 1) { // One word
                        $('#selected_word').text(selText);
                    } else {
                        $('#selected_word').text("happy");
                    }
                    
    
                } else {
                    $('.inline_suggestions').removeClass('active');
                }
            } else {
                if (document.selection.createRange) { // Internet Explorer
                    var range = document.selection.createRange();
                    var selText = range.text;
                }
    
                if (selText !== "") {
                    //alert (selText);
                    $('.inline_suggestions').toggleClass('active');
                    $('.inline_suggestions').css({
                        "top": "" + cursor_y + "px",
                        "left": "" + cursor_x + "px"
                    });

                    if(selText.split(' ').length == 1) { // One word
                        $('#selected_word').text(selText);
                    } else {
                        $('#selected_word').text("happy");
                    }
    
                } else {
    
                }
            }
    
        });
        /* Get Selection */
});