import React, { useState, useEffect } from 'react'

export default function Teacher() {
    let [data, setData] = useState(null)
    let [name, setName] = useState("")
    let [subject, setSubject] = useState("")
    let [btn, setbtn] = useState("Add")
    let [ID, setID] = useState("")
    function getData() {
        fetch("http://localhost:4000/teacher")
            .then((res) => res.json())
            .then((data) => setData(data))
    }

    function addData() {
        fetch("http://localhost:4000/teacher", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, subject })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setName("")
                setSubject("")
                getData()
            })


    }
    function deleteData(id) {
        fetch(`http://localhost:4000/teacher/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                getData()
            })

    }




    function editData() {
        fetch(`http://localhost:4000/teacher/${ID}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ name,subject})
        })
            .then((res) => res.json())
            .then((data) =>{
                console.log(data)
                setName("")
                setSubject("")
                setbtn("Add")
                getData()
            })
        
    }

    function Edit(id, name, subject) {
        setID(id)
        setSubject(subject)
        setName(name)
        setbtn("Edit")
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div class="container mt-5">
            <h2 class="text-center">Teacher Table</h2>
            <div class="input-group mb-3" style={{ maxWidth: '400px' }}>
                <input type="text" class="form-control" placeholder="Add teacher name" aria-label="Recipient's username" aria-describedby="button-addon2" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <input type="text" class="form-control" placeholder="Add subject name" aria-label="Recipient's username" aria-describedby="button-addon2" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <div class="input-group-append">
                    <button class="btn btn-primary btn-sm" type="button" id="button-addon2" onClick={btn == "Add" ? addData : editData}>{btn}</button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Teacher Name</th>
                        <th>Subject</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((ele, ind) => (
                            <tr>
                                <td>{ind}</td>
                                <td>{ele.name}</td>
                                <td>{ele.subject}</td>
                                <td><button class="btn btn-danger btn-sm" onClick={deleteData.bind(this, ele._id)}>Delete</button></td>
                                <td><button class="btn btn-primary btn-sm" onClick={() => Edit(ele._id, ele.name, ele.subject)}>Edit</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    )
}
