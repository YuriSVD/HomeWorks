let sessions = JSON.parse(localStorage.getItem("sessions"));
for (let session of sessions) {
    let sessionInfo = session.split("T");
    let clearInfo;
    for (let info of sessionInfo) {
    if (info.includes("Z")) {
        clearInfo = info.slice(0, info.length - 1);
        }
    }
    let divSession = document.createElement("div");
    divSession.append(`Date: ${sessionInfo[0]}, Time: ${clearInfo}`);
    document.body.append(divSession);
}