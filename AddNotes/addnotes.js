const getData = () => {
  const rawData = sessionStorage.getItem("UserId");
  const user = JSON.parse(rawData);
  $("#welcome").text(`Welcome, ${user.name}. Add a new note`);
};
getData();

let newNotes = [];

async function getNotes() {
  try {
    const user = JSON.parse(sessionStorage.getItem("UserId"));
    const rawNotes = await fetch(
      `https://mockend.com/lucafregoso/json-mock/posts?author_eq=${user.id}`
    );
    const notes = await rawNotes.json();
    newNotes = [...notes];
  } catch (err) {
    console.log(err)
  }
}
getNotes();

$("form").submit((event) => {
  event.preventDefault();
  let title = $("#title").first().val();
  let content = $("#description").first().val();
  let newNote = {
    content,
    id: newNotes.length + 1,
    title,
  };
  if (newNote.content === "" && newNote.title === "") {
    $("#span")
      .text("ERROR! Both Title and description must be compiled")
      .show()
      .fadeOut(2000);
  } else {
    newNotes = [newNote, ...newNotes];
    sessionStorage.setItem("Notes", JSON.stringify(newNotes));
    setTimeout(() => {
      location.replace("http://127.0.0.1:5500/NotesList/index.html");
    }, 700);
  }
});
