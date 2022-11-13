function update_list(updated_users) {
  $.each(updated_users, function (index, userName) {
    $("#users .list").append(
      '<li class="mt-5"><h3 class="name">' +
        "Title : " +
        userName.title +
        "</h3> <p>" +
        "<h5> Description : </h5>" +
        userName.content +
        "</p></li>"
    );
  });
}

const getData = () => {
  const rawData = sessionStorage.getItem("Notes");
  const user = JSON.parse(rawData);
  update_list(user);
};
getData();
