$.validator.addMethod(
  "lowercasesymbols",
  function(value) {
    return value.match("^[a-zA-Z]{3,16}$");
  },
  "Você deve usar somente letra maiúscula."
);

$(function() {
  $(".form-principal").validate();
});
