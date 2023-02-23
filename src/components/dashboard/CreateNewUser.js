import { useState } from "react";

export default function CreateNewUser(){
    const [newUserData, setNewUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        phoneNumber: "",
        standard: "",
        gender: "",
        role: "",
        status: "active",
        // classroom: "",
    });

    let name, value;
    const updateUserData = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setNewUserData({...newUserData, [name]: value });
    }

    const resetAllData= ()=>{
        setNewUserData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: "",
            phoneNumber: "",
            standard: "",
            gender: "",
            role: "",
            status: "active",
        })
    }

    const onSubmit= async (event)=>{
        event.preventDefault();
        const { firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        phoneNumber,
        standard,
        gender,
        role,
        status} = newUserData; 
        const response = await fetch('https://edutech-7525e-default-rtdb.firebaseio.com/users.json',
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({firstName,
                lastName,
                email,
                password,
                dateOfBirth,
                phoneNumber,
                standard,
                gender,
                role,
                status}),
        });
        if(response){ 
            alert("Data Stored");
            resetAllData();
        }
        else(alert("fill the data"));
    }

    return <form class="form-horizontal" role="form" style={{maxWidth: "530px",
        padding: "15px",
        margin: "0 auto",
        borderRadius: "0.3em",
        backgroundColor: "#f2f2f2"}}>
    <h5>Create New User</h5>
    <div class="form-group">
        <label for="firstName" class="col-sm-3 control-label">First Name</label>
        <div class="col-sm-9">
            <input 
                type="text" 
                id="firstName" 
                placeholder="First Name" 
                class="form-control" 
                autofocus
                name="firstName"
                value={newUserData ? newUserData.firstName : ""}
                onChange={updateUserData}
                // required="true"
            />
        </div>
    </div>
    <div class="form-group">
        <label for="lastName" class="col-sm-3 control-label">Last Name</label>
        <div class="col-sm-9">
            <input 
                type="text" 
                id="lastName" 
                placeholder="Last Name" 
                class="form-control" 
                autofocus
                name="lastName"
                value={newUserData ? newUserData.lastName : ""}
                onChange={updateUserData}
            />
        </div>
    </div>
    <div class="form-group">
        <label for="email" class="col-sm-3 control-label">Email* </label>
        <div class="col-sm-9">
            <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                class="form-control" 
                name= "email"
                value={newUserData ? newUserData.email : ""}
                onChange={updateUserData}
            />
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">Password*</label>
        <div class="col-sm-9">
            <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                class="form-control"
                name="password"
                value={newUserData ? newUserData.password : ""}
                onChange={updateUserData}
            />
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">Confirm Password*</label>
        <div class="col-sm-9">
            <input type="password" id="password" placeholder="Password" class="form-control"/>
        </div>
    </div>
    <div class="form-group">
        <label for="birthDate" class="col-sm-3 control-label">Date of Birth*</label>
        <div class="col-sm-9">
            <input 
                type="date" 
                id="birthDate" 
                class="form-control"
                name="dateOfBirth"
                value={newUserData ? newUserData.dateOfBirth : ""}
                onChange={updateUserData}
            />
        </div>
    </div>
    <div class="form-group">
        <label for="phoneNumber" class="col-sm-3 control-label">Phone number </label>
        <div class="col-sm-9">
            <input 
                type="phoneNumber"  
                id="phoneNumber" 
                placeholder="Phone number" 
                class="form-control"
                name="phoneNumber"
                value={newUserData ? newUserData.phoneNumber : ""}
                onChange={updateUserData}
            />
            <span class="help-block">Your phone number won't be disclosed anywhere </span>
        </div>
    </div>
    <div class="form-group">
            <label for="Height" class="col-sm-3 control-label">Class </label>
        <div class="col-sm-9">
            <input 
                type="number" 
                id="class" 
                placeholder="Please write your height in centimetres" 
                class="form-control"
                name="standard"
                value={newUserData ? newUserData.standard : ""}
                onChange={updateUserData}
            />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-sm-3">Gender</label>
        <div class="col-sm-6">
            <div class="row">
                <div class="col-sm-4">
                    <label class="radio-inline">
                        <input 
                            type="radio" 
                            id="femaleRadio" 
                            value="Female" 
                            name="gender"
                        />Female
                    </label>
                </div>
                <div class="col-sm-4">
                    <label class="radio-inline">
                        <input 
                            type="radio" 
                            id="maleRadio" 
                            value="Male"
                            name="gender"
                        />Male
                    </label>
                </div>
            </div>
        </div>
    </div> 
    <div class="form-group">
        <label class="control-label col-sm-3">Role</label>
        <div class="col-sm-6">
            <div class="row">
                <div class="col-sm-4">
                    <label class="radio-inline">
                        <input 
                            type="radio" 
                            id="studentRadio"
                            value="Student"
                            name="role"
                        />Student
                    </label>
                </div>
                <div class="col-sm-4">
                    <label class="radio-inline">
                        <input 
                            type="radio" 
                            id="teacherRadio" 
                            value="Teacher"
                            name="role"
                        />Teacher
                    </label>
                </div>
            </div>
        </div>
    </div> 
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <span class="help-block">*Required fields</span>
        </div>
    </div>
    <button type="submit" class="btn btn-primary btn-block" onClick={onSubmit}>Register</button>
</form>
}