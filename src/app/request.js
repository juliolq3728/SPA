export function eddittask(props) {
  fetch("/api/task/" + props._id, {
    method: "PUT",
    body: JSON.stringify(props),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    location.reload();
}

export function addtask(props) {
  if (props.Servicio != null && props.Cliente != null && props.Descripcion) {
    fetch("/api/task/", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      location.reload();
  } else {
    alert("algun campo esta sin llenar");
  }
}

export function deletedtask(props) {
  fetch("/api/task/" + props._id, {
    method: "DELETE",
    body: JSON.stringify(props),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  location.reload();
}
