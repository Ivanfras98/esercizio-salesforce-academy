$("form").submit((event) => {
  event.preventDefault();
  let username = $("input").first().val();
  let password = $("#password").first().val();
  async function getData() {
    const rawData = await fetch(
      `https://mockend.com/lucafregoso/json-mock/users?name_eq=${username}&password_eq=${password}&limit=1`
    );
    const data = await rawData.json();
    if (data.length > 0) {
      data.forEach((e) => {
        sessionStorage.setItem("UserId", JSON.stringify(e));
        $("#span").text("You have logged in, wait few seconds").show().fadeOut(700);
      });
      setTimeout(() => {
        location.replace("http://127.0.0.1:5500/AddNotes/index.html");
      }, 700);
    } else throw Error("Wrong datas");
  }
  getData().catch((e) => $("#span").text(e).show().fadeOut(2000));
});
