//filter issues by status and display them
function filterbystatus()
{
    var result = 0;
    for (i = 0; i < window.localStorage.length; i++) {
        key = window.localStorage.key(i);
        if (key.slice(0, 5) === "issue") {
            result++;
        }
    }
    var datacount = result;
    if (datacount > 0)
    {
        var render = "<table border='1'>";
        render += "<tr><th>Id</th><th>Type</th><th>Name</th><th>Sprint id</th><th>createdby</th><th>asignee</th><th>description</th><th>status</th> <th>tasks</th><th>comments</th><th>updatedAt</th><th>createdat</th></tr>";
        for (i = 0; i < datacount; i++) {
            var key = localStorage.key(i); //Get  the Key
            var issue = localStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(issue); //Parse the Data back into the object
            if (data.status == document.getElementById('filterselect2').value)
            {

                render += "<tr><td>" + data.id + "</td><td>" + data.type + " </td>";
                render += "<td>" + data.name + "</td>";
                render += "<td>" + data.sprint + "</td>";
                render += "<td>" + data.createdBy + "</td>";
                render += "<td>" + data.asignee + "</td>";
                render += "<td>" + data.description + "</td>";
                render += "<td>" + data.status + "</td>";
                render += "<td>" + data.tasks + "</td>";
                render += "<td>" + data.comments + "</td>";
                render += "<td>" + data.updatedAt + "</td>";
                render += "<td>" + data.createdAt + "</td></tr>";
            }
        }
        render += "</table>";
        filteredtable.innerHTML = render;
    }
}
//filter issues by sprint and display them
function filterbysprint()
{
    var result = 0;
    for (i = 0; i < window.localStorage.length; i++) {
        key = window.localStorage.key(i);
        if (key.slice(0, 5) === "issue") {
            result++;
        }
    }
    var datacount = result;
    if (datacount > 0)
    {
        var render = "<table border='1'>";
        render += "<tr><th>Id</th><th>Type</th><th>Name</th><th>Sprint id</th><th>createdby</th><th>asignee</th><th>description</th><th>status</th> <th>subtasks</th><th>comments</th><th>updatedAt</th><th>createdat</th></tr>";
        for (i = 0; i < datacount; i++) {
            var key = localStorage.key(i); //Get  the Key
            var issue = localStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(issue); //Parse the Data back into the object
            if (data.sprint == document.getElementById('filterselect').value)
            {

                render += "<tr><td>" + data.id + "</td><td>" + data.type + " </td>";
                render += "<td>" + data.name + "</td>";
                render += "<td>" + data.sprint + "</td>";
                render += "<td>" + data.createdBy + "</td>";
                render += "<td>" + data.asignee + "</td>";
                render += "<td>" + data.description + "</td>";
                render += "<td>" + data.status + "</td>";
                render += "<td>" + data.tasks + "</td>";
                render += "<td>" + data.comments + "</td>";
                render += "<td>" + data.updatedAt + "</td>";
                render += "<td>" + data.createdAt + "</td></tr>";
            }
        }
        render += "</table>";
        filteredtable.innerHTML = render;
    }
}
