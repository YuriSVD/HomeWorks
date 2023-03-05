let sessions = JSON.parse(localStorage.getItem("sessions"));
for (let session of sessions) {
    let sessionInfo = session.split(",");
    let divSession = document.createElement("div");
    divSession.append(`Date: ${sessionInfo[0]}, Time: ${sessionInfo[1]}`);
    document.body.append(divSession);
}