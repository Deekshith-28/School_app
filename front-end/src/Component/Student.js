import React, { useEffect, useState } from 'react'

export default function Student() {
    let [data, setData] = useState(null)
    let [btn, setbtn] = useState("Add")
    let [name, setName] = useState("")
    let [ID,setID]=useState("")

    function getData() {
        fetch("http://localhost:4000/student")
            .then((res) => res.json())
            .then((data) => setData(data))
    }

    function addData() {
        fetch("http://localhost:4000/student", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name})
        })
            .then((res) => res.json())
            .then((data) => {
                setName("")
                getData() 
            })
            
    }
    function deleteData(id) {
       
        fetch(`http://localhost:4000/student/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((data) => {
                getData()
            })

          
    }

    function editData() {
        fetch(`http://localhost:4000/student/${ID}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({name})
        })
            .then((res) => res.json())
            .then((data) => {
                setName("")
                setbtn("Add")
                getData()   
            })
            
    }

    function Edit(id,name){
        setID(id) 
        
        setName(name)
        setbtn("Edit")
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div class="container mt-5">
            <h2 class="text-center">Student Table</h2>
            <div class="input-group mb-3" style={{ maxWidth: '400px' }}>
                <input type="text" class="form-control" placeholder="Add student name" aria-label="Recipient's username" aria-describedby="button-addon2"value={name} onChange={(e) => { setName(e.target.value) }} />
                <div class="input-group-append">
                    <button class="btn btn-primary btn-sm" type="button" id="button-addon2" onClick={btn=="Add"?addData:editData}>{btn}</button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((ele, ind) => (
                            <tr>
                                <td>{ind}</td>
                                <td>{ele._id}</td>
                                <td>{ele.name}</td>
                                <td><button class="btn btn-danger btn-sm" onClick={deleteData.bind(this,ele._id)}>Delete</button></td>
                                <td><button class="btn btn-primary btn-sm" onClick={()=>Edit(ele._id,ele.name) }>Edit</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    )
}
