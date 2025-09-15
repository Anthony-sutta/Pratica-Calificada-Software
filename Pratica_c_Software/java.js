
function mensaje(){
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Quiere comprarlo?",
  text: "",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "SI",
  cancelButtonText: "No",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "-_-!",
      text: "Que buena que compres",
      icon: "Comprado"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "cancelado",
      text: "Que feo que no compres :)",
      icon: "error"
    });
  }
});
}