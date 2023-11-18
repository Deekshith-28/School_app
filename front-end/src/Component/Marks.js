import React, { useState, useEffect } from 'react'

export default function Marks() {
    let [data, setData] = useState(null)
    let [teacherName, setTeacher] = useState()
    let [subject, setSubject] = useState()
    let [marks, setMarks] = useState()
    let [ID, setID] = useState("")
    let [btn, setBtn] = useState("btn btn-primary btn-sm invisible")
    function getData() {
        fetch("http://localhost:4000/marks")
            .then((res) => res.json())
            .then((data) => setData(data))
    }
    function addData() {
        setBtn("btn btn-primary btn-sm invisible")
        fetch(`http://localhost:4000/marks/${ID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ teacherName, subject, marks })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                getData()

            })



    }

    function Edit(id, name, subject, marks) {
        setID(id)
        setTeacher(name)
        setMarks(marks)
        setSubject(subject)
        setBtn("btn btn-primary btn-sm")
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="container mt-5">
            <h2 class="text-center">Marks Table</h2>
            <div class="input-group mb-3" style={{ maxWidth: '600px' }}>
                <input type="text" class="form-control" placeholder="Add teacher name" aria-label="Recipient's username" aria-describedby="button-addon2" value={teacherName} onChange={(e) => { setTeacher(e.target.value) }} />
                <input type="text" class="form-control" placeholder="Add Subject name" aria-label="Recipient's username" aria-describedby="button-addon2" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                <input type="number" class="form-control" placeholder="Add Marks" aria-label="Recipient's username" aria-describedby="button-addon2" value={marks} onChange={(e) => { setMarks(e.target.value) }} />
                <div class="input-group-append">
                    <button class={btn} type="button" id="button-addon2" onClick={addData}>Save</button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Teacher Name</th>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((ele, ind) => (
                            <tr>
                                <td>{ele.studentID}</td>
                                <td>{ele.studentName}</td>
                                <td>{ele.teacherName ? ele.teacherName : null}</td>
                                <td>{ele.subject ? ele.subject : null}</td>
                                <td>{ele.marks ? ele.marks : null}</td>
                                <td><button class="btn btn-primary btn-sm" onClick={() => Edit(ele._id, ele.teacherName, ele.subject, ele.marks)}>Edit</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    )
}
