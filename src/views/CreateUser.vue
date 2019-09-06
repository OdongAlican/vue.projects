<template>
<div class="container">
    <div class="headerSection">
        <label>
            CREATE USER
        </label>
    </div>
    <div class="lower">
        <div class="title">
            <div class="titleLabel">
                Title:
            </div>
            <div class="titleValue">
            <div class="mister">
                <div class="input">
                    <input type="radio" name="title" id="mister">
                </div>
                <div class="label">
                    <label>
                        Mr.
                    </label>
                </div>
            </div>
            <div class="mises">
                <div class="input">
                    <input type="radio" name="title" id="mister">
                </div>
                <div class="label">
                    <label>
                        Mrs.
                    </label>
                </div>
            </div>
            <div class="miss">
                <div class="input">
                    <input type="radio" name="title" id="mister">
                </div>
                <div class="label">
                    <label>
                        Miss.
                    </label>
                </div>
            </div>
            </div>
        </div>
        <div class="name">
            <div class="firstName">
                <div class="label">
                    <label>
                        First Name:
                    </label>
                </div>
                <div class="input">
                    <input type="text" name="firstName" id="firstName">
                </div>
            </div>
            <div class="lastName">
                <div class="label">
                    <label>
                        Last Name:
                    </label>
                </div>
                <div class="input">
                    <input type="text" name="lastName" id="lastName">
                </div>
            </div>
        </div>
        <div class="position">
            <div class="concultant">
                <div class="input">
                    <input type="radio" name="position" id="consultant">
                </div>
                <div class="label">
                    <label>
                        Concultant
                    </label>
                </div>
            </div>
            <div class="projectManager">
                <div class="input">
                    <input type="radio" name="position" id="projectManager">
                </div>
                <div class="label">
                    <label>
                        Project Manager
                    </label>
                </div>
            </div>
            <div class="developer">
                <div class="input">
                    <input type="radio" name="position" id="developer">
                </div>
                <div class="label">
                    <label>
                        Developer
                    </label>
                </div>
            </div>
        </div>
        <div class="contact">
        <div class="email">
            <div class="label">
                <label>
                    Email Address:
                </label>
            </div>
            <div class="input">
                <input type="text" name="email" id="email">
            </div>
        </div>
        <div class="phone">
            <div class="label">
                <label>
                Phone Number:
                </label>
            </div>
            <div class="input">
                <input type="text" name="phone" id="phone">
            </div>
        </div>
        </div>
        <div class="button">
            <div class="add">
                <button>
                    ADD USER
                </button>
            </div>
            <div class="cancel">
                <button>
                    CANCEL
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'CreateUser'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        margin-left: 50px;
        margin-top: 20px;
        width: 900px;
        height: 550px;
        /* background-color: aqua; */
        /* box-shadow: 1px 1px 1px 2px  #D2D1D1;; */
    }

    .headerSection {
        width: 320px;
        height: 50px;
        margin: auto;
        margin-top: 10px;
        font-size: xx-large;
        font-weight: bolder;
        padding-left: 80px;
        padding-top: 10px;
    }

    .lower {
        width: 880px;
        margin-left: 10px;
        height: 440px;
        margin-top: 20px;
    }

    .title {
        height: 80px;
        border: 1px solid #D2D1D1;
        border-radius: 10px;
        padding-top: 10px;
        padding-left: 10px;
    }

    .titleValue{
        display: flex;
        font-weight: bolder;
        font-size: large;
    }

    .titleLabel {
        width: 300px;
        font-weight: bolder;
        font-size: larger;
    }

    .mister , .mises, .miss {
        margin-right: 40px;
        display: flex;
        margin-top: 20px;
    }

    .name {
        margin-top: 10px;
        display: flex;
        height: 90px;
        font-weight: bolder;
        font-size: larger;
        padding-top: 10px;
        padding-left: 10px;
        border: 1px solid #D2D1D1;
        border-radius: 10px;
    }

    .contact {
        margin-top: 10px;
        display: flex;
        height: 90px;
        font-weight: bolder;
        font-size: larger;
        padding-top: 10px;
        padding-left: 10px;
        border: 1px solid #D2D1D1;
        border-radius: 10px;
    }

    .firstName, .lastName{
        margin-right: 100px;
    }

    .firstName .input, .lastName .input {
        margin-top: 10px;
    }

    .firstName .input input, .lastName .input input {
        height: 30px;
        width: 280px;
        border-radius: 3px;
        border: 1px solid #D2D1D1;
        padding-left: 20px;
    }

    input[type = radio]{
        cursor: pointer;
    }

     .email .input, .phone .input {
        margin-top: 10px;
    }

    .email, .phone{
        margin-right: 100px;
    }

    .email .input input, .phone .input input {
        height: 30px;
        width: 280px;
        border-radius: 3px;
        border: 1px solid #D2D1D1;
        padding-left: 20px;
    }


    input:focus{
        outline: none !important;
    }

    .position {
        display: flex;
        margin-top: 10px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid #D2D1D1;
        padding-top: 10px; 
        padding-left: 10px; 
        font-weight: bolder;
        font-size: larger;
    }

    .concultant, .projectManager, .developer {
        display: flex;
        margin-right: 30px;
    }

    .button {
        margin-top: 10px;
        display: flex;
        height: 40px;
        padding-left: 180px;
    }

    button {
        width: 200px;
        height: 40px;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        font-size: medium;
        color: white;
        cursor: pointer;
    }

    button:focus{
        outline: none !important;
    }

    .button .cancel, .button .add {
        margin-left: 20px;
    }

    .cancel  button{
        background-color: red;
    }


    .add button {
        background-color: green;
    }

</style>
